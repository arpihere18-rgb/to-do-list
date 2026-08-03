"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class SudokuGameProvider {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
    }
    resolveWebviewView(webviewView, context, _token) {
        this._view = webviewView;
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.joinPath(this._extensionUri, 'media')
            ]
        };
        if (!vscode.workspace.getConfiguration().has('sudoku.gameLevel')) {
            void vscode.workspace.getConfiguration().update('sudoku.gameLevel', SudokuGameProvider.MODE.NORMAL, vscode.ConfigurationTarget.Global);
        }
        if (!vscode.workspace.getConfiguration().has('sudoku.gameTheme')) {
            void vscode.workspace.getConfiguration().update('sudoku.gameTheme', SudokuGameProvider.THEMES.EDITOR, vscode.ConfigurationTarget.Global);
        }
        webviewView.webview.html = this.getWebviewContent(webviewView.webview, vscode.workspace.getConfiguration().get('sudoku.gameTheme', SudokuGameProvider.THEMES.EDITOR));
        webviewView.webview.onDidReceiveMessage(message => {
            switch (message.command) {
                case 'scores':
                    this._callback(message.data);
                    break;
            }
        });
    }
    getWebviewContent(webview, theme) {
        const nonce = this.getNonce();
        const scriptGamePathOnDisk = vscode.Uri.joinPath(this._extensionUri, 'media', 'game.js');
        const scriptGameUri = webview.asWebviewUri(scriptGamePathOnDisk);
        const scriptPathOnDisk = vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js');
        const scriptUri = webview.asWebviewUri(scriptPathOnDisk);
        const stylesPathOnDisk = vscode.Uri.joinPath(this._extensionUri, 'media', 'main.css');
        const styleMainUri = webview.asWebviewUri(stylesPathOnDisk);
        return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
          <title>Sudoku</title>
          <link href="${styleMainUri.toString()}" rel="stylesheet">
        </head>
        <body data-vscode-context='{"preventDefaultContextMenuItems":true,"webviewSection":"game"}'>
          <div class="wrap ${theme}-theme">
            <div class="container"></div>
          </div>
          <script nonce="${nonce}" src="${scriptGameUri.toString()}"></script>
          <script nonce="${nonce}" src="${scriptUri.toString()}"></script>
        </body>
      </html>`;
    }
    getNonce() {
        let text = '';
        // eslint-disable-next-line max-len
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 32; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    async newGame() {
        const currentView = this._view;
        const level = vscode.workspace.getConfiguration().get('sudoku.gameLevel');
        await currentView?.webview.postMessage({ command: 'new', level });
    }
    async solveGame() {
        const currentView = this._view;
        await currentView?.webview.postMessage({ command: 'solve' });
    }
    async validateGame() {
        const currentView = this._view;
        await currentView?.webview.postMessage({ command: 'validate' });
    }
    async fetchScores(callback) {
        this._callback = callback;
        const currentView = this._view;
        await currentView?.webview.postMessage({ command: 'scores' });
    }
    async setTheme(theme) {
        const currentView = this._view;
        await currentView?.webview.postMessage({ command: 'theme', theme });
    }
}
SudokuGameProvider.viewType = 'sudoku.game';
SudokuGameProvider.MODE = {
    EASY: 'easy',
    NORMAL: 'normal',
    HARD: 'hard',
    EVIL: 'evil',
};
SudokuGameProvider.THEMES = {
    ORIGINAL: 'original',
    EDITOR: 'editor'
};
exports.default = SudokuGameProvider;
//# sourceMappingURL=SudokuGameProvider.js.map