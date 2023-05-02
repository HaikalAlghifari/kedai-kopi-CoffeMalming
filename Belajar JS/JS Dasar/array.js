// var satu = ['haikal', 'asiap', 'logika'];
// console.log(satu[1]);

// var dua = [];
// dua = ['ayam', 'kuda', 'sapi'];
// console.log(dua[2]);

// array bersarang
// var tiga = ['sapi', 2, false, [2, 3, 4]];
// console.log(tiga[3][1]);

// array function
// var punk = function () {
//   alert('hello world');
// };

// var empat = [1, 3, 2, punk];
// console.log(empat[3]);

// var arr = [];
// arr[0] = 'haikal';
// arr[1] = 'algghifari';
// arr[2] = 'sambi';
// console.log(arr);

// METHOD pada array :

// 1. LENGTH
// var arr = ['haikal', 'alghifari', 'asiap', 'dody'];

// for (var i = 0; i < arr.length; i++) {
//   console.log('mahasiswa ke - ' + (i + 1) + ' : ' + arr[i]);
// }

// 2. JOIN
// var arr = ['haikal', 'alghifari', 'doni'];
// console.log(arr.join(' - '));

// 3. PUSH - POP
// var arr = ['haikal', 'alghifari', 'doni'];
// arr.push('asiap','fitri');
// arr.pop();
// arr.pop();

// 4. unshift & shift
// arr.unshift('rangers', 'lucu');
// arr.shift();
// console.log(arr.join(' - '));

// 5. slice & splice
// var arr = ['haikal', 'alghifari', 'doni', 'asfhasf', 'safafa'];
// // splice (index awal, maudihapusberapa, elemenbaru, elemenbaru)
// arr.splice(2, 3, 'jojo', 'asdga', 'htrgnt');

// slice(awal, akhir)
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(' - '));

// 6. forEach & map
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }
// ATAU PAKE FUNCTION
// var cetak = function (e) {
//   console.log(e);
// };
// angka.forEach(cetak);

// 7. filter & find
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.filter(function (x) {
//   return x < 5;
// });
// console.log(angka2);

var angka2 = angka.find(function (x) {
  return x < 5;
});
console.log(angka2);
