const day = 3;
let nameday;

switch (day) {
    case 1:
        nameday = "Senin";
        break;
    case 2:
        nameday = "Selasa";
        break;
    case 3:
        nameday = "Rabu";
        break;
    case 4:
        nameday = "Kamis";
        break;
    default:
        nameday = "no valid day";
}

console.log(`Besok merupakan day ${nameday}`);