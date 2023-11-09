document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nombreInput = document.querySelector('input[name="nombre"]');
    const apellidoInput = document.querySelector('input[name="apellido"]');
    const dniInput = document.querySelector('input[name="dni"]');
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Evitar que el formulario se envíe por defecto
  
      // Realiza tu validación aquí
      const nombre = nombreInput.value;
      const apellido = apellidoInput.value;
      const dni = dniInput.value;
      const mail = document.querySelector('input[name="mail"]').value;
      const telefono = document.querySelector('input[name="telefono"]').value;
      const tipoSeguro = document.getElementById("my-select").value;
  
      // Expresión regular para verificar que solo se ingresen letras en nombre y apellido
      const letrasRegExp = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
  
      // Expresión regular para verificar que solo se ingresen números en el DNI
      const numerosRegExp = /^[0-9]+$/;
  
      if (
        nombre === "" ||
        apellido === "" ||
        dni === "" ||
        mail === "" ||
        telefono === "" ||
        tipoSeguro === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Por favor, complete todos los campos del formulario.",
        });
      } else if (!letrasRegExp.test(nombre) || !letrasRegExp.test(apellido)) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Los campos de nombre y apellido solo deben contener letras.",
        });
      } else if (!numerosRegExp.test(dni)) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El campo de DNI solo debe contener números.",
        });
      } else {
        // Los campos están completos y validados, puedes continuar con el proceso
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Formulario enviado con éxito.",
        });
      }
    });
  
    // Agregar eventos para validar la entrada en tiempo real
    nombreInput.addEventListener("input", function () {
      if (!letrasRegExp.test(this.value)) {
        this.setCustomValidity("Los nombres solo deben contener letras.");
      } else {
        this.setCustomValidity("");
      }
    });
  
    apellidoInput.addEventListener("input", function () {
      if (!letrasRegExp.test(this.value)) {
        this.setCustomValidity("Los apellidos solo deben contener letras.");
      } else {
        this.setCustomValidity("");
      }
    });
  
    dniInput.addEventListener("input", function () {
      if (!numerosRegExp.test(this.value)) {
        this.setCustomValidity("El DNI solo debe contener números.");
      } else {
        this.setCustomValidity("");
      }
    });
  });
  
  

function actualizarValorSeguro() {
    const tipoSeguro = document.getElementById("my-select").value;
    const valorSeguro = document.getElementById("valorSeguroTexto");

    const tiposSeguro = {
        "500": "$500",
        "1000": "$1000",
        "1500": "$1500"
    };

    valorSeguro.textContent =tiposSeguro[tipoSeguro];
}
document.getElementById("my-select").addEventListener("change", actualizarValorSeguro);

function mostrarMensajeEnProceso(mensaje) {
    Swal.fire({
        icon: 'info',
        title: 'En proceso',
        text: `La sección "${mensaje}" está en desarrollo. Pronto estará disponible.`,
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const inicioLink = document.getElementById('inicio');
    const productosLink = document.getElementById('acercade');

    if (inicioLink) {
        inicioLink.addEventListener('click', function (event) {
            event.preventDefault();
            mostrarMensajeEnProceso('Inicio');
        });
    }

    if (productosLink) {
        productosLink.addEventListener('click', function (event) {
            event.preventDefault();
            mostrarMensajeEnProceso('Acerca de');
        });
    }
});