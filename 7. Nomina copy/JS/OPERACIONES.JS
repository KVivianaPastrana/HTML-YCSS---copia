
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
  
      function calcularDescuento(salarioTotal) {
        const pagoSalud = calcularSalud(salarioTotal);
        const pagoPension = calcularPension(salarioTotal);
        const pagoArl = calcularArl(salarioTotal);
        const pagoDescuento = pagoSalud + pagoPension + pagoArl;
        document.getElementById('pagoDescuento').innerHTML = `<strong>Total descuentos: ${pagoDescuento.toFixed(0)}</strong>`;
        return pagoDescuento;
      }
  
      function calcularPagoTotal(salarioTotal) {
        const pagoDescuento = calcularDescuento(salarioTotal);
        const pagosTotal = salarioTotal - pagoDescuento;
        document.getElementById('pagosTotal').innerHTML = `<strong>Pago total: ${pagosTotal.toFixed(0)}</strong>`;
      }
  
      function calcular(event) {
      event.preventDefault();
      const salarioTotal = calcularSalario();
      if (salarioTotal !== null) {
        calcularPagoTotal(salarioTotal);
      }
    }
      
      
  
