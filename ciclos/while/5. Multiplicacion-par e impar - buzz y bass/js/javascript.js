function tablaDeMultiplicacion(event) {
    event.preventDefault();

    const multiplicador = parseFloat(document.getElementById('txtMultiplicador').value);
    let desdeNumero = parseFloat(document.getElementById('txtDesde').value);
    let hastaNumero = parseFloat(document.getElementById('txtHasta').value);

    let output = '';
    let numerosPares = 0;
    let numerosImpares = 0;

while  ( desdeNumero <= hastaNumero) {
        let resultado = multiplicador * desdeNumero;
        let buzzBass = resultado % 2 === 0 ? 'Buzz' : 'Bass';

        output += `<strong>${multiplicador} x ${desdeNumero} = ${resultado} - ${buzzBass} </strong> <br>`;

        desdeNumero++;
        if (resultado % 2 === 0) {
            numerosPares++;
        } else {
            numerosImpares++;
        }
    
    }

    document.getElementById('resultadoTabla').innerHTML = output;
    document.getElementById('numerosPares').innerText = `Números pares: ${numerosPares}`;
    document.getElementById('numerosImpares').innerText = `Números impares: ${numerosImpares}`;
}
