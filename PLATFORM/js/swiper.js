var body = document.body
body.className = 'bg-swiper bg1';
var slider = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true,
    onSlideChangeStart: function (swiper) {
        var currentSlide = swiper.slides[ swiper.activeIndex ];
        body.className = "bg-swiper " + currentSlide.getAttribute( 'data-bg' );
        console.log( currentSlide.getAttribute( 'data-bg' ) );
    },
});