function calculator() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let division = a / b;

    document.getElementById("result").innerHTML =
        "Sum = " + sum + "<br>" +
        "Difference = " + difference + "<br>" +
        "Product = " + product + "<br>" +
        "Division = " + division;
}