const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelector('.thumb');

container.addEventListener('click', function (e) {
  // cek apakah yang di klik adalah thumb
  if (e.target.className == 'thumb') {
    // ganti src jumbo dengan src thumb
    jumbo.src = e.target.src;

    // tambah class baru untuk jumbo supaya ada animasi
    jumbo.classList.add('fade');
    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);

    thumb.forEach(function (thumb) {
      // if (thumb.classList.contains('active')) {
      //   thumb.classList.remove('active');
      // }
      thumb.className = 'thumb';
    });

    e.target.classList.add('active');
  }
});
