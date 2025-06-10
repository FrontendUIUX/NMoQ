$(document).ready(function() {
    $("button.info").click(function() {
        $(this).toggleClass("active");
        $(".informationContainer").fadeToggle();
    });
    $("button.startTour").click(function() {
  $(".informationContainer").fadeOut();
  $(".textZone").addClass("moveLeft");
  $(".videoCardOverlay button").fadeOut(500, function() {
    $(".videoContainer > video").fadeOut(300, function() {
      $(".videoContainer img.card-img-top.hidden").fadeIn(700).removeClass("hidden");
    });
    $(".videoContainer").addClass("moveToCenter");
    $(".videoCardOverlay .videoLoader").addClass("fadeUpLoading");
  });
function startLoading(callback) {
  var $percentage = $('.percentage');
  var progress = 0;
  var intervalId = setInterval(function() {
    if (progress < 100) {
      progress++;
      $percentage.text(progress + '%');
    } else {
      clearInterval(intervalId);
      if (callback) callback();
    }
  }, 30);
}

$(function() {
  // Start loading, then after loading completes wait 6s, then redirect
  startLoading(function() {
    setTimeout(function() {
      // Check current URL path
      var path = window.location.pathname.toLowerCase();

      if (path.includes("/ar/")) {
        window.location.href = "./Tour/vtour/ar/tour.html";
      } else {
        // default to English if "/en/" or nothing found
        window.location.href = "./Tour/vtour/en/tour.html";
      }
    }, 1500);
  });
});

});
    $(".search").click(function () {
    $(".open-search").addClass("active");
    $("body").css({ overflow: "hidden" });
    setTimeout(function () {
        $(".close-search").css({ display: "flex" });
    }, 400);
    $("#txtSearch").focus();
    });
    $(".menu-btn").click(function () {
    $(".menu").addClass("active");
    $(".links").addClass("animate");
    $("body").css({ overflow: "hidden" });
    $(".nav-item").addClass("reveal");

    setTimeout(function () {
        $(".close-btn").css({ display: "flex" });
    }, 400);
    });
    $(".close-btn").click(function () {
    if ($(".menu").is(".active")) {
    $(".menu").addClass("inactive");

    $(".menu").removeClass("active");
    }
    $(".links").removeClass("animate");
    $(".nav-item").removeClass("reveal");
    $(this).css({ display: "none" });
    $("body").css("overflow-y", "auto");
    $(".open-search").addClass("close-search");
    setTimeout(function () {
    $(".open-search").removeClass("active");
    $(".open-search").removeClass("close-search");
    }, 500);
    });
    function RedirectToEnglishArabic(){
    var portalUrl = window.location.href;
    if (portalUrl.indexOf("/ar/") > -1) {
    portalUrl = window.location.href.replace("/ar/","/en/");
    }
    else if(portalUrl.indexOf("/en/") > -1){
    portalUrl = window.location.href.replace("/en/","/ar/");
    }
    $("#langBtn").attr("href",portalUrl);
    $("#langBtn-ar").attr("href",portalUrl);
    }
    $("#langBtn").click(function() {
        RedirectToEnglishArabic();
    });
    $("#langBtn-ar").click(function() {
        RedirectToEnglishArabic();
    });
    $(function() {
    var $percentage = $('.percentage');
    var progress = 0;
    var intervalId;

    function startLoading() {
      intervalId = setInterval(function() {
        if (progress < 90) {
          progress++;
          $percentage.text(progress + '%');
        }
      }, 30);
    }

    $(window).on('load', function() {
      clearInterval(intervalId);
      progress = 100;
      $percentage.text('100%');

      // Optional: hide loader after loading completes
      // $('.videoLoader').fadeOut();
    });

    
  });
});
