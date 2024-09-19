/*

    ---> EVENTOS DE TEMPO COM JAVASCRIPT
    *Os eventos de tempo permitem a execução em intervalos de tempo
    especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

    * Os dois métodos-chaves para usar com JavaScript são:

    - setTimeout(function, tempo em milisegundos)
    -> Executa uma função, depois de esperar um número especificado em milissegundos.

    - setInterval(function, milliseconds)
    -> É o mesmo que setTimeout(), mas repete a execução da função continuamente.

*/

let tempo, tempo1, tempoA;

function ativarContagem() {
    document.getElementById("temporizador").innerHTML = "Começou a contar!"; // Aparece assim que o botão for clicado.
    // Aparece apenas após o tempo colocado dentro do setTimeout.
    tempoA = setTimeout(function() {document.getElementById("temporizador").innerHTML = "Executou o setTimeout!";
                          document.body.style.backgroundColor = "green";
                          }, 5000);
    // 'tempo' não precisa ser definido como var, let, const por conta do escopo.
    document.body.style.backgroundColor = "white"; // Faz com que a tela volte a ficar branca após o clique.
}

function PararContagem() {
    clearTimeout(tempoA);
    clearInterval(tempo);
    clearInterval(tempo1);
    document.getElementById("temporizador").innerHTML = "Parou a contagem!";
    document.body.style.backgroundColor = "#a51515";
}

function setiClick() {
    tempo = setInterval(function(){
        var cronometro = document.getElementById("temporizador2").innerHTML; // Criando a variável cronometro e indicando que ela itroduzirá algo no html.
        var soma = parseInt(cronometro) + 1;
        // parseInt é uma função em JavaScript que converte uma string em um número inteiro.
        // Esta função irá adicionar a partir do número já incluso no html (0). + 1 (irá adicionar mais 1 a cada tempo de intervalo (definidia aqui como 1 segundo).)
        document.getElementById("temporizador2").innerHTML = soma; // Imprimindo na tela a variável soma que possui o parseInt.
    }, 1000);

    // Regressivo
    tempo1 = setInterval(function(){
        var cronometro = document.getElementById("temporizadorRegressivo").innerHTML; // Criando a variável cronometro e indicando que ela itroduzirá algo no html.
        var soma = parseInt(cronometro) - 1;
        document.getElementById("temporizadorRegressivo").innerHTML = soma;
    }, 1000);

    document.body.style.backgroundColor = "white";
}







