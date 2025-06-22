function toggleMenu() {
    const nav = document.getElementById("nav_menu");
    nav.classList.toggle("show");
};

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav_menu').classList.remove('show');
    });
})