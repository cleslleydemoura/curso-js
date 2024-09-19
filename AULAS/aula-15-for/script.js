/*

    ---> Laço de Repetição For
    * Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.

*/

let i;

//for (i=0; i <= 1000; i++) {
    // document.getElementById("texto").innerHTML += i + ", ";
    //                                          '=' só pegaria o último valor inserido.
//}

const anoAtual = new Date().getFullYear(); // Ano atual.

for (i = anoAtual; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
    // for (i = 1900; i <= 2024; i++) i começa em 1900, enquanto i for menor que 2024, incremente mais anos.
    //                                          "<option value='"+i+"'>" vai inserir todos os anos entre 1900 e 2024 no primeiro i, e nos egundo i mostra ao usuário os anos inserindo eles dentro de option no html.
}

const carros = ["Gol", "Fusca", "Jeep", "Celta", "HB20"];
let tamanho = carros.length;

for (i = 0; i < tamanho; i++)
    document.getElementById("texto").innerHTML += carros[i] + " ";





