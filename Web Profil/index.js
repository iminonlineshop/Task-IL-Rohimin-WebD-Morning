// var i =0, text;
// text = 'Frontend Developer Web Developer Business';

// function animasi() {
//     if(i < text.lenght){
//         document.getElementById('app').innerHTML += text.charAt(i);
//         i++;
//         setTimeout(animasi, 100)
//     }
// }

// animasi();


// var typed = new typed(".animasi", {
//     Strings:["And i'm a Frontend Developer", "Web Developer", "Business"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });


var i = 0;
var animasitext = "And I'm a Business and Frontend";
var speed = 100;

function animasi () {
    if ( i < animasitext.length){
        document.getElementById("animasitext").innerHTML += animasitext.charAt(i);
        i++;
        setTimeout(animasi, speed)
    }       
};