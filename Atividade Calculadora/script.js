 /*
 function mostraNoDisplay(numeroParaExibir){
    document.getElementById("display").innerText = numeroParaExibir

    if(numeroParaExibir < 0){
        document.getElementById("display").innerHTML = "<b style='color:red' >" + numeroParaExibir + "</b>"
    }else if (numeroParaExibir > 300){
        document.getElementById("display").innerHTML = "<b style='color:orange' >" + numeroParaExibir + "</b>"
    }else{
        document.getElementById("display").innerHTML = "<b>" + numeroParaExibir + "</b>"
    }
}
*/
function selecionar(value){
    document.getElementById("display").value += value;
}

function limpar(){
    document.getElementById("display").value= '';
}

function calcularResultado(){
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    }catch(e) {
        display.value = 'Erro';
    }
}

