// Inicializar AOS (animaciones on scroll)
AOS.init();

// ScrollReveal Animations
ScrollReveal().reveal(".hero-content", {
  duration: 2000,
  origin: "bottom",
  distance: "50px",
});

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

// Formulario de contacto con validación básica
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
      alert("¡Gracias por contactarme! Te responderé lo antes posible.");
      // Aquí puedes integrar una API o enviar el formulario
    }
  });
