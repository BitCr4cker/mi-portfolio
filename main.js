// Rutas absolutas para GitHub Pages y local
const base = "/mi-portfolio";

const headerPath = `${base}/components/header.html`;
const footerPath = `${base}/components/footer.html`;

// Insertar Header
fetch(headerPath)
    .then(res => res.text())
    .then(data => {
        document.getElementById("header-container").innerHTML = data;
    });

// Insertar Footer
fetch(footerPath)
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    });

// Enlace activo del menú
setTimeout(() => {
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active-link");
        }
    });
}, 300);
