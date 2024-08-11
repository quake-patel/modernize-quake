$(document).ready(() => {
  function checkWidth() {
    if ($(window).width() <= 992) {
      $(".side-bar").addClass("offscreen");
      $(".dashboard").addClass("active");
    } else {
      $(".side-bar").removeClass("offscreen");
      $(".dashboard").removeClass("active");
    }
  }
  checkWidth();

  $(window).resize(checkWidth);

  $(".searchbtn").click((event) => {
    $(".search-area").toggleClass("active");
  });

  $(document).click((event) => {
    if (!$(event.target).closest(".search-area").length) {
      $(".search-area").removeClass("active");
    }
  });
  $(".sidebar-menu-item-inner").click(function () {
    if (!$(this).hasClass("active")) {
      $(".sidebar-menu-item-inner.active").each(function () {
        $(this).removeClass("active");
        $(this).parent(".sidebar-menu-item").find(".drop-down-list").slideUp();
        $(this)
          .parent(".sidebar-menu-item")
          .find(".drop-down-icon svg")
          .css("transform", "rotate(0deg)");
        $(this).css("background", "#ffffff");
        $(this).find(".sidebar-menu-item-text").css("color", "#5A6A85");
        $(this)
          .parent(".sidebar-menu-item")
          .find(".drop-down-list .flex.justify-between.active")
          .each(function () {
            $(this).removeClass("active");
            $(this).parent().find(".dropdown-inner").slideUp();
            $(this)
              .find(".inner-drop-down-icon svg")
              .css("transform", "rotate(0deg)");
          });
      });
    }

    $(this).toggleClass("active");
    $(this).parent(".sidebar-menu-item").find(".drop-down-list").slideToggle();
    if ($(this).hasClass("active")) {
      $(this)
        .parent(".sidebar-menu-item")
        .find(".drop-down-icon svg")
        .css("transform", "rotate(180deg)");
      $(this).css("background", "#5D87FF");
      $(this).find(".sidebar-menu-item-text").css("color", "#ffffff");
    } else {
      $(this)
        .parent(".sidebar-menu-item")
        .find(".drop-down-icon svg")
        .css("transform", "rotate(0deg)");
      $(this).css("background", "#ffffff");
      $(this).find(".sidebar-menu-item-text").css("color", "#5A6A85");
    }
  });
  $(".drop-down-list-item .flex.justify-between").click(function () {
    if (!$(this).hasClass("active")) {
      $(".drop-down-list-item .flex.justify-between.active").each(function () {
        $(this).removeClass("active");
        $(this).find(".dropdown-inner").slideUp();
        $(this)
          .find(".inner-drop-down-icon svg")
          .css("transform", "rotate(0deg)");
      });
    }

    $(this).toggleClass("active");
    $(this)
      .parent(".drop-down-list-item")
      .find(".dropdown-inner")
      .slideToggle();
    if ($(this).hasClass("active")) {
      $(this)
        .find(".inner-drop-down-icon svg")
        .css("transform", "rotate(180deg)");
    } else {
      $(this)
        .find(".inner-drop-down-icon svg")
        .css("transform", "rotate(0deg)");
    }
  });

  $(".menu-icon").click(() => {
    $(".header-logo").toggleClass("active");
    $(".side-bar").toggleClass("offscreen");
    $(".dashboard").toggleClass("active");
  });
  $(".close-btn").click(() => {
    $(".header-logo").toggleClass("active");
    $(".side-bar").toggleClass("offscreen");
    $(".dashboard").toggleClass("active");
  });
  //svg
  function svgjs() {
    jQuery("img").each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      jQuery.get(
        imgURL,
        function (data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find("svg");
          // Add replaced image's ID to the new SVG
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
          }
          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr("xmlns:a");
          // Check if the viewport is set, else we gonna set it if we can.
          if (
            !$svg.attr("viewBox") &&
            $svg.attr("height") &&
            $svg.attr("width")
          ) {
            $svg.attr(
              "viewBox",
              "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
            );
          }
          // Replace image with new SVG
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  }
  svgjs();
});
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $(".header-inner").addClass("scroll");
  } else {
    $(".header-inner").removeClass("scroll");
  }
});
