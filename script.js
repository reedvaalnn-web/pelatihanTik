
// 1. Mencari elemen tombol di HTML yang memiliki ID 'sapaButton' 
// lalu menyimpannya ke dalam semacam "kotak ingatan" bernama tombolSapa
const tombolSapa = document.getElementById('sapaButton');

// 2. Memberikan "pendengaran" pada tombolSapa agar bereaksi jika di-'click'
tombolSapa.addEventListener('click', function() {
    
    // 3. Menampilkan pesan pop-up (peringatan kecil) di layar saat diklik
    alert('Halo! Terima kasih sudah berkunjung!');
    
});
