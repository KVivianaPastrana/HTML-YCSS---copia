function tablaDeMultiplicacion(event) {
    event.preventDefault();

    const multiplicador = parseFloat(document.getElementById('txtMultiplicador').value);
    let desdeNumero = parseFloat(document.getElementById('txtDesde').value);
    let hastaNumero = parseFloat(document.getElementById('txtHasta').value);

    let resultadoHTML = ''; 
    
        for (let numeroActual = desdeNumero; numeroActual <= hastaNumero; numeroActual++) {
        let resultado = multiplicador * numeroActual;
        let parOImpar = resultado % 2 === 0 ? 'Par' : 'Impar';

        // Agregar cada resultado a la variable
        resultadoHTML += `${multiplicador} x ${numeroActual} = ${resultado} - ${parOImpar}<br>`;
    }

    document.getElementById('resultadoTabla').innerHTML = resultadoHTML;
}
