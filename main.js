// Detecta si estamos dentro de /pages/
const isInsidePages = window.location.pathname.includes("/pages/");

// Si estamos dentro de /pages/ → las rutas deben subir un nivel con ".."
const headerPath = isInsidePages ? "../components/header.html" : "components/header.html";
const footerPath = isInsidePages ? "../components/footer.html" : "components/footer.html";

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

// Esperar a que el header se cargue antes de activar el enlace correcto
setTimeout(() => {
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
    
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active-link");
        }
    });
}, 200);
