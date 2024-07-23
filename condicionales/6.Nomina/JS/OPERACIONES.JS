/*
Karol Viviana Pastrana Pastrana
Fecha:11/06/2024
*/

            
        /*
    Karol Viviana Pastrana Pastrana
    Fecha:11/06/2024
    */

    // Función para calcular los días trabajados y el salario total
    function calcularSalario() {
        const diasTrabajados = parseInt(document.getElementById('diasTrabajados').value);
        const salarioDiario = parseFloat(document.getElementById('txtsalario_diario').value);
  
        if (isNaN(diasTrabajados) || diasTrabajados <= 0) {
          alert("Ingresa un número válido de días trabajados.");
          return null;
        }
  
        if (isNaN(salarioDiario) || salarioDiario <= 0) {
          alert("Ingresa un salario diario válido (número positivo).");
          return null;
        }
  
        const salarioTotal = diasTrabajados * salarioDiario;
  
        document.getElementById('suma').innerHTML = `<strong>Días trabajados: ${diasTrabajados}</strong><br>
                                                      <strong>Salario total: ${salarioTotal.toFixed(0)}</strong>`;
  
        return salarioTotal;
      }
  
      function calcularSalud(salarioTotal) {
        const pagoSalud = salarioTotal * 0.12;
        document.getElementById('pagoSalud').innerHTML = `<strong>Pago salud: ${pagoSalud.toFixed(0)}</strong>`;
        return pagoSalud;
      }
  
      function calcularPension(salarioTotal) {
        const pagoPension = salarioTotal * 0.16;
        document.getElementById('pagoPension').innerHTML = `<strong>Pago pensión: ${pagoPension.toFixed(0)}</strong>`;
        return pagoPension;
      }
  
      function calcularArl(salarioTotal) {
        const pagoArl = salarioTotal * 0.052; // Supongamos que el ARL es el 5.2%
        document.getElementById('pagoArl').innerHTML = `<strong>Pago ARL: ${pagoArl.toFixed(0)}</strong>`;
        return pagoArl;
      }
  
      function calcularDeducible(salarioTotal) {
        const pagoSalud = calcularSalud(salarioTotal);
        const pagoPension = calcularPension(salarioTotal);
        const pagoArl = calcularArl(salarioTotal);
        const pagoDeducible = pagoSalud + pagoPension + pagoArl;
        document.getElementById('deducible').innerHTML = `<strong>Total deducible: ${pagoDeducible.toFixed(0)}</strong>`;
        return pagoDeducible;
      }
  
      function calcularSubTransporte(salarioTotal) {
        const salarioMinimo = 1600000;
        let subTransporte = 0;
        if (salarioTotal <= 2 * salarioMinimo) {
          subTransporte = 114000;
        }
        document.getElementById('subTransporte').innerHTML = `<strong>Subsidio de transporte: ${subTransporte.toFixed(0)}</strong>`;
        return subTransporte;
      }
  
      function calcularPagoTotal(salarioTotal) {
        const pagoDeducible = calcularDeducible(salarioTotal);
        const subTransporte = calcularSubTransporte(salarioTotal);
        const pagosTotal = salarioTotal - pagoDeducible + subTransporte;
        document.getElementById('pagosTotal').innerHTML = `<strong>Pagos totales: ${pagosTotal.toFixed(0)}</strong>`;
      }
  
      function calcular(event) {
        event.preventDefault();
        const salarioTotal = calcularSalario();
        if (salarioTotal !== null) {
          calcularPagoTotal(salarioTotal);
        }
      }