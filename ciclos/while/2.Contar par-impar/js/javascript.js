function contador(event) {
event.preventDefault();

let contar = parseFloat(document.getElementById('txtcontar').value);
const numero = parseFloat(document.getElementById('txtnumero').value);

let output = '';

while (contar <= numero) {
    // Determinar si el número es par o impar
    let parOImpar = contar % 2 === 0 ? 'Par' : 'Impar';

    // Añadir el valor actual 
    output += `<strong>${contar} - ${parOImpar}</strong><br>`;
    contar++;
}

// Mostrar el resultado en el div con id "contar"
document.getElementById('contar').innerHTML = output;
}
