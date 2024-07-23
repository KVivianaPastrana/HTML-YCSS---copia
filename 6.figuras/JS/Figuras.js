function areaCuadrado(event) {
    event.preventDefault();
    let lado = document.getElementById('txtladoCuadrado').value;

    if (lado === '') {
        alert('Por favor, ingresa el valor del lado para realizar el cálculo.');
        return false;
    }

    lado = parseFloat(lado);
    let aCuadrado = lado * lado;
    let imagenCuadrado = "<img src='cuadrado.png' class='result-image'>";

    document.getElementById('areaCuadrado').innerHTML = '<strong>Área: ' + aCuadrado + '</strong>';
    document.getElementById('valorLado1').innerHTML = '<strong>Lado: ' + lado + '</strong>';
    document.getElementById('valorLado2').innerHTML = '<strong>Lado: ' + lado + '</strong>';
    document.getElementById('imagenCuadrado').innerHTML = imagenCuadrado;
    document.getElementById('valorLado4').innerHTML = '<strong>Lado: ' + lado + '</strong>';

    return false;
} 

function areaRectangulo(event) {
    event.preventDefault();
    let altura = document.getElementById('txtalturaRectangulo').value;
    let base = document.getElementById('txtbaseRectangulo').value;



    if (altura === '' || base === '') {
        alert('Por favor, ingresa ambos valores para realizar el cálculo.');
        return false;
    }

    altura = parseFloat(altura);
    base = parseFloat(base);
    let aRectangulo = altura * base;
    let imagenRectangulo = "<img src='rectangulo.png'   class='result-image'>";
    document.getElementById('valorAltura1').innerHTML = '<strong>Altura: ' + altura + '</strong>';
    document.getElementById('valorBase1').innerHTML = '<strong>Base: ' + base + '</strong>';
    document.getElementById('imagenRectangulo').innerHTML = imagenRectangulo;
    document.getElementById('areaRectangulo').innerHTML = '<strong>Área: ' + aRectangulo + '</strong>';
    return false;
}

function areaTriangulo(event) {
    event.preventDefault();
    let altura = document.getElementById('txtalturaTriangulo').value;
    let base = document.getElementById('txtbaseTriangulo').value;

    if (altura === '' || base === '') {
        alert('Por favor, ingresa ambos valores para realizar el cálculo.');
        return false;
    }

    altura = parseFloat(altura);
    base = parseFloat(base);
    let aTriangulo = (altura * base) / 2;
    let imagenTriangulo = "<img src='triangulo.png'   class='result-image'>";
    document.getElementById('imagenTriangulo').innerHTML = imagenTriangulo;
    document.getElementById('valorAltura').innerHTML = '<strong>Altura: ' + altura + '</strong>';
    document.getElementById('valorBase').innerHTML = '<strong>Base: ' + base + '</strong>';
    document.getElementById('areaTriangulo').innerHTML = '<strong>Área: ' + aTriangulo + '</strong>';


return false;
}