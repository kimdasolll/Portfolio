
//메뉴바 생성

$('.header .img').click(function () {
	$('.toggle_gnb').addClass('active');
})
$('.toggle_box .img').click(function () {
	$('.toggle_gnb').removeClass('active');
})


//텍스트 이동 

let didScroll = false;
let paralaxTitles = document.querySelectorAll('.left_slide');
let paralaxTitle = document.querySelectorAll('.right_slide');

const scrollInProgress = () => {
	didScroll = true
}

const raf = () => {
	if (didScroll) {
		paralaxTitles.forEach((element, index) => {   //제목들(타이틀) 움직이는 것
			element.style.transform = "translateX(" + window.scrollY / - 50 + "%)"  // 만약 스크롤이 X로 움직이면 -Y 방향이동
		})
		paralaxTitle.forEach((element, index) => {   //제목들(타이틀) 움직이는 것
			element.style.transform = "translateX(" + window.scrollY / 50 + "%)"  // 만약 스크롤이 X로 움직이면 Y 방향이동
		})
		didScroll = false;  //스크롤 하지 않을때에는 이동 X
	}
	requestAnimationFrame(raf); //반복작업
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)

