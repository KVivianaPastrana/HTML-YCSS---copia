
function suma() {
    let numeroUno = parseInt(document.getElementById('txtnumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtnumeroDos').value);
    let numeroTres = parseInt(document.getElementById('txtnumeroTres').value);

    if (isNaN(numeroUno) || isNaN(numeroDos) || isNaN(numeroTres)) {
        alert('Por favor, ingrese números válidos.');
        return false;
    }

    let porcentaje1 = (numeroUno * 30) / 100;
    let porcentaje2 = (numeroDos * 30) / 100;
    let porcentaje3 = (numeroTres * 40) / 100;

    let suma = porcentaje1 + porcentaje2 + porcentaje3;

    document.getElementById('suma').innerHTML = '<strong>' + suma + '</strong>';
    return false;
}