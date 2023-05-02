// DOM SELECTION
// document.getElementById() ---> element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'aqua';
// judul.innerHTML = 'Haikal Alghifari';

// ===============================

// // document.getElementsByTagName() ---> HtmlCollection
// const p = document.getElementsByTagName('p');
// // p[1].style.color = 'red';
// // atau menggunakan looping
// for (let i = 0; i < p.length; i++) {
//   p[i].style.color = 'red';
// }
// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// ===============================

// // document.getElementsByClassName() ---> HtmlCollection
// const l1 = document.getElementsByClassName('l1')[0];
// l1.innerHTML = 'asiappp';

// ==============================

// // document.querySelector() --- > element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'aqua';

// const li2 = document.querySelector('#b li:nth-child(2)');
// li2.style.backgroundColor = 'red';

// ==============================

// document.querySelectorAll() --- > NodeList
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'green';
// }

// DOM MANIPULATION

// const h1 = document.getElementById('judul');
// h1.setAttribute('div', 'link');

// const a = document.querySelector('section#a a');

// DOM MANIPULATION 2

// buat element baru
const pbaru = document.createElement('h1');
const textpbaru = document.createTextNode('Paragraf baru');
// simpan tulisan ke dalam paragraf
pbaru.appendChild(textpbaru);
// simpan pbaru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pbaru);

// ========================

// buat element baru
const Libaru = document.createElement('li');
const textlibaru = document.createTextNode('item baru');
// simpan tulisan ke dalam paragraf
Libaru.appendChild(textlibaru);

// seleksi parent nya dan element setelahnya
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

// element baru, dan element setelahnya
ul.insertBefore(Libaru, li2);

// ========================
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// =========================

// harus seleksi dulu parent nya
const sectionB = document.getElementById('b');
// seleksi element yang mau di replace
const p4 = sectionB.querySelector('p');
// buat element baru
const h2baru = document.createElement('h2');
const teksh2baru = document.createTextNode('Judul Baru!');
h2baru.appendChild(teksh2baru);

// yang pertama node baru, dan element yang mau di ganti
sectionB.replaceChild(h2baru, p4);

pbaru.style.backgroundColor = 'lightGreen';
h2baru.style.backgroundColor = 'lightGreen';
Libaru.style.backgroundColor = 'lightGreen';
