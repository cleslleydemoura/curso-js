
function verificarInput() {
    // Método mais fácil:

    // Pega o valor do input.
    // const interruptor = document.getElementById('onOff').value.trim().toLowerCase();
    // element.value retorna o valor que o usuário digitou no campo de entrada (input).
    // string.trim() remove os espaços em branco no início e no fim da string.
    // string.toLowerCase() converte todos os caracteres da string para minúsculas, então se o usuário escrever no uppercase o código ainda recebe os valores transformando-os para o lowercase.
    
    const interruptor = document.getElementById("onOff").value;
    const resultado = document.getElementById('resultado');

    // Verifica o valor do input
    if (interruptor == 'on' || interruptor == 'ON') 
        resultado.textContent = "Ligado!";
    else if (interruptor == 'off' || interruptor == 'OFF')
        resultado.textContent = "Desligado!";
    else
        resultado.textContent = alert("Digite 'on' ou 'off'!");
}