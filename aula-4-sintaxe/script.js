// JS ignora espaços em branco.

let pessoa = "Cleslley";
//      let pessoa="Cleslley";
// Escrever sem espaços em branco não introduz erro de sintaxe, as duas formas irão rodar normalmente.


console.log(5 + 5); // Entende que se trata de números sendo somados.
console.log("5 + 5"); // Entende que se trata de um texto.

// Declaração de variáveis:
// var, let e const.

var d = 1;
var e = 5;
var f = (d + e) / 2;
console.log(f);

// JS é case sensitive.
var nome = "Cleslley";
var NOME = "CLESLLEY";
console.log(nome);
console.log(NOME);

// No JS nãodeve se udar hífen na declaração de variavéis.

// var primeiro-nome; <-- errado.
var primeiro_nome; // <-- correto.
var primeiroNome // <-- Forma mais correta.