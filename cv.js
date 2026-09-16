document.addEventListener('DOMContentLoaded', () => {

    const toggleButton = document.getElementById('toggle-theme');

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Ganti Tema (Light Mode)';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        const isDarkMode = document.body.classList.contains('dark-mode');

        if (isDarkMode) {
            toggleButton.textContent = 'Ganti Tema (Light Mode)';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = 'Ganti Tema (Dark Mode)';
            localStorage.setItem('theme', 'light');
        }
    });

});
