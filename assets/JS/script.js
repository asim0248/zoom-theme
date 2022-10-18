let navbar = document.querySelector('.header-nav-bar');

document.querySelector('.mobile-bars').onclick = () =>{
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".rest-slide", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: true,
});

var swiper = new Swiper(".blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        320:{
            slidesPerView: 1,
        },
        375:{
            slidesPerView: 1,
        },
        425:{
            slidesPerView: 1,
        },
        540:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 2,
        }
    }
});