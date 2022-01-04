"use strict";

(function ($) {
  "use strict"; // search-toggle

  var $sToggle = $(".search-toggle");
  var $searchBody = $(".search-body");
  $sToggle.on("click", function (e) {
    e.preventDefault();
    $searchBody.slideToggle();
  });
  /*---------------------------
          Commons Variables
       ------------------------------ */

  var $window = $(window),
      $body = $("body");
  /*--------------------------
      Sticky Menu
    ---------------------------- */

  $($window).on("scroll", function () {
    var scroll = $($window).scrollTop();

    if (scroll < 150) {
      $("#sticky").removeClass("is-isticky");
    } else {
      $("#sticky").addClass("is-isticky");
    }
  });
  /*---------------------------------
            Off Canvas toggler Function
        -----------------------------------*/

  var $offCanvasToggle = $(".offcanvas-toggle"),
      $offCanvas = $(".offcanvas"),
      $offCanvasOverlay = $(".offcanvas-overlay"),
      $mobileMenuToggle = $(".mobile-menu-toggle");
  $offCanvasToggle.on("click", function (e) {
    e.preventDefault();
    var $this = $(this),
        $target = $this.attr("href");
    $body.addClass("offcanvas-open");
    $($target).addClass("offcanvas-open");
    $offCanvasOverlay.fadeIn();

    if ($this.parent().hasClass("mobile-menu-toggle")) {
      $this.addClass("close");
    }
  });
  $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
    e.preventDefault();
    $body.removeClass("offcanvas-open");
    $offCanvas.removeClass("offcanvas-open");
    $offCanvasOverlay.fadeOut();
    $mobileMenuToggle.find("a").removeClass("close");
  });
  /*----------------------------------
           Off Canvas Menu
       -----------------------------------*/

  function mobileOffCanvasMenu() {
    var $offCanvasNav = $(".offcanvas-menu, .overlay-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".offcanvas-submenu");
    /*Add Toggle Button With Off Canvas Sub Menu*/

    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');
    /*Category Sub Menu Toggle*/

    $offCanvasNav.on("click", "li a, .menu-expand", function (e) {
      var $this = $(this);

      if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
        e.preventDefault();

        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }

  mobileOffCanvasMenu();
  var $offcanvasMenu2 = $("#offcanvas-menu2 li a");
  $offcanvasMenu2.on("click", function (e) {
    // e.preventDefault();
    $(this).closest("li").toggleClass("active");
    $(this).closest("li").siblings().removeClass("active");
    $(this).closest("li").siblings().children(".category-sub-menu").slideUp();
    $(this).closest("li").siblings().children(".category-sub-menu").children("li").toggleClass("active");
    $(this).closest("li").siblings().children(".category-sub-menu").children("li").removeClass("active");
    $(this).parent().children(".category-sub-menu").slideToggle();
  });
  /*----------------------------  
        All Category toggle  
     ------------------------------*/

  $(".category-toggle").on("click", function (e) {
    $(".category-menu").slideToggle(300);
  });
  $(".menu-item-has-children-1").on("click", function (e) {
    $(".category-mega-menu-1").slideToggle("slow");
  });
  $(".menu-item-has-children-2").on("click", function (e) {
    $(".category-mega-menu-2").slideToggle("slow");
  });
  $(".menu-item-has-children-3").on("click", function (e) {
    $(".category-mega-menu-3").slideToggle("slow");
  });
  $(".menu-item-has-children-4").on("click", function (e) {
    $(".category-mega-menu-4").slideToggle("slow");
  });
  $(".menu-item-has-children-5").on("click", function (e) {
    $(".category-mega-menu-5").slideToggle("slow");
  });
  $(".menu-item-has-children-6").on("click", function () {
    $(".category-mega-menu-6").slideToggle("slow");
  });
  /*-----------------------------  
              Category more toggle  
        -------------------------------*/

  $(".category-menu li.hidden").hide();
  $("#more-btn").on("click", function (e) {
    e.preventDefault();
    $(".category-menu li.hidden").toggle(500);
    var htmlAfter = '<i class="ion-ios-minus-empty" aria-hidden="true"></i> Less Categories';
    var htmlBefore = '<i class="ion-ios-plus-empty" aria-hidden="true"></i> More Categories';

    if ($(this).html() == htmlAfter) {
      $(this).html(htmlBefore);
    } else {
      $(this).html(htmlAfter);
    }
  });
  /*---------------------------
        menu-content
    ------------------------------ */

  var $btnMenu = $(".menu-btn");
  var $vmenuContent = $(".vmenu-content");
  $btnMenu.on("click", function (event) {
    $vmenuContent.slideToggle(500);
  });
  $vmenuContent.each(function () {
    var $ul = $(this),
        $lis = $ul.find(".menu-item:gt(7)"),
        isExpanded = $ul.hasClass("expanded");
    $lis[isExpanded ? "show" : "hide"]();

    if ($lis.length > 0) {
      $ul.append($('<li class="expand">' + (isExpanded ? '<a href="javascript:void(0);"><span><i class="ion-android-remove"></i>Close Categories</span></a>' : '<a href="javascript:void(0);"><span><i class="ion-android-add"></i>More Categories</span></a>') + "</li>").on("click", function (event) {
        var isExpanded = $ul.hasClass("expanded");
        event.preventDefault();
        $(this).html(isExpanded ? '<a href="javascript:void(0);"><span><i class="ion-android-add"></i>More Categories</span></a>' : '<a href="javascript:void(0);"><span><i class="ion-android-remove"></i>Close Categories</span></a>');
        $ul.toggleClass("expanded");
        $lis.toggle(300);
      }));
    }
  });
  /*-----------------------------
        main slider active
      ---------------------------- */

  var $timer = 6000;
  var $mainSlider = $(".main-slider");
  $mainSlider.slick({
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    arrows: false,
    prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false
      }
    }]
  }).slickAnimation();

  function progressBar() {
    $(".slick-progress").find("span").removeAttr("style");
    $(".slick-progress").find("span").removeClass("active");
    setTimeout(function () {
      $(".slick-progress").find("span").css("transition-duration", $timer / 1000 + "s").addClass("active");
    }, 100);
  }

  progressBar();
  $mainSlider.on("beforeChange", function (e, slick) {
    progressBar();
  });
  /*--------------------------
         product slider init
        ---------------------------- */

  var $productSliderInit = $(".product-slider-init");
  $productSliderInit.slick({
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  /*--------------------------
         product slider 2 init
        ---------------------------- */

  var $productSlider2Init = $(".product-slider2-init");
  $productSlider2Init.slick({
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 1499,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  /*--------------------------
         popular-slider-init
        ---------------------------- */

  var $popularSlider = $(".popular-slider-init");
  $popularSlider.slick({
    autoplay: false,
    autoplaySpeed: 10000,
    dots: true,
    infinite: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  /*--------------------------
        featured-init
  ---------------------------- */

  var $featuredSlider = $(".featured-init");
  $featuredSlider.slick({
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  /*--------------------------
        featured-init2
  ---------------------------- */

  var $featuredSlider2 = $(".featured-init2");
  $featuredSlider2.slick({
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  /*--------------------------
         product ctry slider init
        ---------------------------- */

  var $productCtry = $(".product-ctry-init");
  $productCtry.slick({
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  /*--------------------------
         blog slider init
        ---------------------------- */

  var $blogInit = $(".blog-init");
  $blogInit.slick({
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  /*--------------------------
         brand slider init
        ---------------------------- */

  var $brandInit = $(".brand-init");
  $brandInit.slick({
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  /*---------------------------
      countdown-syncing
      ---------------------------- */

  $(".countdown-sync-init").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    draggable: false,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".countdown-sync-nav"
  });
  $(".countdown-sync-nav").slick({
    dots: false,
    arrows: false,
    infinite: true,
    prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".countdown-sync-init",
    focusOnSelect: true,
    draggable: false
  });
  /*---------------------------
      product-syncing
      ---------------------------- */

  $(".product-sync-init").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    draggable: false,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".product-sync-nav"
  });
  $(".product-sync-nav").slick({
    dots: false,
    arrows: false,
    infinite: true,
    prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-sync-init",
    focusOnSelect: true,
    draggable: false
  });
  /*---------------------------
      product-syncing 2
      ---------------------------- */

  $(".product-sync-init2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    draggable: false,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".product-sync-nav2"
  });
  $(".product-sync-nav2").slick({
    dots: false,
    arrows: false,
    infinite: true,
    prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-sync-init2",
    focusOnSelect: true,
    draggable: false
  });
  /*--------------------------
      tooltip
      ---------------------------- */

  $('[data-toggle="tooltip"]').tooltip(); // slider-range

  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 100,
    values: [0, 100],
    slide: function slide(event, ui) {
      $("#amount").val("€" + ui.values[0] + " - €" + ui.values[1]);
    }
  });
  $("#amount").val("€" + $("#slider-range").slider("values", 0) + " - €" + $("#slider-range").slider("values", 1)); // slider-range end

  /*----------------------------------------
      fixed issue in bootstrap tabs problem
      ----------------------------------------- */

  $('a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
    e.target;
    e.relatedTarget;
    $(".slick-slider").slick("setPosition");
  });
  /*-----------------------------------
       fixed issue in bs modal problem
       ---------------------------------- */

  $(".modal").on("shown.bs.modal", function (e) {
    $(".slick-slider").slick("setPosition");
  });
  /*--------------------------
      comment  scroll down 
      ---------------------------- */

  $("#write-comment").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $(".theme-btn--dark3").offset().top + 750
    }, 500, "linear");
  });
  /*--------------------------     
           counter 
         -------------------------- */

  $(".count").each(function () {
    var count = $(this),
        input = count.find('input[type="number"]'),
        increament = count.find(".increment"),
        decreament = count.find(".decrement"),
        minValue = input.attr("min"),
        maxValue = input.attr("max");
    increament.on("click", function () {
      var oldValue = parseFloat(input.val());

      if (oldValue >= maxValue) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }

      count.find("input").val(newVal);
      count.find("input").trigger("change");
    });
    decreament.on("click", function () {
      var oldValue = parseFloat(input.val());

      if (oldValue <= minValue) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }

      count.find("input").val(newVal);
      count.find("input").trigger("change");
    });
  });
  /*---------------------
        Countdown
    --------------------- */

  $("[data-countdown]").each(function () {
    var $this = $(this),
        finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hours</p></span> <span class="cdown minutes">%M <p>Mins</p></span> <span class="cdown second">%S <p>Sec</p></span>'));
    });
  });
  /*--------------------------
      SscrollUp
    ---------------------------- */

  $.scrollUp({
    scrollName: "scrollUp",
    // Element ID
    scrollDistance: 400,
    // Distance from top/bottom before showing element (px)
    scrollFrom: "top",
    // 'top' or 'bottom'
    scrollSpeed: 800,
    // Speed back to top (ms)
    easingType: "linear",
    // Scroll to top easing (see http://easings.net/)
    animation: "fade",
    // Fade, slide, none
    animationSpeed: 400,
    // Animation speed (ms)
    scrollTrigger: false,
    // Set a custom triggering element. Can be an HTML string or jQuery object
    scrollTarget: false,
    // Set a custom target element for scrolling to. Can be element or number
    scrollText: '<i class="fas fa-arrow-up"></i>',
    // Text for element, can contain HTML
    scrollTitle: false,
    // Set a custom <a> title if required.
    scrollImg: false,
    // Set true to use image
    activeOverlay: false,
    // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex: 214 // Z-Index for the overlay

  });
  var pageURL = $(location).attr("href");
  var scrollUp = $("#scrollUp");

  if (document.URL.indexOf("index-2") >= 0) {
    scrollUp.addClass("theme2");
  }

  if (document.URL.indexOf("index-3") >= 0) {
    scrollUp.addClass("theme3");
  }

  if (document.URL.indexOf("index-4") >= 0) {
    scrollUp.addClass("theme4");
  }

  if (document.URL.indexOf("single-product") >= 0) {
    scrollUp.addClass("theme4");
  }

  if (document.URL.indexOf("single-product-configurable") >= 0) {
    scrollUp.addClass("theme4");
  }

  if (document.URL.indexOf("single-product-affiliate") >= 0) {
    scrollUp.addClass("theme4");
  }

  if (document.URL.indexOf("single-product-group") >= 0) {
    scrollUp.addClass("theme4");
  } else {
    scrollUp.addClass("theme-default");
  }
})(jQuery);