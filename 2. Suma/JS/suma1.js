function sumar(){
    let numeroUno =parseFloat(document.getElementById('txtnumeroUno').value);
    let numeroDos = parseFloat(document.getElementById('txtnumeroDos').value);

    let suma= numeroUno +numeroDos;


    document.getElementById('suma').innerHTML='<strong>'+suma+'</strong>';

    return false;
}

