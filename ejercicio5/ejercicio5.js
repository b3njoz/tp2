function area() {
    const ladoC = parseFloat(document.getElementById('ladoC').value);
    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);

    if (ladoA > ladoC){
        const areaTriangulo = (ladoB * (ladoA-ladoC)) / 2;
        const areaRectangulo = ladoB * ladoC;
        const areaTotal = areaTriangulo + areaRectangulo
        alert("El area del terreno es: " + areaTotal)
    }
    else {
        alert("El lado c no puede ser mayor al lado A")
    }
}