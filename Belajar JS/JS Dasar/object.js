// object literal
// var obj = {};
// obj.halo = function () {
//   console.log('halo');
// };
// obj.halo();

// function declaration
// function halo() {
//   console.log('halo2');
// }
// halo();

// constructor function
// function Halo() {
//   console.log('halo3');
// }
// new Halo();

// THIS
// var a = 10;
// console.log(window.a);

// function declaration
// function halo() {
//   console.log(this);
//   console.log('halo');
// }
// this.halo();
// this adalah mengembalikan object global

// Object literal
// var obj = { a: 10, nama: 'haikal' };
// obj.halo = function () {
//   console.log(this);
//   console.log('halo');
// };
// obj.halo();
// this mengembalikan object yang bersangkutan

// constructor function
// function Halo() {
//   console.log(this);
//   console.log('halo');
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan object yang baru di buat

// LATIHAN THIS OBJECT
// menggunakan constructor function

// function Angkot(sopir, trayek, penumpang, kas) {
//   this.sopir = sopir;
//   this.trayek = trayek;
//   this.penumpang = penumpang;
//   this.kas = kas;

//   this.penumpangnaik = function (namapenumpang) {
//     this.penumpang.push(namapenumpang);
//     return this.penumpang;
//   };

//   this.penumpangturun = function (namapenumpang, bayar) {
//     if (this.penumpang.length === 0) {
//       console.log('angkot masih kosong !');
//       return false;
//     }

//     for (var i = 0; i < this.penumpang.length; i++) {
//       if (this.penumpang[i] == namapenumpang) {
//         this.penumpang[i] = undefined;
//         this.kas += bayar;
//         return this.penumpang;
//       }
//     }
//   };
// }

// var angkot1 = new Angkot('haikal', ['curug', 'bitung'], [], 0);

// var angkot2 = new Angkot('alghifari', ['bitung', 'cikupa'], [], 0);

function Angkot(sopir, trayek, penumpang, kas) {
  // nilai awal
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  // penumpang naik
  this.penumpangnaik = function (namapenumpang) {
    this.penumpang.push(namapenumpang);
    return penumpang;
  };

  // penumpang turun
  this.penumpangturun = function (namapenumpang, bayar) {
    // jika angkot kosong
    if (penumpang == 0) {
      console.log('angkot anda masih kosong !!!');
      return false;
    }
    // jika ada penumpang
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namapenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return penumpang;
      } else if (i == this.penumpang.length - 1) {
        console.log(namapenumpang + ' tidak ada di dalam angkot');
        return penumpang;
      }
    }
  };
}

var angkot1 = new Angkot('haikal', ['curug - bitung'], [], 0);
