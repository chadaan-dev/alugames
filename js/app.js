let jogosAlugados = 0;

function contarExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClidado = document.getElementById(`game-${id}`);
    let imagem = gameClidado.querySelector('.dashboard__item__img');
    let botao = gameClidado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClidado.querySelector('.dashboard__item__name');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // DESAFIO 1: Adicione uma confirmação ao devolver um jogo, solicitando ao usuário que confirme a devolução antes que ela seja concluída. Isso pode ajudar a evitar devoluções acidentais.
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    contarExibirJogosAlugados();
}    
// Desafio 2: Para imprimir na tela a informação sobre quantos jogos foram alugados, você pode modificar a função alterarStatus() para contar os jogos alugados e exibir essa informação no console.
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarExibirJogosAlugados();
});
// Desafio 3: Função que verifica se uma palavra é um palíndromo.
function essaPalabraEUmPalindromo(palavra){
    let separandoAsLetrasDaPalavra = palavra.split('');
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join('');
        if (palavra == palavraInvertida) {
            console.log(`A palavra ${palavra} é um palíndromo!`);
        } else {
            console.log(`A palavra ${palavra} não é um palíndromo!`);
        }
}
essaPalabraEUmPalindromo('omissíssimo');
// Desafio 4: Função para ordenar números em sequência.
function ordernarNumeros(a, b, c, d) {
    const numerosOrdenados = [a, b, c, d].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}
ordernarNumeros(10, 12, 30, 2);