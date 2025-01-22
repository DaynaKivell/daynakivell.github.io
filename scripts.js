document.addEventListener('DOMContentLoaded', () => {
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
  
    dropdownLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Prevent the default link behavior
        e.preventDefault();
  
        // Find the dropdown menu related to the clicked link
        const dropdownMenu = link.nextElementSibling;
  
        // Toggle the 'active' class to show/hide the dropdown menu
        dropdownMenu.classList.toggle('active');
      });
    });
  });
  
