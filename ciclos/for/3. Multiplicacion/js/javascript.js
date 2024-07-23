function tablaDeMultiplicacion(event) {
    event.preventDefault();

    const multiplicador = parseFloat(document.getElementById('txtMultiplicador').value);
    let desdeNumero = parseFloat(document.getElementById('txtDesde').value);
    let hastaNumero = parseFloat(document.getElementById('txtHasta').value);

    let output = '';

    for (let numeroActual = desdeNumero; numeroActual <= hastaNumero; numeroActual++) {
        let resultado = multiplicador * numeroActual;

        output += `${multiplicador} x ${numeroActual} = ${resultado} <br>`;


    document.getElementById('resultadoTabla').innerHTML = output;

    }
}

