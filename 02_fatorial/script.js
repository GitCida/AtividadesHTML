function calcFatorial(){
    const num = (parseInt(document.getElementById("input").value));
    let result = 1
    for (let i = 2; i<=num; i++){
        result = result * i;
    }

document.getElementById("result").innerText = "Resultado: " + result
}