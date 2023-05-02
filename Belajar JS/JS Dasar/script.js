// var angka = prompt('masukan angka anda : ');
// switch (angka) {
//   case 1:
//     alert('angka yang anda pilih 1');
//     break;
//   case 2:
//     alert('angka yang anda pilih 2');
//     break;
//   default:
//     alert('angka yang anda pilih tidak ada');
//     break;
// }

// function angka(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log(n);
//   return angka(n - 1);
// }
// angka(10);

// var tanya = true;
// while (tanya) {
//   // menentukan pilihan player
//   var p = prompt('masukan pilihan anda : \nGajah, Semut, Orang : ');
//   // pilihan computer dan angka random
//   var comp = Math.random();

//   if (comp < 0.3) {
//     comp = 'GAJAH';
//   } else if (comp < 0.7) {
//     comp = 'SEMUT';
//   } else {
//     comp = 'ORANG';
//   }
//   // menentukan hasil
//   var hasil = '';
//   if (p == comp) {
//     hasil = 'SERI';
//   } else if (p == 'GAJAH') {
//     if (comp == 'SEMUT') {
//       hasil = 'KALAH';
//     } else {
//       hasil = 'MENANG';
//     }
//   } else if (p == 'SEMUT') {
//     if (comp == 'ORANG') {
//       hasil = 'KALAH';
//     } else {
//       hasil = 'MENANG';
//     }
//   } else if (p == 'ORANG') {
//     if (comp == 'GAJAH') {
//       hasil = 'KALAH';
//     } else {
//       hasil = 'MENANG';
//     }
//   } else {
//     hasil = 'salah input';
//   }
//   // tampilkan hasilnya
//   alert('anda memilih ' + p + ' dan computer memilih ' + comp + ' maka anda ' + hasil);

//   tanya = confirm('lagi?');
// }
// alert('terimakasih sudah bermain :)');

// alert('bermain tebak angka');
// let kesempatan = 2;
// let angka = Math.floor(Math.random() * 10) + 1;
// let mulai = true;

// while (mulai) {
//   alert('Tebak angka dari 1 - 10\n anda punya kesempatan 3 kali');
//   for (kesempatan; kesempatan >= 0; kesempatan--) {
//     player = prompt('pilih angka 1 - 10');
//     if (player == angka) {
//       alert('selamat jawaban anda benar\nAngka nya adalah ' + angka);
//       break;
//     } else if (player < angka) {
//       if (kesempatan == 0) {
//         alert('angka anda terlalu rendah!\nkesempatan anda sudah habis');
//       } else {
//         alert('angka anda terlalu rendah! \nkesempatan ' + kesempatan);
//       }
//     } else if (player > angka) {
//       if (kesempatan == 0) {
//         alert('angka anda terlalu tinggi \nkesempatan anda sudah habis');
//       } else {
//         alert('angka anda terlalu tinggi \nkesempatan anda ' + kesempatan);
//       }
//     } else if (kesempatan == 0) {
//       alert('anda gagal');
//     }
//   }
//   mulai = confirm('main lagi?');
//   if (mulai == true) {
//     kesempatan = 2;
//   }
// }
// alert('terimakasih sudah bermain :)');

// var penumpang = [];
// var tambahpenumpang = function (namapenumpang, penumpang) {
//   if (penumpang.length == 0) {
//     penumpang.push(namapenumpang);
//     return penumpang;
//   } else {
//     for (var i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] == undefined) {
//         penumpang[i] = namapenumpang;
//         return penumpang;
//       } else if (penumpang[i] == namapenumpang) {
//         console.log(namapenumpang + ' sudah ada di dalam angkot');
//         return penumpang;
//       } else if (i == penumpang.length - 1) {
//         penumpang.push(namapenumpang);
//         return penumpang;
//       }
//     }
//   }
// };

// var hapuspenumpang = function (namapenumpang, penumpang) {
//   if (penumpang == 0) {
//     console.log('angkot masih kosong');
//     return penumpang;
//   } else {
//     for (var i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] == namapenumpang) {
//         penumpang[i] = undefined;
//         return penumpang;
//       } else if (i == penumpang.length - 1) {
//         console.log(namapenumpang + ' tidak ada di dalam angkot');
//         return penumpang;
//       }
//     }
//   }
// };

// var namamhs = 'haikal';
// var umur = 20;
// var lulus = true;
// var ipsemester = [2.9, 2.3, 3.75, 3.5, 3.0];

// function ipk(ipsemester) {
//   var total = 0;
//   for (var i = 0; i < ipsemester.length; i++) {
//     total += ipsemester[i];
//   }
//   return total / ipsemester.length;
// }
// ipk(ipsemester[1]);
// console.log(ipsemester);

function angkot(supir, trayek, penumpang, kas) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  // penumpang naik
  this.penumpangnaik = function (namapenumpang) {
    this.penumpang.push(namapenumpang);
    return this.penumpang;
  };

  // penumpang turun
  this.penumpangturun = function (namapenumpang, bayar) {
    if (this.penumpang.length == 0) {
      alert('angkot masih kosong');
      return false;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namapenumpang) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        } else {
          console.log('penumpang dengan nama ' + this.namapenumpang + ' tidak ada di dalam angkot');
          return this.penumpang;
        }
      }
    }
  };
}
var angkot1 = new angkot('haikal', 'curug-bitung', [], 0);
var angkot2 = new angkot('fahri', 'binong-cimone', [], 0);
