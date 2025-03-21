let expressionElement = document.getElementById('expression');
let resultElement = document.getElementById('result');
let currentInput = '';
let operator = null;
let previousInput = '';

/*Chamada quando o usuário seleciona um número de 0-9*/
function selecionar(value) {
    if (value === ',' && currentInput.includes(',')) {
        return; // Evita múltiplas vírgulas
    }
    currentInput += value;
    atualizarDisplay();
}
/*Chamada quando o usuário deseja cancelar a operação (apertando em C)*/
function limpar() {
    currentInput = '';
    previousInput = '';
    operator = null;
    atualizarDisplay();
}

/*Chamada quando o usuário clica no botão = (Calcula resultado)*/
function calcularResultado() {
    if (operator && previousInput && currentInput) {
        let result = calcular(parseFloat(previousInput.replace(',', '.')), parseFloat(currentInput.replace(',', '.')), operator);
        resultElement.textContent = result.toString().replace('.', ',');
        expressionElement.textContent = '';
        currentInput = result.toString().replace('.', ',');
        previousInput = '';
        operator = null;
    }
}

/*Realiza operação com base no operador fornecido*/
function calcular(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'X':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2;
    }
}
/*Chamada após o usuário clica no botão de operador (+, -, X, /)*/
function selecionarOperador(op) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calcularResultado();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
    atualizarDisplay();
}
/*Atualiza o display da calculadora*/
function atualizarDisplay() {
    // Atualiza a expressão
    if (operator) {
        expressionElement.textContent = `${previousInput} ${operator} ${currentInput}`;
    } else {
        expressionElement.textContent = currentInput;
    }

    // Atualiza o resultado
    resultElement.textContent = currentInput || '0';
}