/*untuk menampilkan waktu saat ini pada elemen dengan id waktu*/
function tanggal() {
    const date = new Date();
    waktu.innerHTML = date;
}

setInterval(tanggal, 1000);
tanggal();