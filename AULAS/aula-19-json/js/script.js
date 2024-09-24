/*

    ---> JSON
    * JSON significa JavaScript Object Notation.

    * Explicando de um mode simples, JSON é basicamente uam forma de converter um objeto
    em texto e o contrário também, um texto em um objeto.

    * É usado principalmente para transmitir dados entre sistemas de forma simples,
    já que o formato de texto é lidos por praticamente toda linguagem de programação.

    * Para trabalhar com JSON no Javascript usa-se dois métodos:
    ---> JSON.parse()     -> Converte texto no padrão JSON em objetos.
    ---> JSON.stringify() -> Converte objetos em texto padrão JSON.

*/

const carro = {
    marca: "fiat",
    modelo: "uno",
    ano: 2001,
    motor: ["1.6", "1.4", "1.0"]
};

document.getElementById("area").innerHTML = carro; // não aparecerá corretamente pois só a linguagem de programação usada pode ler desta forma.


// JSON sendo criado para transcrever o objeto em forma de texto no html.

let texto = JSON.stringify(carro); // transformando o objeto em json definindo uma variável para receber o objeto.
document.getElementById("area").innerHTML = texto; // aparece o objeto 'carro'
console.log(texto.modelo) // não funciona pois não é mais um objeto, e sim um texto.

// convertendo o texto para objeto.
let objeto = JSON.parse(texto); // definido variavel para fazer a conversão de texto para objeto novamente.
console.log(objeto.modelo);
console.log(objeto.motor[2]); // pegando valor no índice do array para ser exibido.


// acessando um arquivo json de outra página de forma remota.
const ajax = new XMLHttpRequest(); // método para ter acesso as informaçãoes de um site de forma remota.
ajax.open('GET','https://viacep.com.br/ws/01001000/json/'); // abrindo o site.
ajax.send(); // enviando solicitação.
// quando carregar as informações desse site...
ajax.onload = function () {
    document.getElementById("areaCEP").innerHTML = this.responseText; // imprimindo na tela.
    let obj = JSON.parse(this.responseText);
    console.log(obj.ddd);
}







