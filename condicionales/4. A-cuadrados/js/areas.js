function comp() {
    let ladCuad1 = parseInt(document.getElementById('cuad1').value);
    let ladCuad2 = parseInt(document.getElementById('cuad2').value);
    let ladCuad3 = parseInt(document.getElementById('cuad3').value);

    if (isNaN(ladCuad1) || isNaN(ladCuad2) || isNaN(ladCuad3)) {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    let cuad1 = ladCuad1 ** 2;
    let cuad2 = ladCuad2 ** 2;
    let cuad3 = ladCuad3 ** 2;
    let result = '';

    if (cuad1 === cuad2 && cuad2 === cuad3) {
        result = "Son iguales";
    } else if (cuad1 === cuad2 && cuad1 > cuad3) {
        result = "El cuadrado 1 y 2 son mayores";
    } else if (cuad2 === cuad3 && cuad2 > cuad1) {
        result = "El cuadrado 2 y 3 son mayores";
    } else if (cuad3 === cuad1 && cuad3 > cuad2) {
        result = "El cuadrado 1 y 3 son mayores";
    } else if (cuad1 > cuad2 && cuad1 > cuad3) {
        result = "El cuadrado 1 es mayor";
    } else if (cuad2 > cuad1 && cuad2 > cuad3) {
        result = "El cuadrado 2 es mayor";
    } else if (cuad3 > cuad1 && cuad3 > cuad2) {
        result = "El cuadrado 3 es mayor";
    } else {
        result = "Error en los cálculos";
    }

    document.getElementById('result').innerHTML = `<strong>${result}</strong>`;
    return false;
}
