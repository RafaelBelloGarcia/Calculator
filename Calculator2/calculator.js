let numero1 = document.getElementById("valor1");
let numero2 = document.getElementById("valor2");

function soma(){
    resultado = Number(numero1.value) + Number(numero2.value);
    document.getElementById("resultado").innerHTML ="O resultado é: " + resultado;
}

function subtracao(){
    resultado = Number(numero1.value) - Number(numero2.value);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
}

function multiplicacao(){
    resultado = Number(numero1.value) * Number(numero2.value);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
}

function divisao(){
    resultado = Number(numero1.value) / Number(numero2.value);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
}

function radiciacao(){
    resultado = Number(numero1.value) ** Number(1/numero2.value);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
}

function potenciacao(){
    resultado = Number(numero1.value) ** Number(numero2.value);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
}

function limpar(){
    numero1.value = "";
    numero2.value = "";
    document.getElementById("resultado").innerHTML = "";
}
