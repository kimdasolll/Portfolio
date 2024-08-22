

var swiper = new Swiper('.main_swiper', {
    slidesPerView : 'auto',
    spaceBetween: 30,
    pagination: {
        clickable: true,
      },
    loop: true, 
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false},
    slidesPerView: 1.5,
      breakpoints: { //반응형 width 
        500: { slidesPerView: 1, }, 
        640: { slidesPerView: 1, }, 
        800: { slidesPerView: 1, }, 
        1024: { slidesPerView: 1.2, }, } 
})
        


var swiper = new Swiper(".Individual", {
  slidesPerView : 'auto',
    pagination: {
        clickable: true,
      },
    loop: true, 
    breakpoints:{
      1024: {
        slidesPerView: 5.2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
});


var swiper = new Swiper(".content", {
  slidesPerView : 'auto',
    spaceBetween: 10,
    loop: true, 
    breakpoints:{
      1024: {
        slidesPerView: 5.4,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
});



/*
$(function(){
  $('.main_wrap > div').hide();
  $('.watcha_two a').click(function(){
    $('.main_wrap > div').hide().filter(this.hash).fadeIn();
    $('.watcha_two a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
})
*/