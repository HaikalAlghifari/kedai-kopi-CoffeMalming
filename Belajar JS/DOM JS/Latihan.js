// LATIHAN DOM 1

// KASUS 1
// membuat background berubah warna ketika di click

// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   const h1 = document.querySelector('h1');
//   h1.classList.toggle('h1');
//   document.body.classList.toggle('biru-muda');
// });

// KASUS 2
// membuat warna background random ketika di click
// const btnbaru = document.createElement('button');
// const textbtn = document.createTextNode('warna random');
// btnbaru.appendChild(textbtn);
// btnbaru.setAttribute('type', 'button');
// const btnlama = document.querySelector('button');
// btnlama.after(btnbaru);

// btnbaru.addEventListener('click', function () {
//   // rumus untuk warna random nya
//   // Math.round / Math.floor untuk membulatkan bilangan
//   const r = Math.round(Math.random() * 255 + 1);
//   const g = Math.round(Math.random() * 255 + 1);
//   const b = Math.round(Math.random() * 255 + 1);

//   document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ',' + b + ')';
// });

// KASUS 3
// Membuat slider pergantian warna
// const merah = document.querySelector('input[name=merah]');
// const hijau = document.querySelector('input[name=hijau]');
// const biru = document.querySelector('input[name=biru]');
// merah.addEventListener('input', function () {
//   const r = merah.value;
//   const g = hijau.value;
//   const b = biru.value;
//   document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ',' + b + ')';
// });
// hijau.addEventListener('input', function () {
//   const r = merah.value;
//   const g = hijau.value;
//   const b = biru.value;
//   document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ',' + b + ')';
// });
// biru.addEventListener('input', function () {
//   const r = merah.value;
//   const g = hijau.value;
//   const b = biru.value;
//   document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ',' + b + ')';
// });

// // KASUS 4

// // Membuat pergerakan kursor menjadi pergantian warna
// document.body.addEventListener('mousemove', function (events) {
//   const xPos = Math.round((events.clientX / window.innerWidth) * 255);
//   const yPos = Math.round((events.clientY / window.innerWidth) * 255);
//   document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ',100)';
// });

// var noAngkot = 1;
// var jmlhangkot = 10;
// var Angkotnyala = 6;

// for (noAngkot = 1; noAngkot <= jmlhangkot; noAngkot++) {
//   if (noAngkot <= 6 && noAngkot != 5) {
//     console.log('angkot no ' + noAngkot + ' sedang beroprasi dngn baik');
//   } else if (noAngkot == 5 || noAngkot == 7) {
//     console.log('angkot no ' + noAngkot + ' sedang lembur');
//   } else if (noAngkot >= Angkotnyala) {
//     console.log('angkot no ' + noAngkot + ' sedang tidak beroparasi');
//   }
// }

// LATIHAN DOM 2
// SUWIT JAWA

function pilihanComputer() {
  const comp = Math.random();
  if (comp < 0.3) return 'gajah';
  if (comp > 0.3 && comp <= 0.7) return 'semut';
  return 'orang';
}

function hasil(comp, player) {
  if (player == comp) return 'SERI';
  if (player == 'gajah') return comp == 'semut' ? 'Nisa Kalah Hehe' : 'Tumben Menang';
  if (player == 'semut') return comp == 'orang' ? 'Nisa Kalah Hehe' : 'Tumben Menang';
  if (player == 'orang') return comp == 'gajah' ? 'Nisa Kalah Hehe' : 'Tumben Menang';
}

function putar() {
  const imgComputer = document.querySelector('.img-computer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktumulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktumulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}
const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function () {
  const pilcomp = pilihanComputer();
  const pilplayer = pGajah.className;
  const gethasil = hasil(pilcomp, pilplayer);

  const imgcomputer = document.querySelector('.img-computer');
  imgcomputer.setAttribute('src', 'img/' + pilcomp + '.png');

  const info = document.querySelector('.info');
  info.innerHTML = gethasil;
});

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilcomp = pilihanComputer();
    const pilplayer = pil.className;
    const gethasil = hasil(pilcomp, pilplayer);
    putar();

    setTimeout(function () {
      const imgcomputer = document.querySelector('.img-computer');
      imgcomputer.setAttribute('src', 'img/' + pilcomp + '.png');

      const info = document.querySelector('.info');
      info.innerHTML = gethasil;
    }, 1000);
  });
});
