
function calcularEdad() {

    const fechaNacimiento = new Date(document.getElementById('txtFecha').value);
    
    const fechaActual = new Date();

    
    const añoActual = fechaActual.getFullYear();
    const añoNacimiento = fechaNacimiento.getFullYear();

    
    let edad = añoActual - añoNacimiento;


    if (fechaNacimiento.getMonth() > fechaActual.getMonth() || 
        (fechaNacimiento.getMonth() === fechaActual.getMonth() && fechaNacimiento.getDate() > fechaActual.getDate())) {
        edad--;
    }

    
    const resultado = document.getElementById("resultado");

    if (edad >= 18) {
        resultado.innerHTML = "La persona es mayor de edad: " + edad;
    } else {
        resultado.innerHTML = "La persona es menor de edad: " + edad;
    }
    
    return false; 
}
