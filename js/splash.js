document.addEventListener("DOMContentLoaded", () => {
    // Revisar si ya se ha visitado cuenta.html
    const hasVisitedCuenta = localStorage.getItem("hasVisitedCuenta");

    // Redirigir después de 2 segundos
    setTimeout(() => {
        if (hasVisitedCuenta) {
            // Si ya se ha visitado cuenta.html, redirigir a inicio.html
            window.location.href = "inicio.html";
        } else {
            // Si no se ha visitado cuenta.html, redirigir a cuenta.html
            window.location.href = "cuenta.html";
            // Marcar que ya se ha visitado cuenta.html
            localStorage.setItem("hasVisitedCuenta", "true");
        }
    }, 3000); // 2000 milisegundos = 2 segundos
});