// Definimos la tarifa por metro cuadrado en dólares por hora
const tarifaPorMetroCuadrado = 0.15;

// Obtenemos el botón de calcular costo y añadimos un evento click
const botonCalcular = document.getElementById("calcular-costo");
botonCalcular.addEventListener("click", function() {
  const metrosCuadrados = parseInt(document.getElementById("metros-cuadrados").value);
  
  // Calculamos el tiempo requerido en horas y minutos
  const tiempoRequeridoMinutos = metrosCuadrados * 15;
  const horasRequeridas = Math.floor(tiempoRequeridoMinutos / 60);
  const minutosRestantes = tiempoRequeridoMinutos % 60;

  // Agregamos la fecha y hora actual
  const fecha = new Date();
  const fechaFormateada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
  const horaFormateada = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

  // Calculamos el costo total del servicio
  const costoTotal = metrosCuadrados * tarifaPorMetroCuadrado * (tiempoRequeridoMinutos / 60);

  // Mostramos el resultado de la cotización en el elemento "resultado-cotizacion"
  const resultadoCotizacion = document.getElementById("resultado-cotizacion");
  resultadoCotizacion.innerHTML = `
    <h2>COTIZACIÓN DE SERVICIOS</h2>
    <h3>[No incluye impuestos de ley]</h3>
    <br>
    <p>Fecha: ${fechaFormateada}</p>
    <p>Hora: ${horaFormateada}</p>
    <p>Cantidad m² cotizados: ${metrosCuadrados}</p>
    <p>Tiempo est. de finalización: ${horasRequeridas} horas y ${minutosRestantes} minutos</p>
    <p>Tarifa m²/hora: ${tarifaPorMetroCuadrado.toFixed(2)} dólares</p>
    <p>Total a pagar: ${costoTotal.toFixed(2)} dólares</p>
    <p>Servicios REMP</p>
  `;
});
