$(function () {
    console.log('首页js初始化完毕')
    let swiper = new Swiper('.bannerArea', {
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true, // 循环
        autoplay: true, // 自动播放3s切换
    })
    let swiper2 = new Swiper('.banner2Area', {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true // 循环
    });
})