function buscarCEP() {
    let campoTexto = document.getElementById("cep").value; // pega o valor inserido pelo usuário dentro do input.

    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/'+ campoTexto +'/json/'); // adicionando o cep inserido pelo usuário no url da api que será acessada e retornará os dados na tela.
    ajax.send();
    // quando carregar as informações desse site...
    ajax.onload = function () {
    //document.getElementById("texto").innerHTML = this.responseText; // inserindo no html a resposta do site.
    
    // imprimindo na tela apenas objetos específicos.
    let obj = JSON.parse(this.responseText); // transformando o JSON text em objeto.
    // valores desejados a serem impressos.
    let logradouro = obj.logradouro;
    let cidade = obj.localidade;
    let estado = obj.uf;

    document.getElementById("texto").innerHTML = "Logradouro: "+logradouro+
    "<br> Cidade: "+cidade+
    "<br> Estado: "+estado;
    }
}