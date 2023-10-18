// Exibe uma mensagem de boas-vindas
alert('Boas vindas ao jogo do número secreto');

// Define o valor máximo para o número secreto
let numeroMaximo = 100;

// Gera um número secreto aleatório entre 1 e numeroMaximo
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

// Inicializa as variáveis chute e tentativas
let chute;
let tentativas = 1;

// Enquanto o chute do usuário não for igual ao número secreto
while (chute != numeroSecreto){
    // Solicita que o usuário escolha um número dentro de um intervalo
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Se o chute for igual ao número secreto, encerra o loop
    if (chute == numeroSecreto){
        break;
    } else {
        // Se o chute for maior que o número secreto, exibe uma dica
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            // Se o chute for menor que o número secreto, exibe uma dica
            alert (`O número secreto é maior que ${chute}`);
        }
        // Incrementa o número de tentativas
        tentativas++;
    }
}

// Determina a palavra "tentativa" ou "tentativas" com base no número de tentativas
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// Exibe a mensagem de conclusão, informando o número secreto e o número de tentativas
alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1){
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`); 
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}

