// Menunggu hingga seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Ambil elemen tombol dari HTML
    const toggleButton = document.getElementById('toggle-theme');

    // 2. Cek apakah pengguna sebelumnya sudah memilih mode gelap (tersimpan di LocalStorage)
    const currentTheme = localStorage.getItem('theme');

    // Jika di penyimpanan tersimpan 'dark', aktifkan dark mode
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Ganti Tema (Light Mode)';
    }

    // 3. Tambahkan event listener saat tombol diklik
    toggleButton.addEventListener('click', () => {
        // Toggle class 'dark-mode' pada elemen <body>
        document.body.classList.toggle('dark-mode');

        // Cek apakah mode gelap sedang aktif
        const isDarkMode = document.body.classList.contains('dark-mode');

        // Ubah teks tombol sesuai kondisi
        if (isDarkMode) {
            toggleButton.textContent = 'Ganti Tema (Light Mode)';
            // Simpan pilihan ke LocalStorage
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = 'Ganti Tema (Dark Mode)';
            // Simpan pilihan ke LocalStorage
            localStorage.setItem('theme', 'light');
        }
    });

});