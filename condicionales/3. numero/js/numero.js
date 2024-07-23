function numero() {
    let numeroUno=parseInt(document.getElementById('txtnumeroUno').value);;
    let numeroDos=parseInt(document.getElementById('txtnumeroDos').value);;
   
 
    if (numeroUno == numeroDos) {
        document.getElementById=(resultado).innerHTML="son iguales";
    }

    else
        if (numeroUno > numeroDos) {
            document.getElementById=(resultado).innerHTML="Numero uno es mayor";
        }
        else {
            document.getElementById=(resultado).innerHTML="Numero dos es mayor";
        }
    return false;


}