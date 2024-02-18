var slides = document.querySelectorAll(".slide");
var btn1 = document.querySelector('#button1');
var btn2 = document.querySelector('#button2');

var counter = 0;

slides.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`;
});

const goNext = ()=>{
    counter++;
    if (counter === slides.length) {
        counter = 0;
    }
    slideImage();
}
const goBack = ()=>{
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImage();
}

const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

// auto slide

const autoSlide = ()=>{
    intervalID = setInterval(goNext, 3000);
}

const stopAutoSlide = ()=>{
    clearInterval(intervalID);
};

autoSlide();

slides.forEach((slide) => {
    slide.addEventListener('mouseenter', () => {
        stopAutoSlide();
    });

    slide.addEventListener('mouseleave', () => {
        autoSlide();
    });
});


btn1.addEventListener('mouseenter', () => {
    stopAutoSlide();
});

btn1.addEventListener('mouseleave', () => {
    autoSlide();
});

btn2.addEventListener('mouseenter', () => {
    stopAutoSlide();
});

btn2.addEventListener('mouseleave', () => {
    autoSlide();
});