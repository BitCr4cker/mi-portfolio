// Detectamos si estamos en GitHub Pages
const isGitHub = window.location.hostname.includes("github.io");

// Si estamos en GitHub Pages:
if (isGitHub) {
    // Establece rutas absolutas
    window.headerPath = "/mi-portfolio/components/header.html";
    window.footerPath = "/mi-portfolio/components/footer.html";
} else {
    // Si estamos en local, detectamos si estamos dentro de /pages/
    const isInsidePages = window.location.pathname.includes("/pages/");
    window.headerPath = isInsidePages ? "../components/header.html" : "components/header.html";
    window.footerPath = isInsidePages ? "../components/footer.html" : "components/footer.html";
}

// Insertar Header
fetch(window.headerPath)
    .then(res => res.text())
    .then(data => {
        document.getElementById("header-container").innerHTML = data;
    });

// Insertar Footer
fetch(window.footerPath)
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    });

// Activar el enlace del menú correspondiente
setTimeout(() => {
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active-link");
        }
    });
}, 300);
