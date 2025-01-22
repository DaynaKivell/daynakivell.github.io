// scripts.js

// Handle dropdown toggle on mobile
document.addEventListener('DOMContentLoaded', () => {
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
  
    dropdownLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Prevent default link behavior
        e.preventDefault();
        
        // Find the dropdown menu for the clicked link
        const dropdownMenu = link.nextElementSibling;
  
        // Toggle the dropdown menu visibility
        dropdownMenu.classList.toggle('active');
      });
    });
  });
  