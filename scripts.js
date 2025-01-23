document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
  
    // Hamburger menu toggle functionality
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  
    // Dropdown toggle functionality for links
    dropdownLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = link.nextElementSibling;
  
        if (dropdownMenu) {
          dropdownMenu.classList.toggle('active');
        }
      });
    });
  
    // Scroll functionality to close the dropdown menu
    window.addEventListener('scroll', () => {
      // If the navigation menu is open, close it on scroll
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });
  