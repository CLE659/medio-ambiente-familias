document.addEventListener("DOMContentLoaded", () => {
  const niveles = document.querySelectorAll(".nivel");
  niveles.forEach((nivel, i) => {
    setTimeout(() => {
      nivel.classList.remove("bloqueado");
    }, (i + 1) * 1000);
  });
});