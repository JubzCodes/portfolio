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