/*

    ---> SWITCH
    * É usado para realizar diferentes ações com base em diferentes condições
    no mesmo bloco de verificação. Caso a condição não seja compátivel
    não será execeutada e o valor padrão será adicionado.

*/

function verificarCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase(); // Se o usuário escrever com letra maiúscula a função deixará em lowercase, e então o switch irá analizar o valor inserido.

    switch (cor) {
        case "azul": // Se cor for azul, então:
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho": // Se cor for vermelho, então:
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo": // Se cor for amarelo, então:
            document.body.style.backgroundColor = "yellow";
            break;
        default: // Se cor digitada não for nenhuma das opções acima, então:
            document.getElementById("resultado").innerHTML = "Nenhuma cor disponível para: " + cor;
    }
}