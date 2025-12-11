// --- Minimal JavaScript for Mobile Menu Toggle ---

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    // Toggles the 'active' class on the navigation menu element
    navbar.classList.toggle('active'); 
});

// Optional: Close menu when a link is clicked on mobile
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { 
            navbar.classList.remove('active');
        }
    });
});