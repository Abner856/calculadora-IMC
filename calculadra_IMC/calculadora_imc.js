

const calcular = document.getElementById("calcular");

function imc(){
    const nome = document.getElementById("nome");
    const altura = document.getElementById("altura");
    const peso = document.getElementById("peso");
    const resultado = document.getElementById("resultado");

    const valorIMC = (peso.value / (altura.value * altura.value)).toFixed(2);

    let classificacao = "";
    if(valorIMC < 18.5){
        classificacao = "abaixo do peso.";
    } else if(valorIMC < 25){
        classificacao = "peso normal.";
    } else if(valorIMC < 30){
        classificacao = "sobrepeso.";
    } else{
        classificacao = "obeso.";
    }

    resultado.innerHTML = `Olá ${nome.value}, seu IMC é ${valorIMC} e você está ${classificacao}`;
}
calcular.addEventListener("click", imc);