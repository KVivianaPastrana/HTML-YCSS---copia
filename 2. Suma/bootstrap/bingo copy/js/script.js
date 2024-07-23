document.addEventListener('DOMContentLoaded', function () {
    let bingo = [];
    let acumulador = 0;
    let interacion1;
    let interacion2;
    let printResultado = '';

    // Generar los números para el cartón de bingo
    for (interacion1 = 0; interacion1 < 5; interacion1++) {
        let interno = [];
        for (interacion2 = 0; interacion2 < 5; interacion2++) {
            acumulador += 1;
            interno[interacion2] = acumulador * 2;
        }
        bingo.push(interno);
    }

    const headers = ['B', 'I', 'N', 'G', 'O'];

    // Añadir los encabezados (B, I, N, G, O)
    printResultado += '<tr>';
    for (let i = 0; i < headers.length; i++) {
        printResultado += '<th>' + headers[i] + '</th>';
    }
    printResultado += '</tr>';

    // Añadir los números al cartón de bingo
    for (interacion1 = 0; interacion1 < bingo.length; interacion1++) {
        printResultado += '<tr>';
        for (interacion2 = 0; interacion2 < bzingo[interacion1].length; interacion2++) {
            printResultado += '<td>' + bingo[interacion1][interacion2] + '</td>';
        }
        printResultado += '</tr>';
    }

    document.getElementById('bingo-card').innerHTML = printResultado;
});
