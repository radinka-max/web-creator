function ceklogin() {
    let daftar_akun = [
    {User: "frido", Pass: "frido77"},
    {User: "toko bahagia", Pass: "bahagia123"},
    {User: "priasolo", Pass: "solo123"}
     ];
     
     const loginFrom = document.getElementById('loginFrom')
     const messageText = document.getElementById('message')

     console.log("username yang terbaca komputer: " + inputUsername);
    console.log("password yang terbaca komputer: " + inputPassword);

     loginFrom.addEventListener('submit', function(event) {

        const inputUsername = document.getElementById('username').value;
        const inputPassword = document.getElementById('password').value;

        if (inputUsername === daftar_akun.User && inputPassword === daftar_akun.Pass) {
        messegeText.textContent = "login berhasil! membuka halaman utama... ";
        messageText.style.color = "green";
        setTimeout(function() {
            window.location.href = "Index.html";
        }, 1000);
    }else {
        messegeText.textContent = "password atau username salah!";
        messageText.style.color = "red";
    }
     });
}   