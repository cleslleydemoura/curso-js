function verificarNome() {
    const nome = document.getElementById("nome").value;
    // Pega o valor inserido dentro do input.

    if (nome == "" || nome == null) {
        let p = document.getElementById("resultado"); // Essa variável poderia não ser declarada e o código funcionaria normalmente, porém, a criação é necessária caso queira mudar a cor do texto que será exibido.
        document.getElementById("resultado").innerHTML = "O campo não pode estar vazio!";
        p.style.color = "red";
    }
    else {
        let p = document.getElementById("resultado");
        document.getElementById("resultado").innerHTML = "Olá, " + nome + "!";
        p.style.color = "green";
    }
}