$('.owl-carousel').owlCarousel({
    loop:true,
    item:1,
    nav:true,
    autoplayTimeout: 3000,
    autoplay: true,
    animateOut: 'fadeOut',
    navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },

    }
})