// Métodos

// JOIN
const pessoa = ["Cleslley", "Moura", 21];
// document.getElementById("teste").innerHTML = pessoa.join(" "); // Troca as vírgulas por espaços em branco entre os itens.

// PUSH
pessoa.push("180cm");
console.log(pessoa);

// POP, SHIFT, UNSHIFT
pessoa.unshift("Brasileiro"); // Adiciona um item no início da lista.
// pessoa.shift(); // Remove o peimeiro item da lista.
// E removendo o primeiro item da lista é impórtante lembrar que o índice de todos os outros itens serão alterados.
// pessoa.pop(); // Remove o último item da lista.

// DELETE
//delete pessoa[0]; // Remove o índice desejado, porém ao removê-lo, as posições no índice dos demais itens não serão alterados, pois a posição que for deletada será substituída por 'undefined'/'empty'.
console.log(pessoa);

// SPLICE
pessoa.splice(1, 0, "Item adicionado 1", "Item Adicionado 2");
// 1 é a posição do index, 0 é a quantidade de itens que você quer remover, e em seguida os itens a ser colocados.
document.getElementById("teste").innerHTML = pessoa;

// CONCAT

const nomes = [
    "Cleslley",
    "Victor",
    "Gabriel",
    "William"
];
const sobrenomes = [
    "Moura",
    "Moura",
    "Azevedo",
    "Silva"
];
const idade = [
    "21",
    "20",
    "22",
    "19"
];

const nomeESobrenomeEIdade = nomes.concat(sobrenomes, idade); // Cria-se sempre uma nova variável que receberá as duas listas.
// Dizendo para o método juntar NOMES.concatenarComAConst(Sobrenomes, Idade);
console.log(nomeESobrenomeEIdade);

// SLICE

const frutas = ["Ciriguela", "Banana", "Limão", "Laranja", "Tangerina", "Kiwi", "Maçã"];
const citricos = frutas.slice(2,5); // fatia a lista a partir do índice inserido dentro do método. E também tem como escolher até qual posição irá fatiar.
console.log(citricos);

// SORT
const frutasOrdem = frutas.sort(); // Deixa em ordem alfabética.
console.log(frutasOrdem);
const numeros = [4, 8, 92, -5, 47, 88, 34, 3, 21, 20, 1]; // O método fará organização pelas posições do número, ex: [1, 11, 100, 25, 3, 400]; Note que ele faz a organização pelo primeiro número de cada: 1, 2, 3, 4... 
numeros.sort();
console.log(numeros);
// Crescente
numeros.sort(function(a,b){return a-b}); // a e b são meramente termos de comparação.
// Para cada item dessa lista, ele irá fazer uma comparação se é menor ou maior numéricamente.
console.log(numeros);
// Decrescente
numeros.sort(function(a,b){return b-a});
console.log(numeros);

// MAIOR número

function maiorNumero (array) {
    return Math.max.apply(null, array);
}
console.log(maiorNumero(numeros));

// MENOR número

function menorNumero (array) {
    return Math.min.apply(null, array);
}
console.log(menorNumero(numeros));

// FILTRAGEM de números

// Mostrar somente números maiores que 20
const maiorQue20 = numeros.filter(filtragem);
function filtragem(value, index, array) {
    return value > 20;
}

console.log(maiorQue20);
