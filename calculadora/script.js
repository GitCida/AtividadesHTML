function calc(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    let result;

switch (operator) {
    case '+': 
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            alert("Você não pode dividir por 0");
            return;
        }
        result = num1 / num2;
        break;
        


    }
    document.getElementById('result').innerText = "Resultado: " + result;
}