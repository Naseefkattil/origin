$(".top ul li").click(function () {
  $(".top ul li.active").removeClass("active");
  $(this).addClass("active");
});

$(document).ready(function () {
  $("#products .bottom ul li .product-name .top small").click(function () {
    $("#products .bottom ul li table.active").removeClass("active");
    $(this).toggleClass("active");
  });
});


// pagination
let items = $(".article-loop");
var numItems = items.length;
var perPage = 8;

items.slice(perPage).hide();

$("#pagination-container").pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "Prev",
  nextText: "Next",
  onPageClick: function (pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  },
});



$(".main-slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  cssEase: 'ease-in-out',
  arrows: false,
  autoplaySpeed: 2000,
  prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-chevron-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-chevron-right"></i></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
 
  ],
});
$(".slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 2000,
  prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-chevron-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-chevron-right"></i></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".mission-slider").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});



