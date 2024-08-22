$('.side_img').click(function () {
  $('.side_bar').addClass('active');
});
$('.side_bar_close').click(function () {
  $('.side_bar').removeClass('active')}
);


$(function(){
  $('.menu_box  .menu_coffee, .menu_box .menu_dessert, .menu_box .menu_deli').hide();
  $('.menu_name a').click(function(){
    $('.menu_box   .menu_coffee, .menu_box  .menu_dessert, .menu_box  .menu_deli').hide().filter(this.hash).fadeIn();
    $('.menu_name a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
})