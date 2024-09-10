/*

---> Os operadores Javascript são usados para atribuir valores,
comparar valores, executar operações aritiméticas e muito mais.

---> São os sinais usados: +, -, *, /, =, ++, --, &&, ||, etc...

---> São separados em 6 categorias:

    1 - Operadores Aritiméticos (matemáticos)
    2 - Operadores de Atribuição
    3 - Operadores de Sequência
    4 - Operadores de comparação
    5 - Operador Condicional (Ternário)
    6 - Operadores Lógicos

*/

//                  1 - Operadores Aritiméticos (matemáticos)
var valor1 = 6, valor2 = 2, total;
total = valor1 + valor2;
console.log(total);

var valor1 = 6, valor2 = 2, total;
total = valor1 - valor2;
console.log(total);

var valor1 = 6, valor2 = 2, total;
total = valor1 * valor2;
console.log(total);

var valor1 = 6, valor2 = 2, total;
total = valor1 / valor2;
console.log(total);

var valor1 = 3, valor2 = 9, total;
total = (valor1 + valor2) / 4;
console.log(total);

// incremento e decremento

var valor1 = 5, total;
total = ++valor1;
console.log(total);

var valor1 = 5, total;
total = --valor1;
console.log(total);

//                  2 - Operadores de Atribuição
// atribuindo um valor ás variáveis

var valor1 = 5, valor2 = 5;
// valor1 = valor1 + valor2;
   valor1 += valor2; // forma abreviada
console.log(valor1);

var valor1 = 10, valor2 = 5;
// valor1 = valor1 - valor2;
   valor1 -= valor2; // forma abreviada
console.log(valor1);

//                  3 - Operadores de Sequência

// concatenação
var valor1 = "Cleslley", valor2 = "de Moura", total;
total = valor1 + " " + valor2;
console.log(total);

//                  4 - Operadores de comparação

// true or false
var valor1 = 8, valor2 = 10, total;
total = (valor1 == 2); // == ---> faz a comparação entre valor1 e o valor inserido (2).
console.log(total); // false

var valor1 = 8, valor2 = 10, total;
total = (valor1 == 8);
console.log(total); // true

var valor1 = 8, valor2 = "8", total;
total = (valor1 == valor2); // verifica se o valor escrito de valor2 é o mesmo valor numérico de valor1.
console.log(total); // true

var valor1 = 8, valor2 = "8", total;
total = (valor1 === valor2); // verifica se o valor e o TIPO são os mesmos.
console.log(total); // false

var valor1 = 8, valor2 = 10, total;
if (valor1 == valor2) {
    console.log("Verdadeiro");
} else {
    console.log("Falso"); // será impresso na tela
}

var valor1 = 8, valor2 = 10, total;
total = (valor1 != valor2);
console.log(total); // true

var valor1 = 8, valor2 = "8", total;
total = (valor1 == valor2);
console.log(total); // true

var valor1 = 8, valor2 = 4, total;
total = (valor1 < 2);
console.log(total); // false

var valor1 = 8, valor2 = 4, total;
total = (valor1 > 2);
console.log(total); // true

var valor1 = 8, valor2 = 4, total;
total = (valor1 >= 8);
console.log(total); // true

//                  5 - Operador Condicional (Ternário)

var idade, eleitor;

idade = 18;
eleitor = (idade < 18) ? "Não eleitor." : "Eleitor."
// (condição) -> '?' se for verdade -> ':' se for falso
console.log(eleitor);

var idade, eleitor;

idade = 16;
eleitor = (idade < 18) ? "Não eleitor." : "Eleitor."
console.log(eleitor);


//                  6 - Operadores Lógicos

var idade, eleitor, resultado;

idade = 15;
eleitor = (idade < 18) ? "Não eleitor," : "Eleitor,"

resultado = (idade > 60 || idade < 18);
console.log(eleitor + " pois possui " + idade + " anos de idade.");
console.log(resultado); // true

var idade, eleitor, resultado;

idade = 19;
eleitor = (idade < 18) ? "Não eleitor," : "Eleitor,"

resultado = (idade > 60 || idade < 18);
console.log(eleitor + " pois possui " + idade + " anos de idade.");
console.log(resultado); // false