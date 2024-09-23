/*

    ---> CLASSES
    * Em 2015 as Classes foram introduzidas ao JavaScript. As classes são um conceito
    antigo na programação e várias linguagens utilizam elas. Mas no JavaScript isso é relativamente novo.

    * Basicamente, as classes são como "fábricas" para criar objetos.
    Pode se dizer que são "funções especiais" para criação de objetos.

    * Assim com em uma fábrica da vida real precisa das máquinas para construir os
    objetos, as Classes no JavaScript usam um método chamado constructor() para fabricar
    os objetos.

*/
      // Primeira letra sempre maiúscula.
class Carro{
    constructor(valor1, valor2, valor3){
        // Aqui se defini as variáveis, e cada uma receberá um item.
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " buzinou: biiiii!";
        // Especifica qual modelo buzinou.
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);
console.log(uno);
console.log(uno.buzina());
console.log(gol);

// Modificando valor de ano do gol.
gol.ano = 2014;
console.log(gol);















