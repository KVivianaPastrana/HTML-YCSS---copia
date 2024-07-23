function contador(event) {
event.preventDefault();

    let contar = parseFloat(document.getElementById('txtcontar').value);
    const numero = parseFloat(document.getElementById('txtnumero').value);

    let output = '';

    while (contar <= numero) {
        // Añadir el valor actual de contar al output
        output += `<strong>${contar}</strong><br>`;
        contar++;
    }

  
    document.getElementById('contar').innerHTML = output;
}