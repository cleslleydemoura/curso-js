/*

    ---> EVENTOS
    * Eventos são ações disparadas pela interação dos usuários na página.

    * É o correto manejo desses eventos que tornam as páginas interativas
    e dinâmicas.

    * Alguns dos eventos mais utilizados:
    
    * onclick      -> Disparado quando recebe um clique.
    * ondblclick   -> Disparado quando clique duplo.
    * onmouseover  -> Disparado quando o mouse está sobre.
    * onmouseout   -> Disparado quando o mouse é movida para fora do elemento.
    * onmousemove  -> Disparado quando o mouse é movido no elemento.
    * onmousedown  -> Disparado quando o clique do botão foi pressionado.
    * onmouseup    -> Disparado quando o clique do botão é liberado.
    * onfocus      -> Disparado quando o elemento recebe foco.
    * onchange     -> Disparado quando existe uma mudança no conteúdo. "Ao mudar".
    * onblur       -> Disparado quando o elemento perde o foco.
    * onkeydown    -> Disparado quando uma tecla é pressionada.
    * onkeypress   -> Disparado quando uma tecla é pressionada e solta.
    * onkeyup      -> Disparado quando uma tecla é solta sobre um elemento.
    * onload       -> Disparado quando a página terminou de ser carregada (Body).
    * onresize     -> Disparado quando há um redimencionamento da janela.

*/

// evento onclick
function eventoClique() {
    alert("Acionou um evento de clique.");
    document.body.style.backgroundColor = "#439794";
    // mudando o background da página através de uma interação do js.
}
// evento ondblclick
function eventoDblClick() {
    document.body.style.backgroundColor = "white";
}

// EVENTOS DE MOUSE

// evento onmouseover
function turnYellow() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "yellow";
}
// evento onmouseout
function backToColor() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "#808c8e";
}
// evento onmousemove
function addText() {
    let p = document.getElementById("texto");
    p.append('O mouse moveu. '); // a cada vez que o mouse mover, ele irá inserir este texto.
    // append ---> para adicionar.
}

// EVENTOS DE INPUT

// evento onfocus
// o input fica em FOCO quando é clicado.
function limpaTexto() {
    document.getElementById("campoTexto").value = "";
    // o input já possui um value na página HTML, e esse comando faz com que, quando o input for clicado, limpará seu campo.
}

// evento onchange
function mudou() { // verifica se houve mudança dentro do input, e se sim, o console mostra "Mudou".
    console.log("Mudou");
}

// evento onblur
// quando oinput sai de foco, ativa um evento.

// EVENTOS DE TECLADO

// evento onekeypress
function teclaPressionada() {
    let input = document.getElementById("campoTexto3").value; // mostra todos as teclas que forem pressionadas dentro do input.
    console.log(input);
}
// evento onkeydown
function teclaPressionada2() {
    let input = document.getElementById("campoTexto4").value; // mostra todos as teclas que forem pressionadas dentro do input.
    console.log(input);
}
// evento onekeyup
function teclaPressionada3() {
    let input = document.getElementById("campoTexto5").value; // as teclas pressionadas só aparecem assim que o usuário parar de pressionar a tecla no teclado.
    console.log(input);
}
// evento onload
// disparado quando a página for carregada completamente.
/*

    <body onload="alert('Página carregada.')">
    
    </body>

*/

//evento onresize

/*

    <body onresize="console.log('Houve um redimensionamento da tela.')">
    
    </body>

*/
// toda vez que o tamanho da tela for mudado, aparecerá uma mensagem.