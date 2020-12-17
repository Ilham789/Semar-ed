tahunan = document.getElementById('tahunan');
bulanan = document.getElementById('bulanan');
hargaSD = document.getElementById('harga-sd');
hargaSMP = document.getElementById('harga-smp');
hargaSMA = document.getElementById('harga-sma');

tahunan.addEventListener('click',()=>{
    if (tahunan.classList.contains('outline-blue-btn')){
        tahunan.classList.remove('outline-blue-btn');
        tahunan.classList.add('blue-btn');
        bulanan.classList.remove('blue-btn');
        bulanan.classList.add('outline-blue-btn');

        hargaSD.innerHTML = 'IDR 10.000.000'
        hargaSMP.innerHTML = 'IDR 20.000.000'
        hargaSMA.innerHTML = 'IDR 30.000.000'
    }
});

bulanan.addEventListener('click',()=>{
    bulanan.classList.remove('outline-blue-btn');
    bulanan.classList.add('blue-btn');
    tahunan.classList.remove('blue-btn');
    tahunan.classList.add('outline-blue-btn');

    hargaSD.innerHTML = 'IDR 1.000.000'
    hargaSMP.innerHTML = 'IDR 2.000.000'
    hargaSMA.innerHTML = 'IDR 3.000.000'
});