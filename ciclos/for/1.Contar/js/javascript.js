function contador(event) {
    event.preventDefault();

    let contar1 = parseFloat(document.getElementById('txtcontar').value);
    const numero = parseFloat(document.getElementById('txtnumero').value);

    let output = '';


    for (let contar = contar1; contar <= numero; contar++) {
        output += `<strong>${contar}</strong><br>`;
    }

    document.getElementById('contar').innerHTML = output;
}
