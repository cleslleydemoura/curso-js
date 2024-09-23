/*

    ---> MANIPULAÇÃO DE DATAS EM JAVASCRIPT

*/

// Comando básico para pegar a data.
let data = new Date();
console.log(data);

// Pega o ano atual.
let ano = data.getFullYear();
console.log(ano);

// Pega o n° do mês. (0 até 11, sendo 0 janeiro e 11 Dezembro)
let mes = data.getMonth();
// console.log(mes);
                    // 0            1         2    ...
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let mesPorEscrito = mesesDoAno[data.getMonth()];
console.log(mesPorEscrito);

// Pega o dia do mês. (1 a 31)
let dia = data.getDate();
console.log(dia);
// Pega o dia da semana por escrito. (0 até 6)
let diaSemana = data.getDay();
console.log(diaSemana);

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito);

// Pega a hora. (0 a 23)
let hora = data.getHours();

// Pega os minutos. (0 a 59)
let minutos = data.getMinutes();

// Pega os segundos. (0 a 59)
let segundos = data.getSeconds();
console.log(segundos);

// Para pegar os milisegundos. (0 a 999)
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// Pegar a data no padrão br - dd/mm/yyyy.

let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'});
console.log(dataBR);

// Pegar os valores separadamente.
d = new Date();
diaMes = d.getDate();
mes = d.getMonth();
ano = d.getFullYear();
let dataPadraoBR = diaMes + "/" + mes + "/" + ano;
console.log(dataPadraoBR);

// Comparar datas - maior ou menor. ex: vencimentos.
var hoje = new Date();
var vencimento = new Date(2024,9,15); // yyyy, mm, dd

if (hoje > vencimento)
    console.log("Sua conta está vencida!")
else
    console.log("Ainda está dentro do prazo.")

// Diferença entre duas datas em dias.

var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias  = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
                                                // conversão de milésimos para dias.
console.log(diferencaDias + " dias");


