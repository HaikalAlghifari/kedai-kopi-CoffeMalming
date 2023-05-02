// SWITCH CASE
// var angka = prompt('masukan angka anda :');
// switch (angka) {
//   case '1':
//     alert('anda memasukan angka 1');
//     break;
//   case '2':
//     alert('anda memasukan angka 2');
//     break;
//   default:
//     alert('angka yang anda masukan salah');
//     break;
// }

// var item = prompt('masukan pilihan anda : \n nasi, ayam, daging, junkfood, softdrink');
// switch (item) {
//   case 'nasi':
//   case 'ayam':
//   case 'daging':
//     alert('makanan ini SEHAT');
//     break;

//   case 'junkfood':
//   case 'softdrink':
//     alert('makanan ini tidak SEHAT');
//     break;

//   default:
//     alert('makanan yang anda input tidak ada!!!');
//     break;
// }

// IF ELSE
// var angka = prompt('masukan angka : ');
// if (angka % 2 == 0) {
//   alert(angka + ' adalah bilangan genap');
// } else {
//   alert(angka + ' adalah bilangan ganjil');
// }

// var jmlhangkot = 10;
// var Angkotnyala = 6;
// var noAngkot = 1;

// for (noAngkot = 1; noAngkot <= jmlhangkot; noAngkot++) {
//   if (noAngkot <= 6 && noAngkot != 5) {
//     console.log('angkot no ' + noAngkot + ' beroprasi dengan baik');
//   } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//     console.log('angkot no ' + noAngkot + ' sedang lembur');
//   } else {
//     console.log('angkot no ' + noAngkot + ' sedang tidak beroprasi');
//   }
// }

// // pil player
// var tanya = true;
// // komputer
// while (tanya) {
//   var p = prompt('masukan pilihan anda : \ngajah, semut, orang?');
//   var comp = Math.random();

//   if (comp < 0.3) {
//     comp = 'gajah';
//   } else if (comp > 0.3 && comp < 0.7) {
//     comp = 'semut';
//   } else if (comp > 0.7) {
//     comp = 'orang';
//   } else {
//     comp = 'pilihan anda tidak tersedia !!!';
//   }

//   // menentukan rules
//   var hasil = '';
//   if (p == comp) {
//     hasil = 'seri';
//   } else if (p == 'gajah') {
//     if (comp == 'semut') {
//       hasil = 'kalah';
//     } else {
//       hasil = 'menang';
//     }
//   } else if (p == 'semut') {
//     if (comp == 'orang') {
//       hasil = 'kalah';
//     } else {
//       hasil = 'menang';
//     }
//   } else if (p == 'orang') {
//     hasil = comp == 'gajah' ? 'kalah' : 'menang';
//   } else {
//     hasil = 'pilihan anda tidak tersedia';
//   }

//   // hasil
//   alert('anda memilih ' + p + ' dan komputer memilih ' + comp + '\nmaka hasilnya ' + hasil);

//   tanya = confirm('ingin coba lagi?');
// }
// alert('terimakasih sudah bermain :)');

// var jmlhangkot = 10;
// var noAngkot = 1;
// var Angkotnyala = 6;

// for (noAngkot = 1; noAngkot <= jmlhangkot; noAngkot++) {
//   if (noAngkot <= 6 && noAngkot != 5) {
//     console.log('angkot nomor ' + noAngkot + ' beroparasi dengan baik');
//   } else if (noAngkot == 5 || noAngkot == 8 || noAngkot == 10) {
//     console.log('angkot nomor ' + noAngkot + ' sedang lembur');
//   } else if (noAngkot >= Angkotnyala) {
//     console.log('angkot nomor ' + noAngkot + ' sedang tidak beroprasi');
//   }
// }
