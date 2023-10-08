const results = 75;

// if : 1 kondisi
// else if : membuat 2 kondisi atau lebih
// else : membuat kondisi terakhir
if (results > 90) {
    console.log("Grade : A");
} else if (results > 80) {
    console.log("Grade : B");
} else if (results > 70) {
    console.log("Grade : C");
} else {
    console.log("Grade : D");
}


/**
 * membuat conditional menggunakan ternary-operator(membuat if else lebih singkat)
 * buat conditional if else biasa
 * ubah conditional menjadi lebih singkat menggunakan ternary-operator
 */
const age = 23;
if (age > 21) {
    console.log("Dewasa");
} else {
    console.log("Belum Dewasa");
}

// if else menggunakan ternary-operator
age > 21 ? console.log("Dewasa") : console.log("Belum Dewasa");
// menggunakan ternary-operator utk menyimpan nilai ke variable
const status = age > 21 ? "Dewasa" : "Belum dewasa";
console.log(status);

// nested if : conditional bersarang
const nilai = 80;

if (nilai >= 90) {
    console.log("Lulus, Mendapatkan Nilai Grade A");
} else if (nilai >= 80) {
    console.log("Lulus, Mendapatkan Nilai Grade B");
} else {
        console.log("Mendapatkan Nilai Grade C");
    } if (nilai >= 60) {
        console.log("mendapatkan Nilai Grade D, Masih Lulus");
    } else {
        console.log("Maaf, anda tidak lulus");
    }

