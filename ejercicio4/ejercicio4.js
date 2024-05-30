function imc() {
    const peso = document.getElementById('peso').valueAsNumber;
    const estatura = document.getElementById('estatura').valueAsNumber;
    let imc = peso / estatura**2;
    alert("Tu indice de masa corporal es de: " + imc);
}