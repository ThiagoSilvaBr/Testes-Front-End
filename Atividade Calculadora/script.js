let expressionElement = document.getElementById('expression');
let resultElement = document.getElementById('result');
let currentInput = '';
let operator = null;
let previousInput = '';

function selecionar(value) {
    if (value === ',' && currentInput.includes(',')) {
        return; // Evita múltiplas vírgulas
    }
    currentInput += value;
    atualizarDisplay();
}

function limpar() {
    currentInput = '';
    previousInput = '';
    operator = null;
    atualizarDisplay();
}

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