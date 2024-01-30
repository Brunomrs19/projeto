let calcular = document.getElementById("calcular");


function imc() {
    let nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;
    let massa = document.getElementById("massa").value;
    let resultado = document.getElementById("resultado");

    if (nome !== "" && altura !== "" && massa !== "") {

        let valorIMC = (massa / (altura * altura)).toFixed(1);

        let classificacao;

        if (valorIMC < 18.5) {
            classificacao = "abaixo do peso!"
        } else if (valorIMC < 24.9) {
            classificacao = "no peso ideal!"
        } else if (valorIMC < 39.9) {
            classificacao = "Acima do peso!"
        } else if (valorIMC < 34.9) {
            classificacao = "Obesidade grau I"
        } else if (valorIMC < 39.9) {
            classificacao = "Obesidade grau II"
        } else {
            classificacao = "Obesidade grau III, cuidado!"
        } 

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    }
}

calcular.addEventListener("click", imc)