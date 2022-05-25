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

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link'");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);



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