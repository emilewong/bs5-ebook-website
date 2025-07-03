/*
 * Handles navbar style changes on scroll
 * Adds dark background and sticky class when scrolled down 50px+
 * Removes classes when scrolled back to top
 */
function userScroll() {
    // Select the navbar element
    const navbar = document.querySelector('.navbar');

    // Add scroll event listener
    window.addEventListener('scroll', ()=> {
        // Check scroll position
        if (window.scrollY > 50) {
            // Add dark background and sticky styling
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
        } else {
            // Remove styles when at top
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-sticky');
        }
    });
}

// Initialize scroll handler when DOM is fully loaded
document.addEventListener('DOMContentLoaded', userScroll);