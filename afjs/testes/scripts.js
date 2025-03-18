function somar(){
    var campoPrimeiroNumero = document.getElementById("idDoPrimeiroNumero")
    var campoSegundoNumero = document.getElementById("idDoSegundoNumero")

    alert( parseInt(campoPrimeiroNumero.value) + parseInt(campoSegundoNumero.value));

}

function subtrair(num1, num2){
    alert(num1 - num2);
}

function dividir(num1, num2){
    alert(num1 / num2);
}

function multiplicar(num1, num2){
    alert(num1 * num2);
}