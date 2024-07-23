function notas() {
    let numeroUno = parseFloat(document.getElementById('txtnumeroUno').value);
    let numeroDos = parseFloat(document.getElementById('txtnumeroDos').value);
    let numeroTres = parseFloat(document.getElementById('txtnumeroTres').value);

    let porcentaje1 = (numeroUno * 20) / 100;
    let porcentaje2 = (numeroDos * 35) / 100;
    let porcentaje3 = (numeroTres * 45) / 100;

    let suma = porcentaje1 + porcentaje2 + porcentaje3;
    let resultado = '';

    if (suma > 4.5) {
        resultado = "Nota Superior";
    } else if (suma <= 4.5 && suma > 3.5) {
        resultado = "Nota Buena";
    } else if (suma <= 3.5 && suma >= 3) {
        resultado = "Nota Media";
    } else {
        resultado = "Nota Mala";
    }

    document.getElementById('suma').innerHTML = '<strong>' + suma.toFixed(2) + '</strong>';
    document.getElementById('resultado').innerHTML = resultado;

    return false;
}