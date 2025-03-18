//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participantes = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome antes de adicionar!");
        return;
    }

    participantes.push(nome);
    atualizarLista();
    nomeInput.value = ""; 
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    participantes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes para sortear!");
        return;
    }

    let sorteado = participantes[Math.floor(Math.random() * participantes.length)];
    document.getElementById("resultado").innerText = `Nome Sorteado: ${sorteado}`;
    limparCampo();
}

function limparCampo(){
    participantes=[];

    document.getElementById("listaAmigos").innerHTML="";
}
