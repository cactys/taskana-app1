export const swiperOne = new Swiper('.swiper-one', {
    loop: true,
    freeMode:true,
    slidesPerView:5,
    spaceBetween:16,
    breakpoints:{
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#SliderNext-one',
      prevEl: '#SliderPrev-one',
    },
});
export const swiperTWo = new Swiper('.swiper-two', {
    loop: true,
    freeMode:true,
    slidesPerView:3,
    spaceBetween:16,
    breakpoints:{

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#SliderNext-two',
      prevEl: '#SliderPrev-two',
    },
});