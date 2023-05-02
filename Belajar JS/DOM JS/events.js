// // inline HTML Attribute
// const p2 = document.querySelector('.p2');
// function ubahwarna() {
//   p2.style.backgroundColor = 'aqua';
// }

// // Element Method
// function gantiwarna() {
//   p3.style.backgroundColor = 'aqua';
// }
// const p3 = document.querySelector('.p3');
// p3.onclick = gantiwarna;

// // addEventListener()

// const p4 = document.querySelector('section#b p');
// // 2 parameter, event nya mau apa, dan lakukan sesuatu
// p4.addEventListener('click', function () {
//   // seleksi parent nya
//   const ul = document.querySelector('section#b ul');
//   // buat element baru
//   const libaru = document.createElement('li');
//   const textlibaru = document.createTextNode('item baru');
//   libaru.appendChild(textlibaru);
//   // simpan dalam ul
//   ul.appendChild(libaru);
// });

// PERBEDAAN Event handler & EventListener

// const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//   p3.style.backgroundColor = 'aqua';
// };

// p3.onclick = function () {
//   p3.style.color = 'red';
// };

// p3.addEventListener('dblclick', function () {
//   p3.style.backgroundColor = 'aqua';
// });
// p3.addEventListener('click', function () {
//   p3.style.color = 'red';
// });

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
  const ul = document.querySelector('section#b ul');
  const libaru = document.createElement('li');
  const textlibaru = document.createTextNode('item baru');
  libaru.appendChild(textlibaru);
  ul.appendChild(libaru);
});
p4.addEventListener('click', function () {
  p4.style.backgroundColor = 'red';
});
p4.addEventListener('dblclick', function () {
  p4.style.backgroundColor = 'green';
});
