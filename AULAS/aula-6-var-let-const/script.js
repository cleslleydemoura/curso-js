/*

Entendendo variáveis.

Variáveis são como "recipientes" onde pode-se armazenar informações que
podem variar, ou seja, podem ter qualquer tipo de valor.

No Js tem três palavras-chaves para declarar variáveis:
    * var
    * let
    * const

*/

/*                                      VAR                                      */

// * é possível fazer a retribuição de valores.
var a, b, c;
// atribuição dos valores
var a = 2;
var b = 3;
var a = 5; // passa a receber este valor, ignorando o valor anterior.
var c = a + b;
console.log(a + b);
console.log(c);


var x = 10; // vale 10
{
    var x = 2; // vale 2
}
// agora fora do escopo também vale 2


var nome, sobrenome, nomeCompleto;
nome = "Cleslley", sobrenome = "Moura", idade = "21";
// nomeCompleto = nome + " " + sobrenome + ", que possui " + idade + " anos de idade.";
pessoa = nome + " " + sobrenome + ", " + idade;
document.getElementById("texto").innerHTML = pessoa;

/*                                      LET                                      */
// torna a variável 'única', ou seja, ela não pode ser redeclarada.

let pessoaA = "Victor";
// let pessoaA = "João"; <--- irá dar erro pois a variável já foi declara antes e não pode receber um novo valor.

let j = 10; // fora do escopo, a var está valendo 10, até que seja reescrita novamente fora do escopo.
{ // dentro do escopo foi definido que var recebe 2, e somente dentro do escopo ela possui esse valor.
    let j = 2;
    console.log(j);
}
console.log(j);/*                                      CONST                                      */
// é totalmente estrito. Seu valor é fixo, logo em qualque lugar do código seu valor permanecerá o mesmo.

void function(){ 
    const mensagem = 'Cleslley'; 
    console.log(mensagem);
    
    mensagem = 'Cleslei';
}();