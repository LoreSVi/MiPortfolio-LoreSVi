// Inicializar AOS (animaciones on scroll)
AOS.init();

// ScrollReveal Animations

ScrollReveal().reveal(".about", {
  duration: 2000,
  origin: "left",
  distance: "100px",
});

ScrollReveal().reveal(".portfolio-item", {
  duration: 1500,
  origin: "bottom",
  distance: "50px",
  interval: 200,
});

//menu hamburguesa
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".navbar ul").classList.toggle("active");
});

//formulario contacto
// Inicializa EmailJS con tu User ID
(function () {
  emailjs.init("Tservice_GmailSend"); // Reemplaza TU_USER_ID con tu ID de usuario
})();

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name === "" || email === "" || message === "") {
        alert("Por favor, rellena todos los campos.");
      } else {
        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
        };

        emailjs.send("TU_SERVICIO", "TU_TEMPLATE", templateParams).then(
          function (response) {
            alert("¡Gracias por contactarme! Te responderé lo antes posible.");
          },
          function (error) {
            alert("Error al enviar el correo: " + JSON.stringify(error));
          }
        );

        // Limpiar el formulario
        document.getElementById("contact-form").reset();
      }
    });
});
