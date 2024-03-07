const form = document.getElementById('contact-form');
        const nameInput = document.getElementById('name');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('name-error');
        const subjectError = document.getElementById('subject-error');
        const messageError = document.getElementById('message-error');
        const successMessage = document.getElementById('success-message');

        form.addEventListener('submit', function(event) {
            // Limpiar mensajes de error previos
            clearErrors();

            let isValid = true;

            // Validar nombre completo
            if (!nameInput.value.trim()) {
                displayErrorMessage(nameError, "El nombre es requerido.");
                isValid = false;
            } else if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
                displayErrorMessage(nameError, "El nombre debe contener solo caracteres alfabéticos.");
                isValid = false;
            }

            // Validar asunto
            if (!subjectInput.value.trim()) {
                displayErrorMessage(subjectError, "El asunto es requerido.");
                isValid = false;
            } else if (!/^[A-Za-z\s]+$/.test(subjectInput.value)) {
                displayErrorMessage(subjectError, "El asunto debe contener solo caracteres alfabéticos.");
                isValid = false;
            }

            // Validar mensaje
            if (!messageInput.value.trim()) {
                displayErrorMessage(messageError, "El mensaje es requerido.");
                isValid = false;
            } else if (!/^[A-Za-z\s]+$/.test(messageInput.value)) {
                displayErrorMessage(messageError, "El mensaje debe contener solo caracteres alfabéticos.");
                isValid = false;
            }

            if (isValid) {
                event.preventDefault(); // Evitar el envío del formulario si hay errores
                showSuccessMessage();
            } else {
                event.preventDefault(); // Evitar el envío del formulario si hay errores
            }
        });

        function clearErrors() {
            nameError.style.display = 'none';
            subjectError.style.display = 'none';
            messageError.style.display = 'none';
        }

        function displayErrorMessage(element, message) {
            element.textContent = message;
            element.style.display = 'block'; // Mostrar el mensaje de error
        }

        // Mostrar mensaje de éxito
        function showSuccessMessage() {
            successMessage.style.display = 'block';
        }
//colores 
const colorOptions = document.querySelectorAll(".color-option");
const mainBox = document.getElementById("main-box");

colorOptions.forEach((option) => {
  option.addEventListener("click", function () {
    const color = this.style.backgroundColor;
    mainBox.style.backgroundColor = color;
  });
});

// calculadora

function calcular() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var operacion = document.getElementById('operacion').value;
    var resultadoElement = document.getElementById('resultado');
    var resultado;

    if (operacion === 'sumar') {
        resultado = numero1 + numero2;
    } else if (operacion === 'restar') {
        resultado = numero1 - numero2;
        if (resultado < 0) {
            resultado = 0; // Si el resultado de la resta es negativo, mostrar 0
        }
    }

    resultadoElement.textContent = "Resultado: " + resultado;
}
