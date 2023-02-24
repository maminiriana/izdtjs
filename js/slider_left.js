/*fonction pour le slider*/
const slide = ["img/slider1/slideA.jpg", "img/slider1/slideB.jpg", "img/slider1/slideC.jpg", "img/slider1/slideD.jpg", "img/slider1/slideE.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
setInterval("ChangeSlide(1)", 4000);
/*FIN fonction pour le slider*/