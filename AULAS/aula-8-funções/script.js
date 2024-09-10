/*

    ---> FUNÇÕES
    * Uma função JavaScript é um bloco de código projetado para executar
    uma tarefa específica.

    * É como uma peuquena 'fábrica' onde você faz uma entrada e ele te dá
    uma saída.

    * Pode ser encarado como 'mini-programas' projetados para fazer uma tarefa
    que vai contribuir para o código inteiro.

    * Uma função JavaScript é executada quando 'algo' a invoca.

*/
// função de soma
function soma (valor1, valor2) {
    return valor1 + valor2;
}
document.getElementById("texto").innerHTML = soma(10, 23);
// var total = soma(document.getElementById("texto").innerHTML = soma(10, 10));
var total = soma(10, 23);
console.log(total);

// função de cotação do dólar
function realParaDolar (real, cotacao) {
    return real * cotacao;
}
var total = realParaDolar(10, 5.65);
console.log(total);
var valorReal = 7.85
var cotacao = 5.65;
var total = realParaDolar(valorReal, cotacao);
console.log("O valor em R$" + valorReal + ". O valor em U$" + cotacao + " A cotação do valor inserido é aproxiamdamente U$" + total);

function alertHello () { // evento onClick
    alert("Hello World!");
}

function paraCelsius(valorFahrenheit) { // Aqui é onde está o cálculo para a operação.
    return (5/9) * (valorFahrenheit - 32);
}
var x = paraCelsius(77); // Aqui está recebendo o valor que será calculado na function anterior.
console.log("A temperatura é de " + x + "ºC");

function myFunction () {
    let x = 2; // variável local
}