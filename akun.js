// 1. DAFTAR AKUN YANG BOLEH LOGIN
const daftarAkun = [
    { username: "frido", password: "frido77" },
    { username: "toko bahagia", password: "bahagia123" },
    { username: "priasolo", password: "solo123" }
];

// 2. LOGIKA PROSES LOGIN
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah reload halaman
    
    // Ambil teks yang diketik user
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    // Cari di dalam daftar apakah ada yang cocok
    const akunCocok = daftarAkun.find(akun => akun.username === inputUsername && akun.password === inputPassword);

    if (akunCocok) {
        // Jika sukses, langsung pindah ke web tujuan Anda di sini
        window.location.href = "Index2.html"; 
    } else {
        // Jika salah, munculkan peringatan
        alert('Username atau Password salah!');
    }
});
