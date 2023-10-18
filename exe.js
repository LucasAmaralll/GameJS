// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1;

while (contador < 11){
    alert (`O contador é ${contador}`);
    contador++;
}



// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador = 10;

while (contador >= 0){
    alert (`O contador é ${contador}`);
    contador--;
}


// Crie um programa de contagem regressiva. Peça um número ao usuário e conte deste número até 0, usando um loop while no console do navegador.

let contador = prompt("Digite um número para iniciar o contador: ");

while (contador >= 0) {
    console.log(`O contador é ${contador}`);
    contador--;
}


// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero = prompt("Digite um número para finalizar o contador: ");

let contador = 0;

while (contador <= numero) {
    console.log(`O contador é ${contador}`);
    contador++;
}

// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log ('Boas vindas!!!')

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = 'Lucas';
console.log (`Olá, ${nome}!`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome = 'Lucas';
alert (`Olá, ${nome}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let pergunta;
pergunta = prompt ('Qual linguagem de programação que você mais gosta?')
console.log (`A linguagem de programação que eu mais gosto é ${pergunta}`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 1;
let valor2 = 2;
let resultado;

resultado = valor1 + valor2;
console.log (`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 1;
let valor2 = 2;
let resultado;

resultado = valor1 - valor2;
console.log (`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`)

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt ("Insira a sua idade: ");

if (idade <18) {
    console.log ("Você é menor de idade");
}else {
        console.log ("Você é maior de idade");
    }

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt ('Insira um número de sua escolha');

if (numero > 0) {
    alert('O número é positivo');
} else if (numero < 0) {
    alert('O número é negativo');
} else {
    alert('O número é zero');
}

// Use um loop while para imprimir os números de 1 a 10 no console.

let contador = 1;

while (contador < 11){
    console.log (`O contador é ${contador}`);
    contador++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 8

if (nota >= 7){
    console.log ("Aprovado");
} else {
    console.log ("Reprovado");
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

numeroAleatorio = Math.random ()
console.log (numeroAleatorio)

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

numeroAleatorio = parseInt (Math.random()*10 + 1);
console.log (numeroAleatorio)

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

numeroAleatorio = parseInt (Math.random()*1000 + 1);
console.log (numeroAleatorio)



