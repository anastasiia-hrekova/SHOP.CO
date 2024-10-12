let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 16,   
    loop: true,

    breakpoints: {
                
        768: {
          slidesPerView: 2,
         
        },
        
        1280: {
          slidesPerView: 3,

        }},

    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });