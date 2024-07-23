
function dividir() {
    let numeroUno= parseInt(document.getElementById('txtnumeroUno').value);
    let numeroDos= parseInt(document.getElementById('txtnumeroDos').value);
    let dividir=(numeroUno+numeroDos)/100;

    document.getElementById('dividir').innerHTML='<strong>' +dividir+ '</strong>' ;
    return false;


}