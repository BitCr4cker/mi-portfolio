// Detectar si estamos en GitHub Pages
const isGitHub = window.location.hostname.includes("github.io");

// Base del sitio en GitHub Pages
const gitHubBase = "/mi-portfolio";

// Detectar si estamos dentro de /pages/ en local
const isInsidePages = window.location.pathname.includes("/pages/");

// Calcular rutas correctas
let headerPath, footerPath;

if (isGitHub) {
    // Rutas absolutas para GitHub Pages
    headerPath = gitHubBase + "/components/header.html";
    footerPath = gitHubBase + "/components/footer.html";
} else {
    // Rutas relativas para local
    headerPath = isInsidePages ? "../components/header.html" : "components/header.html";
    footerPath = isInsidePages ? "../components/footer.html" : "components/footer.html";
}

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

// Activar enlace del menú
setTimeout(() => {
    const page = window.location.pathname.split("/").pop().replace(".html", "");
    const links = document.querySelectorAll(".nav-links a");
    
    links.forEach(link => {
        if (link.dataset.page === page) {
            link.classList.add("active-link");
        }
    });
}, 300);
