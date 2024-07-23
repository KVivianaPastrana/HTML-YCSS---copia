/*
Karol Viviana Pastrana Pastrana
Fecha:11/06/2024
*/

function sumar(){
  let numeroUno= parseInt(document.getElementById('txtnumeroUno').value);
  let numeroDos= parseInt(document.getElementById('txtnumeroDos').value);
  let suma= numeroUno+numeroDos;

  document.getElementById('suma').innerHTML = '<strong>' +suma+'</strong>';

  return false;

}







