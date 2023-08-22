window.onload = function() {
    customizeSwiperPagination();
};

function customizeSwiperPagination() {
    var paginationBullets = document.querySelectorAll('.africe .swiper-pagination-bullet');

    for (var i = 0; i < paginationBullets.length; i++) {
        paginationBullets[i].style.backgroundColor = '#ff0000';
        paginationBullets[i].style.opacity = '0.5';
    }

    var activePaginationBullet = document.querySelector('.africe .swiper-pagination-bullet-active');

    if (activePaginationBullet) {
        activePaginationBullet.style.backgroundColor = '#FFF';
    }
}
