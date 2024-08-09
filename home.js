function toggledarkMode(){
    const body = document.body;
    const button = document.getElementById('darkModeToggle');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Light';
    } else {
        button.textContent = 'Dark';
    }
}

function toggleMenuButton() {
    const burgerIcon = document.querySelector('.menu-icon');
    burgerIcon.classList.toggle('active');
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}