const logo = document.getElementById("logo-img");

logo.addEventListener("mouseenter", () => {
  logo.src = "./logo-gold.png"; // imagem ao hover
});

logo.addEventListener("mouseleave", () => {
  logo.src = "./logo-rosa-claro.png"; // imagem original
});
