const main = () => {
  $(document).ready(function () {
    $(".nav-active").append(`<span class="box"></span>`);

    $(".nav-link-custom").click(function () {
      let i = $(this).index();
      $(".page").each(function (e) {
        if (i === e) {
          $(".page").removeClass("page-active");
          $(this).addClass("page-active");
        }
      });
      $(".nav-link-custom").removeClass("nav-active");
      $(".box").remove();
      $(this).addClass("nav-active");
      $(this).append(`<span class="box"></span>`);
    });

    $(".btn-slider").click(function () {
      $(".navbar-mobile").addClass("slide-active");
    });

    $(".btn-close-custom").click(function () {
      $(".navbar-mobile").removeClass("slide-active");
    });

    $(".card-nav").click(function () {
      let i = $(this).index();
      $(".page").each(function (e) {
        if (i === e) {
          $(".page").removeClass("page-active");
          $(this).addClass("page-active");
          $(".navbar-mobile").removeClass("slide-active");
        }
      });

      $(".nav-link-custom").each(function (s) {
        if (i === s) {
          $(".nav-link-custom").removeClass("nav-active");
          $(".box").remove();
          $(this).addClass("nav-active");
          $(this).append(`<span class="box"></span>`);
        }
      });
    });
  });
};

export default main;
