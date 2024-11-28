document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //Creating a function for forms

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  });
