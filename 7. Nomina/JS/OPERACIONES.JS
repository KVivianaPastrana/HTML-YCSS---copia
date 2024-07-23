/*
Karol Viviana Pastrana Pastrana
Fecha:11/06/2024
*/

        // Función para calcular los días trabajados y el salario total
        function calcularSalario() {
          const fechaInicio = new Date(document.getElementById('txtfecha_inicio').value);
          const fechaFin = new Date(document.getElementById('txtfecha_fin').value);
          const salarioDiario = parseFloat(document.getElementById('txtsalario_diario').value);
  
          if (fechaInicio > fechaFin) {
              alert("La fecha de inicio no puede ser posterior a la fecha de fin.");
              return null;
          }
  
          if (isNaN(salarioDiario) || salarioDiario <= 0) {
              alert("Ingresa un salario diario válido (número positivo).");
              return null;
          }
  
          const diasTrabajados = Math.ceil((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24));//son la cantidad de milisegundos que hay en un dia
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
          const pagoArl = salarioTotal * 0.052; // Supongamos que el ARL es el 5%
          document.getElementById('pagoArl').innerHTML = `<strong>Pago ARL: ${pagoArl.toFixed(0)}</strong>`;
          return pagoArl;
      }
  
      
      function calcularDescuento(salarioTotal) {
          const pagoSalud = calcularSalud(salarioTotal);
          const pagoPension = calcularPension(salarioTotal);
          const pagoArl = calcularArl(salarioTotal);
          const pagoDescuento = pagoSalud + pagoPension + pagoArl;
          return pagoDescuento;
      }
  
      
      function calcularPagoTotal(salarioTotal) {
          const pagoDescuento = calcularDescuento(salarioTotal);
          const pagosTotal = salarioTotal - pagoDescuento;
          document.getElementById('pagosTotal').innerHTML = `<strong>Pagos totales: ${pagosTotal.toFixed(0)}</strong>`;
      }
  
            document.getElementById('form-calculadora').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevenir el envío del formulario
          const salarioTotal = calcularSalario();
          if (salarioTotal !== null) {
              calcularPagoTotal(salarioTotal);
          }
      });