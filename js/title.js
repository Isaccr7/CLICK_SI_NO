document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Cuando la página está oculta (usuario cambió de pestaña)
        document.title = "No te vayas2";
    } else {
        // Cuando la página vuelve a estar visible
        document.title = "Mi Página";
    }
});
