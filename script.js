document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.querySelector('.mobile-nav');
    const navList = document.querySelector('.mobile-nav ul');
    let isExpanded = false; // Track menu state

    // Initial state: hide mobile nav and cancel icon
    mobileNav.style.display = 'none'; // Initially hide mobile nav
    menuBtn.classList.remove('clicked');

    menuBtn.addEventListener('click', function() {
        if (isExpanded) {
            mobileNav.style.transition = 'opacity 0.4s, transform 0.4s'; // Add transition
            mobileNav.style.opacity = '0'; // Fade out mobile nav
            mobileNav.style.transform = 'translateY(-100%)'; // Slide out mobile nav
            menuBtn.src = 'images/menu.png'; // Change back to menu icon with transition
            isExpanded = false; // Update menu state
        } else {
            mobileNav.style.transition = 'opacity 0.4s, transform 0.4s'; // Add transition
            mobileNav.style.display = 'block';
            setTimeout(() => { // Delay to allow display change before transition
                mobileNav.style.opacity = '1'; // Fade in mobile nav
                mobileNav.style.transform = 'translateY(0)'; // Slide in mobile nav
            }, 10);
            menuBtn.src = 'images/cancel.png'; // Change to cancel icon with transition
            isExpanded = true; // Update menu state
        }
    });
});
