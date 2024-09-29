// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect animation for navigation links
    const navLinks = document.querySelectorAll('header ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FF5252'; // Lighter red on hover
            link.style.transition = 'color 0.3s ease';
        });
        
        link.addEventListener('mouseout', () => {
            link.style.color = '#FFF'; // Back to white
        });
    });

    // Animate search input focus (scaling)
    const searchInput = document.querySelector('main input');

    searchInput.addEventListener('focus', () => {
        searchInput.style.width = '500px';
        searchInput.style.transition = 'width 0.4s ease';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.width = '400px';
    });
});
