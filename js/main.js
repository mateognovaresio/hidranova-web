/* ==========================================================================
   MAIN.JS
   Interacciones simples del sitio: abrir/cerrar el menú en celular
   y cerrarlo automáticamente al tocar un link.
   No hay nada más de JS en el sitio a propósito: es una página de
   contacto, no una app, así que no hace falta más que esto.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.querySelector(".menu-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("is-open");
    var isOpen = mobileMenu.classList.contains("is-open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggleBtn.textContent = isOpen ? "✕" : "☰";
  });

  // Cerrar el menú al tocar cualquier link dentro de él
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("is-open");
      toggleBtn.textContent = "☰";
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
});
