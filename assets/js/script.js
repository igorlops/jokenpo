var nome = prompt("Olá, digite seu nome por gentileza!");
var apresentacao = document.querySelector('#apresentacao h1');
const textoApresentacao = 'Olá ' + nome + ', seja bem-vindo';
const pedraPlayer = document.querySelector('button.pedra');
const papelPlayer = document.querySelector('button.papel');
const tesouraPlayer = document.querySelector('button.tesoura');
const placarPlayer = document.querySelector('.placar-player');
const placarOponenete = document.querySelector('.placar-oponente');
const resultado = document.querySelector('.resultado');
const escolhaDoOponente = document.querySelector('.escolha-oponente')
const vencedor = document.getElementById('vencedor');

const jogoComputer = ["Pedra", "Papel", "Tesoura"];


apresentacao.innerHTML += textoApresentacao;
var nomeJogador = document.querySelector('p.player');
nomeJogador.innerHTML += nome;
let scorePlayer = 0;
let scoreOponente = 0;


function placar() {
    placarOponenete.innerHTML = `${scoreOponente}`;
    placarPlayer.innerHTML = `${scorePlayer}`;
}

pedraPlayer.addEventListener('click', function () {
    var bot = Math.floor(Math.random() * 3);
    
    
    switch (bot) {
        case 0:
            escolhaDoOponente.innerHTML = "Seu oponente escolheu " + jogoComputer[bot];
            resultado.innerHTML = "Resultado: empate!";
            vencedor.style.backgroundColor = "rgb(97, 97, 195)";
            break;
        case 1:
            escolhaDoOponente.innerHTML = "Seu oponente escolheu " + jogoComputer[bot];
            resultado.innerHTML = "Resultado: você perdeu!"
            scoreOponente++;
            vencedor.style.backgroundColor = "red";
            break;
        case 2:
            escolhaDoOponente.innerHTML = "Seu oponente escolheu " + jogoComputer[bot];
            resultado.innerHTML = "Resultado: você venceu!"
            scorePlayer++;
            vencedor.style.backgroundColor = "green";

            break;
    }
    placar();

})

papelPlayer.addEventListener('click', function () {
    var bot = Math.floor(Math.random() * 3);
 
    switch (bot) {
        case 0:
            escolhaDoOponente.innerHTML = "Seu oponente escolheu " + jogoComputer[bot];
            resultado.innerHTML = "Resultado: você venceu!"
            scorePlayer++;
            vencedor.style.backgroundColor = "green";

            break;
        case 1:
            escolhaDoOponente.innerHTML = "Seu oponente escolheu " + jogoComputer[bot];
            resultado.innerHTML = "Resultado: empate!"
            vencedor.style.backgroundColor = "rgb(97, 97, 195)";
            break;
        case 2:
            escolhaDoOponente.innerHTML = "Seu oponente escolheu " + jogoComputer[bot];
            resultado.innerHTML = "Resultado: você perdeu!"
            scoreOponente++;
            vencedor.style.backgroundColor = "red";

            break;
    }
    placar();
})
tesouraPlayer.addEventListener('click', function () {
    var bot = Math.floor(Math.random() * 3);
 
    switch (bot) {
        case 0:
            escolhaDoOponente.innerHTML = "Seu oponente escolheu " + jogoComputer[bot];
            resultado.innerHTML = "Resultado: você perdeu!"
            scoreOponente++;
            vencedor.style.backgroundColor = "red";

            break;
        case 1:
            escolhaDoOponente.innerHTML = "Seu oponente escolheu " + jogoComputer[bot];
            resultado.innerHTML = "Resultado: você venceu!"
            scorePlayer++;
            vencedor.style.backgroundColor = "green";

            break;
        case 2:
            escolhaDoOponente.innerHTML = "Seu oponente escolheu " + jogoComputer[bot];
            resultado.innerHTML = "Resultado: empate!"
            vencedor.style.backgroundColor = "rgb(97, 97, 195)";
            break;
    }
    placar();
})
