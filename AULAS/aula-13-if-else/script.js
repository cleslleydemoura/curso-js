/*

    ---> IF, ELSE

*/

var interruptor = "off";

if (interruptor === "on")
    console.log("Aceso!");
else
    console.log("Apagado!"); // Resposta impressa.

var hora = new Date().getHours(); // Mostra a hora atual.
console.log(hora);

if (hora < 12)
    console.log("Bom dia!");
else if (hora < 18)
    console.log("Boa tarde!");
else
    console.log("Boa noite!");
