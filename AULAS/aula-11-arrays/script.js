/*

    ---> ARRAYS
    * Os arrays JavaScript são usados para armazenar vários valores 3 em uma única variável. Diferente dos objetos, que funcionam com Q @ 4 propriedades ou "nomes" que você dá para os itens dentro dele, os 5 arrays não possuem propriedades. O item dentro dele é encontrado pela 6 posição.
    
    * Imagine um array como uma lista de itens, com controle, por ordem de 9 posição dentro dele.
    
    * Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];
    
    * A lista[0] (lista na posição 0) vai conter o valor "arroz".
    * A lista[1] (lista na posição 1) vai conter o valor "feijão".
    * E assim por diante.
    * 
*/

// Formas de criar um array.

const lista = ["arroz", "feijão", "macarrão", "leite"]; // Array literal.
// nos objetos usamos '{}' e em matrizes usamos '[]'.
console.log(lista);
console.log(lista[0]);

const lista2 = [];
lista2[0] = "batata";
lista2[1] = "agrião";
lista2[2] = "banana";
lista2[3] = "cenoura";
console.log(lista2);
console.log(lista2[0]);

const lista3 = new Array ("gelatina", "sorvete", "pavê", "mousse");
console.log(lista3);
console.log(lista3[0]);
    let x = lista3[3];
    console.log(x);

// Formas de adição de elementos a lista.

// utilizando  a posição.
lista3[4] = "bolo de laranja";
console.log(lista3);

// utilizando o método push.
lista3.push("café", "suco de maracujá"); // não se limita a adição de um único item a lista.
console.log(lista3);



const pessoa = ["Cleslley", "de Moura", 21]; // array
console.log(pessoa);
// const pessoa = {nome: "Cleslley", sobrenome: " de Moura", idade: 21};
// nos objetos,  se atribui o valor dentro dele.

pessoa.length; // Mostra a quantidade de itens dentro do array.
console.log(pessoa.length);

           //pessoa -> nome da const. [nomedaconst.lenght] -> função.
console.log(pessoa[pessoa.length -1]);
// Retorna o último item dentro do array.
pessoa.push("1,83", "Brasileiro", "60kg"); // Mais eficiente.
console.log(pessoa);
// Método de adição.
pessoa[pessoa.length] = "Brasília/DF"; // Esse método adiciona a partir do número total de itens, ou seja, se o array nomedaconst.lenght = 4, ele adicionará um novo item na posição 5.
console.log(pessoa);

console.log(Array.isArray(pessoa)); // Retorna se é realmente um array.



