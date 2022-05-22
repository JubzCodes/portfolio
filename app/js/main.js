  // <!--========== Nav JS ========== -->
  const menu = document.querySelector('#mobile-menu');
  const menuList = document.querySelector('.nav-menu');

  menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuList.classList.toggle('active');
  });

jQuery(".skillbar").each(function () {
  jQuery(this)
    .find(".skillbar-bar")
    .animate(
      {
        width: jQuery(this).attr("data-percent"),
      },
      2000
    );
});

$(function () {
  $(".carousel-item").eq(0).addClass("active");
  var total = $(".carousel-item").length;
  var current = 0;
  $("#moveRight").on("click", function () {
    var next = current;
    current = current + 1;
    setSlide(next, current);
  });
  $("#moveLeft").on("click", function () {
    var prev = current;
    current = current - 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next) {
    var slide = current;
    if (next > total - 1) {
      slide = 0;
      current = 0;
    }
    if (next < 0) {
      slide = total - 1;
      current = total - 1;
    }
    $(".carousel-item").eq(prev).removeClass("active");
    $(".carousel-item").eq(slide).addClass("active");
    setTimeout(function () {}, 800);

    console.log("current " + current);
    console.log("prev " + prev);
  }
});



// let swiperPortfolio = new Swiper(".portfolio__container", {
//   cssMode: true,
//   loop: true,

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });