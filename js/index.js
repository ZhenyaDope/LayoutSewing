console.log(`Thanks for using my build ^-^`);

const screenWidth = document.body.clientWidth;
const sliderViewItems = 3;
if( screenWidth < 1191){
  sliderViewItems = 1;
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView:3,
    autoplay:true,
    spaceBetween: 10,
    freeMode: true,
    // loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });