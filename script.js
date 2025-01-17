document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("media-toggle");
    const dropdown = document.getElementById("dropdown-menu");
  
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      dropdown.classList.toggle("show");
    });
  });
  