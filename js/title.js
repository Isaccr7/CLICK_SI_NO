document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Cuando la página está oculta (usuario cambió de pestaña)
        document.title = "🌻🌻 NO TE VAYAS 😓🌻🌻";
    } else {
        // Cuando la página vuelve a estar visible
        document.title = "🌻🌻FLORES AMARILLAS🌻🌻";
    }
});
