function restar() {
  let numeroUno = parseInt(document.getElementById('txtnumeroUnoSuma').value);
  let numeroDos = parseInt(document.getElementById('txtnumeroDosSuma').value);

  // Valida que los campos no estén vacíos
  if (numeroUno === '' || numeroDos === '') {
      alert('Por favor, ingresa ambos números para realizar la suma.');
      return false;
  }

  let resta = numeroUno - numeroDos;
  document.getElementById('resultadoSuma').innerHTML = '<strong>' + resta + '</strong>';
  return false;
}

function multiplicacion() {
  let numeroUno = parseInt(document.getElementById('txtnumeroUnoMulti').value);
  let numeroDos = parseInt(document.getElementById('txtnumeroDosMulti').value);

  // Valida que los campos no estén vacíos
  if (numeroUno === '' || numeroDos === '') {
      alert('Por favor, ingresa ambos números para realizar la multiplicación.');
      return false;
  }

  let multiplicar = numeroUno * numeroDos;
  document.getElementById('resultadoMultiplicacion').innerHTML = '<strong>' + multiplicar + '</strong>';
  return false;
}

function division() {
  let numeroUno = parseInt(document.getElementById('txtnumeroUnoDiv').value);
  let numeroDos = parseInt(document.getElementById('txtnumeroDosDiv').value);

  // Valida que los campos no estén vacíos
  if (numeroUno === '' || numeroDos === '') {
      alert('Por favor, ingresa ambos números para realizar la división.');
      return false;
  }

  let dividir = numeroUno / numeroDos;
  document.getElementById('resultadoDivision').innerHTML = '<strong>' + dividir + '</strong>';
  return false;
}


