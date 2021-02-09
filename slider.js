const sliderSlide = document.querySelector('.slider-slide');
const sliderFoto = document.querySelectorAll('.slider-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = sliderFoto[0].clientWidth;

sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if (counter >= sliderFoto.length -1) return;
    sliderSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    sliderSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

sliderSlide.addEventListener('transitionend', ()=>{
    if(sliderFoto[counter].id === 'kloni-fundit'){
        sliderSlide.style.transition = "none";
        counter = sliderFoto.length -2;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(sliderFoto[counter].id === 'kloni-par'){
        sliderSlide.style.transition = "none";
        counter = sliderFoto.length - counter;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});