function press(value) {
    let display = document.getElementById("inputbox");
    display.value += value
}
function equal() {
    try {
        let expression = document.getElementById("inputbox").value;
        expression = expression.replace(/(\d+)%/g, "($1/100)");
        expression = expression.replace(/(\d+)\s*\+\s*\((\d+)\/100\)/, "($1 + ($2/100)*$1)");
        expression = expression.replace(/(\d+)\s*\-\s*\((\d+)\/100\)/, "($1 - ($2/100)*$1)");
        let result = eval(expression);
        inputbox.value = result;

    } catch {
        document.getElementById("inputbox").value = "error";
    }
}
function AC() {
    document.getElementById('inputbox').value = "";
}
function backspace() {
    let inputbox = document.getElementById('inputbox');
    inputbox.value = inputbox.value.slice(0, -1);
}