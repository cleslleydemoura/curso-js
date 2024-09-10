/*

    ---> OBJETOS
    * Objetos são basicamente variáveis com muitos valores dentro.

    * Ex: const carro = {marca: "ford", modelo: "ka", ano: "2015"};
    
    * Os valores dentro de um objeto são chamados de propriedades.
    
    * Objetos também podem ter métodos. Um método é uma função colocada dentro de
    uma propriedade.

*/

// const é mais constantemente usado nesse tipo de objeto.
const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2015,
    placa: "ABC-0000",
    buzina: function() {
        alert("BARULHO DE BUZINA!!!");
    },
    completo: function () { // this -> mostra que você quer utilizar células que estão rpesentes dentro DESTE objeto.
        return "A marca é " + this.marca + ", modelo " + this.modelo + ", do ano " + this.ano;
    }
}; // é considerado um objeto LITERAL quando já possui suas propriedadaes definidas.

console.log(carro);
console.log(carro.ano); // mostra uma célula específica.
console.log(carro["placa"]);

// carro.buzina(); // chamando o método presente dentro do objeto.
console.log(carro.completo()); // dando um console.log no método, logo precisa de suas '()'.