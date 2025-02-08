// contagem regressiva de acordo com o número que o usuário digitar
// let num = Number(prompt("Digite um número"))
// while (num >= 1) {
//     console.log(num);
//     num = num - 1;
// }

function contRegre() {
    let num = parseFloat(document.getElementById("num").value);
    
    while (num >= 1) {
        let paragrafo = document.createElement("p");
        paragrafo.textContent = num;
        document.getElementById("output").appendChild(paragrafo);
        num = num - 1;
    }
}
//Escreva um programa que calcule e exiba a soma de todos os números pares de 1 até 100 utilizando um loop for
// let num = 0;
// let result = 0;
// for (let i = 0; i < 100; i+=2) {
//     num = num + 2;
//     result = result + num;
//     console.log(num);

// }
// console.log(result)

//Crie um programa que imprima a tabuada de um número informado pelo usuário (de 1 a 10), usando o loop for.
// let num = Number(prompt("Digite um número para ver sua tabuada de 1 a 10:"))
// let result = 0;
// for (let i = 1; i <= 10; i++) {
//     result = i;
//     console.log(`${num} * ${result} = ${num * result }`);
//}

