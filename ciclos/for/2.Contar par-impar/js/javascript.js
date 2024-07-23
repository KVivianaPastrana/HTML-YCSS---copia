function contador(event) {
    event.preventDefault();

    let contar1 = parseFloat(document.getElementById('txtcontar').value);
    const numero = parseFloat(document.getElementById('txtnumero').value);

    let output = '';

    for (let contar = contar1; contar <= numero; contar++) {
        // Determinar si el número es par o impar
        let parOImpar = contar % 2 === 0 ? 'Par' : 'Impar';


        output += `<strong>${contar} - ${parOImpar}</strong><br>`;
    }

    document.getElementById('contar').innerHTML = output;
}
