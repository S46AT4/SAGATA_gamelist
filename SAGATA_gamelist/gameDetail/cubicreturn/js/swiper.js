(() => {
    const swiper = new Swiper(".swiper", {
        // ページネーションが必要なら追加
        pagination: {
        //   el: ".swiper-pagination"
        },
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "2",
        loop: false,
      
        coverflowEffect: {
            depth: 100,
            modifier: 1,
            rotate: 0,
            scale: 0.9,
            slideShadows: true,
            stretch: 100,
            transformEl: null
        },
      
        // ナビボタンが必要なら追加
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
})();