//numeros del 1  al 10
//karol VIVIANA pastrana
//08/07/2024

let arregloNumero = [1, 2, 4, 5, 6, 7, 8, 9, 10];
let iteracion;
let resultadoPrint = "";

for (iteracion = 0; iteracion < arregloNumero.length; iteracion++) {
    resultadoPrint += '<li class="list-group-item">' + arregloNumero[iteracion] + '</li>';
}

console.log(resultadoPrint);
document.getElementById('listaNumeros').innerHTML = resultadoPrint;

arregloNumero=[];
for(iteracion=0;iteracion<10;iteracion++){
    numero =iteracion+1;
    arregloNumero.push(numero);
}

resultadoPrint="";

for(iteracion=0;iteracion<arregloNumero.length;iteracion++){
    resultadoPrint += '<li class="list-group-item">' + arregloNumero[iteracion] + '</li>';
}
console.log(resultadoPrint);
document.getElementById('listaNumeros2').innerHTML = resultadoPrint;
