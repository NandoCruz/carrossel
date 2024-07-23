let index = 1;
showSlides(index);

function addSlides(n){
    showSlides(index += n);
<<<<<<< Updated upstream
=======
    console.log(showSlides);
>>>>>>> Stashed changes
}

function currentSlide(n) {
    showSlides(index = n);
}

function showSlides(n){
<<<<<<< Updated upstream
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
        
=======
    
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

>>>>>>> Stashed changes
    if (n > slides.length) {
        index = 1;
    }

    if (n < 1) {
        index = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
        slides[i].style.display = 'none';
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index-1].style.display = "flex";
    dots[index-1].className += " active";
}