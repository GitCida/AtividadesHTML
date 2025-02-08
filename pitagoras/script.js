function CalcHip() {
    let cat1 = Number(document.getElementById('cat1').value);
    let cat2 = Number(document.getElementById('cat2').value);
    let ResultHip1 = (cat1**2 + cat2**2);
    let ResultHip = Math.sqrt(ResultHip1);
document.getElementById("resultHip").innerText = `O valor da hipotenusa é: ${ResultHip}`;
}

function CalcCateto() {
    let hipotenusa = Number(document.getElementById('hipotenusa').value);
    let cateto = Number(document.getElementById('cateto').value);
    let ResultCat1 = (hipotenusa**2 - cateto**2);
    let ResultCat = Math.sqrt(ResultCat1);
document.getElementById("resultCat").innerText = `O valor da cateto é: ${ResultCat}`;
}

