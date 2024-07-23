let index = 1
let slides = document.getElementsByClassName(".slides");
let dots = document.getElementsByClassName(".dot");

const btn_proximo = document.querySelector(".button");

const showSlides = 0;

function addSlides(n){
    showSlides(index += n);
    console.log(showSlides);
    console.log("Adicionando um slide");
}
btn_proximo.addEventListener("click", addSlides);
// showSlides(index);
/*
function addSlides(n){
   // showSlides(index += n);
    console.log(showSlides);
}
/*
function currentSlide(n) {
    showSlides(index = n)
}

function showSlides(n){
    if (n > slides.length) {
        index = 1;
    }

    if (n < 1) {
        index = slides.length;
    }

    for (let i = 1; i < slides.length; i++) {
        let slides = document.getElementsByClassName(".slides");
        let dots = document.getElementsByClassName(".dot");

        slides[i].style.display = 'none';
        dots[i].className = dots[i].className.replece(".active", " ");
    }

    slides[index-1].style.display = ".flex";
    dots[index-1].className += ".active";
}*/