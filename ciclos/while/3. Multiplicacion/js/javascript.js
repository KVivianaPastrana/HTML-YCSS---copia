function tablaDeMultiplicacion(event) {
    event.preventDefault();

    const multiplicador = parseFloat(document.getElementById('txtMultiplicador').value);
    let desdeNumero = parseFloat(document.getElementById('txtDesde').value);
    let hastaNumero = parseFloat(document.getElementById('txtHasta').value);

    let output = '';

    while (desdeNumero <= hastaNumero) {

        let resultado = multiplicador * desdeNumero;


        output += `<strong>${multiplicador} x ${desdeNumero} = ${resultado} </strong><br>`;
desdeNumero++;

}
    document.getElementById('resultadoTabla').innerHTML = output;
    }

    