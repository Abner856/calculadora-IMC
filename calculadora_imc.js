

const calcular = document.getElementById("calcular");

function imc(){
    const nome = document.getElementById("nome");
    const altura = document.getElementById("altura");
    const peso = document.getElementById("peso");
    const resultado = document.getElementById("resultado");
  
    const alturaEmMetros = altura.value / 100;
    const imc = peso.value / (alturaEmMetros * alturaEmMetros);
    resultado.innerHTML = `Olá ${nome.value}, seu IMC é ${imc.toFixed(2)}`;
    if (imc < 18.5) {
        resultado.innerHTML += "<br>Classificação: Abaixo do peso";
    } else if (imc < 25) {
        resultado.innerHTML += "<br>Classificação: Peso normal";
    } else if (imc < 30) {
        resultado.innerHTML += "<br>Classificação: Sobrepeso";
    } else {
        resultado.innerHTML += "<br>Classificação: Obesidade";
    }
}
calcular.addEventListener("click", imc);