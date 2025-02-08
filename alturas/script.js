let altura;
let maiorAltura;
let menorAltura;
for (let i = 0; i < 5; i++) {
    altura = parseInt(prompt(`Digite a altura: ${1+i}`))
    if (i ===  0) {
    maiorAltura = altura;
    menorAltura = altura;
    }
    else {
        if (altura > maiorAltura) {
        maiorAltura = altura;
        }
        if (altura < menorAltura) {
        menorAltura = altura;
        }
}
}
console.log(maiorAltura);
console.log(menorAltura);