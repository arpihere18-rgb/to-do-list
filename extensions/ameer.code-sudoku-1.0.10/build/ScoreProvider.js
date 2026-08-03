"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreProvider = void 0;
const vscode = require("vscode");
class Dependency extends vscode.TreeItem {
    constructor(data, collapsibleState) {
        super(data.title, collapsibleState);
        this.data = data;
        this.collapsibleState = collapsibleState;
        this.contextValue = 'score-item-' + this.data.title;
        this.data = data;
        this.label = data.title;
        if (data.description) {
            this.description = data.description;
            this.iconPath = new vscode.ThemeIcon('arrow-small-right');
        }
        else {
            this.iconPath = new vscode.ThemeIcon('gift');
        }
        if (data.tooltip) {
            this.tooltip = data.tooltip;
        }
        this.scores = data.scores;
    }
}
class ScoreProvider {
    constructor(context) {
        this._items = [];
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }
    parseTreeData(items) {
        const list = {};
        for (var i in items) {
            const d = items[i];
            const date = (new Date(d.date)).toDateString();
            list[date] = list[date] ?? [];
            list[date].push(d);
        }
        const scores = [];
        for (var i in list) {
            scores.push(new Dependency({ title: i, scores: list[i] }, vscode.TreeItemCollapsibleState.Collapsed));
        }
        return scores;
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (typeof element === "undefined") {
            return Promise.resolve(this._items);
        }
        if (typeof element.scores !== "undefined") {
            return Promise.resolve(element.scores.map(item => {
                const timeObj = new Date(item.date);
                return new Dependency({
                    title: timeObj.getHours().toString().padStart(2, '0') + ':' + timeObj.getMinutes().toString().padStart(2, '0'),
                    description: `\tMode: ${item.mode.toUpperCase()}`,
                    tooltip: `Date: ${timeObj.toLocaleString()}\nMode: ${item.mode.toUpperCase()}`
                }, vscode.TreeItemCollapsibleState.None);
            }));
        }
        return Promise.resolve([]);
    }
    refresh(scores) {
        this._items = this.parseTreeData(scores);
        this._onDidChangeTreeData.fire();
    }
}
exports.ScoreProvider = ScoreProvider;
ScoreProvider.viewType = 'sudoku.scoreboard';
//# sourceMappingURL=ScoreProvider.js.map