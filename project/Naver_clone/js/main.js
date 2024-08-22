// 헤더 바 추가

const menu = document.querySelector('.input_scroll'); //변수 선택
// const menuHeight = menu.getBoundingClientRect().height; // 헤더의 위치 정보 변수 정하기

document.addEventListener('scroll', () => { //이벤트를 진행 : scroll
    if (window.scrollY > 230) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
});


// 메뉴 색 추가

$('.news ul li a').click(function () {
    $('.news ul li a').removeClass('black');
    $(this).addClass('black');
})

$('.live_list ul li a').click(function () {
    $('.live_list ul li a').removeClass('check');
    $(this).addClass('check');
})

$('.sugges_list ul li a').click(function () {
    $('.sugges_list ul li a').removeClass('show');
    $(this).addClass('show');
})

// 추천 구독 탭메뉴 색 추가

$('.popularity_list ul li a').click(function () {
    $('.popularity_list ul li a').removeClass('color');
    $(this).addClass('color');
})

