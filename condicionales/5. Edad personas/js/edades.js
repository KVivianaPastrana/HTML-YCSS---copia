function calcularEdad(fechaNacimiento) {
    var fechaNac = new Date(fechaNacimiento);
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    var mes = fechaActual.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad;
}

function calcularEdades() {
    var fechaNac1 = document.getElementById("fechaNac1").value;
    var fechaNac2 = document.getElementById("fechaNac2").value;
    var fechaNac3 = document.getElementById("fechaNac3").value;

    if (!fechaNac1 || !fechaNac2 || !fechaNac3) {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    var edad1 = calcularEdad(fechaNac1);
    var edad2 = calcularEdad(fechaNac2);
    var edad3 = calcularEdad(fechaNac3);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `Edad Persona 1: ${edad1}<br>Edad Persona 2: ${edad2}<br>Edad Persona 3: ${edad3}<br>`;

    if (edad1 > edad2 && edad1 > edad3) {
        resultado.innerHTML += "La persona 1 es la mayor.<br>";
    } else if (edad2 > edad1 && edad2 > edad3) {
        resultado.innerHTML += "La persona 2 es la mayor.<br>";
    } else if (edad3 > edad1 && edad3 > edad2) {
        resultado.innerHTML += "La persona 3 es la mayor.<br>";
    } else if (edad1 === edad2 && edad1 > edad3) {
        resultado.innerHTML += "La persona 1 y 2 son las mayores.<br>";
    } else if (edad2 === edad3 && edad2 > edad1) {
        resultado.innerHTML += "La persona 2 y 3 son las mayores.<br>";
    } else if (edad3 === edad1 && edad3 > edad2) {
        resultado.innerHTML += "La persona 1 y 3 son las mayores.<br>";
    } else {
        resultado.innerHTML += "Las tres personas tienen la misma edad.<br>";
    }

    var promedioEdad = (edad1 + edad2 + edad3) / 3;
    if (promedioEdad > 18) {
        resultado.innerHTML += "El promedio de las edades "+  promedioEdad.toFixed(2)  + "está por encima de 18. <br>" ;
    } else {
        resultado.innerHTML += `El promedio de las edades (${promedioEdad.toFixed(2)}) está por debajo de 18.<br>`;
    }

    return false;
}