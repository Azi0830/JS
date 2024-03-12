//  1 (1dan n gacha)----------------------------------

for (let n = 1; n <= 20; n++) {
  console.log(n);
}

//-------------------------------------------------------------

// 2 (just yoki toq ) -----------------

var n = 26;
console.log(n % 2 == 0 ? "juft" : "toq");

//-------------------------------------------------------------

// 3 juft raqamlar yig'indisi------------------------

for (let n = 0; n <= 20; n += 2) {
  if (n % 2 === 0) i += n;
}
console.log(i);

var n = 10;
var sum = 0;
let r = 0;

while (i < n) {
  i += 2;
  sum += i;
  console.log(sum);
}

//-------------------------------------------------------------

// 4 (ijobiy, salbiy  va nol)---------------------------

var n = 0;

if (n > 0) console.log("positive");
else if (n == 0) console.log("zero");
else console.log("negative");

//-------------------------------------------------------------

// 5 kara jadvali----------------------------------------

let k = 6;

for (var i = 1; i <= 10; i++) {
  console.log(`${k} * ${i} = ${k * i} `);
}

// (5) while orqali--------------------------------

let b = 5;
let i = 1;
while (i <= 10) {
  console.log(i * b);
  i++;
}

//(5) do while orqali----------------------------

let i = 1;
let e = 5;

do {
  console.log(i * e);
  i++;
} while (i <= 10);

//-------------------------------------------------------------

// 6 sonlar yig'indisi-------------------------------------

var number = 1234;

number = String(number);

var sum = 0;

for (var i = 0; i < number.length; i++) {
  sum += Number(number[i]);
}
console.log(sum);

//-------------------------------------------------------------

// 7 tub sonlar jadvali------------------------------------

// 8 Factorial sonlar 7!=1*2*3*4*5*6*7----------------------

let n = 4;
var i = 1;

for (let s = 1; s <= n; s++) {
  i *= s;
  console.log(i);
}

// (8) while orqli---------------------------------------

var n = 10;
var sum = 1;
let i = 1;

while (i <= n) {
  console.log((sum *= i));
  i++;
}

// (8) do while orqli---------------------------------------

// var n = 4;
// var sum = 1;
// var i = 1;

// do {
//   console.log((sum *= i));
//   i++;
// } while (i <= n);

//-------------------------------------------------------------

// 9 kabisa yili---------------------------------------------

// let yil = 2024;

// if (yil % 4 === 0) {
//   console.log("kabisa yili");
// } else {
//   console.log("kabisa yili emas");
// }

//-------------------------------------------------------------
// var nam = "azimjon turakulov";

// console.log(nam);
// console.log(nam.length);
// console.log(nam.replace("azim", "sardor"));
// console.log(typeof nam);

// var n = 10;
// let s = 1;

// for (let i = 1; i <= n; i++) {
//   s += i;
//   console.log(s);
// }

//var sonlar yig'indisi-------------------------

// var number = 1234;

// number = String(number);

// var sum = 0;

// for (var i = 0; i < number.length; i++) {
//   sum += Number(number[i]);
// }
// console.log(sum);

// var n = 1234;

// n = String(n);

// var s = 0;

// var i = 1;

// while (i < n.length) {
//   s += Number(n[i]);
//   console.log(s);
// }

// var nomber = 1234;

// nomber = String(nomber);

// var sum = 0;

// var i = 0;

// // while (i <= nomber.length) {
// //   console.log(i);
// //   sum += Number(nomber[i]);
// // }

// do {
//   sum += Number(nomber[i]);
//   console.log(sum);
// } while (i > nomber.length);

// console.log(nomber[i], i);

///////////////////////////////////////

// 2--------------------------

// var savat = {
//   sabzi: 10,
//   guruch: 20,
//   gush: 50,
//   moy: 8,
//   zira: 10,
// };

// var n = Object(savat);

// for (var i = 0; i <= n.length; i++) {
//   console.log(Number.values(savat[i]));
// }

// //

// var number = 1234;

// number = String(number);

// var sum = 0;

// for (var i = 0; i < number.length; i++) {
//   sum += Number(number[i]);
// }
// console.log(sum);

/*
1. Massivdagi elementlar ro'yxatini saqlaydigan va foydalanuvchiga ob'ekt usullaridan foydalangan holda ro'yxatdagi narsalarni qo'shish,
 o'chirish yoki yangilash imkonini beradigan dastur yozing.

2. Ob'ektlardan foydalangan holda oddiy xarid qilish savat tizimini amalga oshiring, bu erda foydalanuvchi savatga narsalarni qo'shishi,
 savatdan narsalarni olib tashlashi va savatdagi narsalarning umumiy narxini hisoblashi mumkin.

3. Ismi, yoshi, sinfi kabi xususiyatlarga ega o‘quvchilar ro‘yxatini saqlaydigan dastur tuzing. Foydalanuvchiga roʻyxatga yangi talabalar qoʻshish, 
 talabalarni roʻyxatdan oʻchirish va tizimdagi barcha talabalar roʻyxatini koʻrsatishga ruxsat bering.

4. Ismi, yoshi va jinsi kabi xususiyatlarga ega bo'lgan shaxsni ifodalovchi ob'ektni oladigan va
 shaxs ma'lumotlari bilan formatlangan qatorni qaytaradigan funktsiyani yozing.

5. Ob'ektlardan foydalangan holda oddiy bank tizimini amalga oshirish, bu erda foydalanuvchi hisobvaraqlar yaratishi,
 hisobvaraqlarga pul qo'yishi, hisobvaraqlardan pul olishi va hisob balansini ko'rsatishi mumkin.

6. Ob'ektlar yordamida kutubxona tizimini simulyatsiya qiluvchi dastur yarating, bunda foydalanuvchi kutubxonaga kitob qo'shishi,
 kutubxonadan kitob olishi, olingan kitoblarni qaytarishi va kutubxonadagi barcha kitoblar ro'yxatini ko'rsatishi mumkin.
 */

// //  1-----------------------------

function massiv(list) {
  var massiv = {};

  switch (list.metod) {
    case "uzgartir":
      massiv[list.key] = list.value;
      break;
    case "qush":
      massiv[list.key] = list.value;
      break;
    case "delete":
      delete list.key;
      break;
  }
  return massiv;
}

console.log(massiv({ metod: "uzgartir", key: "vages", value: "apple" }));
console.log(massiv({ metod: "qush", key: "vages", value: "apple" }));
console.log(massiv({ metod: "delete", key: "vages", value: "apple" }));

// --------------------------------------------------------

// 2

var shopping = {
  apple: {
    count: 5,
    price: 1200,
  },
  book: {
    count: 2,
    price: 700,
  },
  potate: {
    count: 6,
    price: 7000,
  },
};

shopping.case = {
  count: 1,
  price: 550,
};

var savat = Object.values(shopping);
var sum = 0;

for (var i = 0; i <= savat.length - 1; i++) {
  sum += Number(savat[i].price) * Number(savat[i].count);
}
console.log(sum);

// --------------------------------------------------------

// 3--------------------------------------------------

function students(list) {
  var students = {};

  if (list.method === "create") {
    students[
      list.name
    ] = `"ism"${list.name} "yosh"${list.age} "klass"${list.klass}`;
  } else if (list.method === "update") {
    students[
      list.name
    ] = `"ism"${list.name} "yosh"${list.age} "klass"${list.klass}`;
  } else if (list.method === "delete") delete students[list.name];

  return students;
}

console.log(students({ method: "create", name: "Abbos", age: 18, klass: 8 }));
console.log(students({ method: "update", name: "Talat", age: 19, klass: 9 }));
console.log(students({ method: "delete", name: "Azim", age: 20, klass: 10 }));

//---------------------

// 4

// var student = {
//   person1: {
//     name: "Azim",
//     surname: "Turakulov",
//     age: "25",
//   },
//   person2: {
//     name: "Sardor",
//     surname: "Suyunov",
//     age: "28",
// //   },
// };

// var ism = "Sardor";

// var stu = Object.keys(student);

// for (let i = 0; i < stu.length; i++) {
//   const f = student[stu[i]];
//   if (ism === f.name) {
//     console.log(`"ism" ${f.name} "familya"${f.surname} "yosh"${f.age}`);
//   } else {
//     console.log("yo`q");
//   }
// }

// --------------------------------------------------------

//  5 -------------------------------------------------------------------
// uzmdam
// var bank = {
//   123456: {
//     hisob: 17.0,
//   },
//   354864: {
//     hisob: 20.0,
//   },
// };

// function pul_yechish(yechish, hisobi, account1) {
//   if (bank[account1]) {
//     if (yechish === "yechish") {
//       bank[account1].hisob -= hisobi;
//       console.log(bank[account1]);
//     } else {
//       bank[account1].hisob += hisobi;
//     }
//   } else {
//     console.log("error1");
//   }
// }
// pul_yechish("yechish", 5.0, 123456);
// var mablag = Object.keys(bank);
// var sum = 0;

// for (var i = 0; i < mablag.length - 1; i++) {
//   sum += account1;
//   console.log(Number(mablag[i].hisob));
//   console.log(sum);
//   if (sum % 2 == 0) {
//     console.log(sum);
//   } else if (sum % 2 == 1) {
//     console.log("error");
//   }
// }

// var n = 0;

// --------------------------------------------------------

// 4 -------------------------------------------------------------------

// var students = {
//   azim: {
//     ism: "azim",
//     gender: "erkak",
//     age: 25,
//   },
//   2: {
//     ism: "sardor",
//     gender: "erkak",
//     age: 28,
//   },
//   3: {
//     ism: "asadbek",
//     gender: "erkak",
//     age: 19,
//   },
// };

// var test_name = "azim";

// function student(params) {
//   if (test_name !== students[test_name]) {
//     console.log(students[test_name]);
//   } else {
//     console.log("topilmadi");
//   }
// }

// student();

// --------------------------------------------------------

// 2 -----------------------------------------------------

// var shopping = {
//   apple: {
//     narxi: 20,
//     soni: 5,
//   },
//   kartoshka: {
//     narxi: 15,
//     soni: 4,
//   },
//   pomidor: {
//     narxi: 10,
//     soni: 2,
//   },
// };

// var shop = Object.values(shopping);
// var sum = 0;

// function savat(soni, narxi, nomi) {
//   for (var i = 0; i < shop.length - 1; i++) {
//     sum += Number(shop[i].narxi) * Number(shop[i].soni);
//   }
//   console.log(sum);
// }

// savat(5, 20, "apple");

// --------------------------------------------------------

// 6---------------
// Kutubxona

var l_store = {
  "Abu Ali Ibn Sino Kitobi": {
    borrow_to: "",
    borrow_caunt: 0,
  },
  "Al-Xorazmiy kitobu": {
    borrow_to: "",
    borrow_caunt: 0,
  },
  "Utgan Kunlar Kitobi": {
    borrow_to: "",
    borrow_caunt: 0,
  },
  "Yulduzli Tunlar Kitobi": {
    borrow_to: "",
    borrow_caunt: 0,
  },
  "Farobiyning Kitobi": {
    borrow_to: "",
    borrow_caunt: 0,
  },
};

function kutubxona(operation) {
  var fount_book = l_store[operation.book_name];

  if (operation.type === "borrow" && typeof fount_book === "undefined") {
    console.log("Book not fount");
  } else if (operation.type === "borrow" && fount_book.borrow_to !== "") {
    console.log("siz izlagan kitob boshqa odamda ");
  } else if (operation.type === "borrow") {
    l_store[operation.book_name] = {
      borrow_to: operation.student_name,
      borrow_caunt: fount_book.borrow_caunt + 1,
    };
  } else if (operation.type === "qaytarildi") {
    l_store[operation.book_name] = {
      borrow_to: "",
      borrow_caunt: fount_book.borrow_caunt,
    };
  }
  console.log(l_store);
}

kutubxona({
  type: "borrow",
  student_name: "asadbek",
  book_name: "Farobiyning Kitobi",
});
kutubxona({
  type: "qaytarildi",
  student_name: "asadbek",
  book_name: "Farobiyning Kitobi",
});

kutubxona({
  type: "borrow",
  student_name: "azim",
  book_name: "Farobiyning Kitobi",
});
kutubxona({
  type: "qaytarildi",
  student_name: "azim",
  book_name: "Farobiyning Kitobi",
});

kutubxona({
  type: "borrow",
  student_name: "sardor",
  book_name: "Farobiyning Kitobi",
});

kutubxona({
  type: "borrow",
  student_name: "aziz",
  book_name: "Abu Ali Ibn Sino Kitobi",
});
// //---------------------
