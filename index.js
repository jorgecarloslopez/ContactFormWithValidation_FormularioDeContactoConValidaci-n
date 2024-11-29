document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //Creating a function for forms

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    let isValid = true;
    if (name === "") {
      document.getElementById("nameError").textContent =
        "El nombre es obligatorio.";
      isValid = false;
    } else if (name.length < 3) {
      document.getElementById("nameError").textContent =
        "El nombre debe tener al menos 3 caracteres.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent =
        "El correo electrónico es obligatorio.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Ingresa un correo electrónico válido.";
      isValid = false;
    }

    if (isValid) {
      document.getElementById("successMessage").textContent =
        "Formulario enviado con éxito.";
      this.reset();
    }
  });
