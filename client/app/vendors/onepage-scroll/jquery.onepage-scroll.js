/* ===========================================================
 * jquery-onepage-scroll.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create an Apple-like website that let user scroll
 * one page at a time
 *
 * Credit: Eike Send for the awesome swipe event
 * https://github.com/peachananr/onepage-scroll
 *
 * ========================================================== */

"use strict";
! function ($) {
  var defaults = {
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    pagination: true,
    updateURL: false
  };

  /*------------------------------------------------*/
  /*  Credit: Eike Send for the awesome swipe event */
  /*------------------------------------------------*/

  $.fn.swipeEvents = function () {
    return this.each(function () {
      var startX,
        startY,
        $this = $(this);

      $this.bind('touchstart', touchstart);

      function touchstart(event) {
        var touches = event.originalEvent.touches;
        if (touches && touches.length) {
          startX = touches[0].pageX;
          startY = touches[0].pageY;
          $this.bind('touchmove', touchmove);
        }
        event.preventDefault();
      }

      function touchmove(event) {
        var touches = event.originalEvent.touches;
        if (touches && touches.length) {
          var deltaX = startX - touches[0].pageX;
          var deltaY = startY - touches[0].pageY;

          if (deltaX >= 50) {
            $this.trigger("swipeLeft");
          }
          if (deltaX <= -50) {
            $this.trigger("swipeRight");
          }
          if (deltaY >= 50) {
            $this.trigger("swipeUp");
          }
          if (deltaY <= -50) {
            $this.trigger("swipeDown");
          }
          if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
            $this.unbind('touchmove', touchmove);
          }
        }
        event.preventDefault();
      }
    });
  };


  $.fn.onepage_scroll = function (options) {
    var settings = $.extend({}, defaults, options),
      el = $(this),
      sections = $(settings.sectionContainer),
      total = sections.length,
      status = "off",
      topPos = 0,
      lastAnimation = 0,
      quietPeriod = 500,
      paginationList = "";

    $.fn.transformPage = function (settings, pos) {
      $(this).css({
        "-webkit-transform": "translate3d(0, " + pos + "%, 0)",
        "-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
        "-moz-transform": "translate3d(0, " + pos + "%, 0)",
        "-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
        "-ms-transform": "translate3d(0, " + pos + "%, 0)",
        "-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
        "transform": "translate3d(0, " + pos + "%, 0)",
        "transition": "all " + settings.animationTime + "ms " + settings.easing
      });
    }

    $.fn.moveDown = function () {
      var el = $(this);
      var index = $(settings.sectionContainer + ".active").data("index");
      if (index < total) {
        var current = $(settings.sectionContainer + "[data-index='" + index + "']");
        var next = $(settings.sectionContainer + "[data-index='" + (index + 1) + "']");
        if (next) {
          current.removeClass("active");
          next.addClass("active");
          if (settings.pagination == true) {
            $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
            $(".onepage-pagination li a" + "[data-index='" + (index + 1) + "']").addClass("active");
          }
          $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
          $("body").addClass("viewing-page-" + next.data("index"));

          if (history.replaceState && settings.updateURL == true) {
            var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index + 1);
            history.pushState({}, document.title, href);
          }
        }
        var pos = (index * 100) * -1;
        el.transformPage(settings, pos);
      }
    }

    $.fn.moveUp = function () {
      var el = $(this);
      var index = $(settings.sectionContainer + ".active").data("index");
      if (index <= total && index > 1) {
        var current = $(settings.sectionContainer + "[data-index='" + index + "']");
        var next = $(settings.sectionContainer + "[data-index='" + (index - 1) + "']");

        if (next) {
          current.removeClass("active");
          next.addClass("active");
          if (settings.pagination == true) {
            $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
            $(".onepage-pagination li a" + "[data-index='" + (index - 1) + "']").addClass("active");
          }
          $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
          $("body").addClass("viewing-page-" + next.data("index"))

          if (history.replaceState && settings.updateURL == true) {
            var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index - 1);
            history.pushState({}, document.title, href);
          }
        }
        var pos = ((next.data("index") - 1) * 100) * -1;
        el.transformPage(settings, pos);
      }
    }

    function initScroll(event, delta) {
      var deltaOfInterest = delta;
      var timeNow = new Date().getTime();
      // Cancel scroll if currently animating or within quiet period
      if (timeNow - lastAnimation < quietPeriod + settings.animationTime) {
        event.preventDefault();
        return;
      }

      if (deltaOfInterest < 0) {
        el.moveDown();
      } else {
        el.moveUp();
      }
      lastAnimation = timeNow;
    }

    // Prepare everything before binding wheel scroll

    el.addClass("onepage-wrapper").css("position", "relative");
    $.each(sections, function (i) {
      $(this).css({
        position: "absolute",
        top: topPos + "%"
      }).addClass("section").attr("data-index", i + 1);
      topPos = topPos + 100;
      if (settings.pagination == true) {
        paginationList += "<li><a data-index='" + (i + 1) + "' href='#" + (i + 1) + "'></a></li>"
      }
    });

    el.swipeEvents().bind("swipeDown", function () {
      el.moveUp();
    }).bind("swipeUp", function () {
      el.moveDown();
    });

    // Create Pagination and Display Them
    if (settings.pagination == true) {
      $("<ul class='onepage-pagination'>" + paginationList + "</ul>").prependTo("body");
      var posTop = (el.find(".onepage-pagination").height() / 2) * -1;
      el.find(".onepage-pagination").css("margin-top", posTop);
    }
    var next;
    var pos;
    if (window.location.hash != "" && window.location.hash != "#1") {
      var initIndex = window.location.hash.replace("#", "");
      $(settings.sectionContainer + "[data-index='" + initIndex + "']").addClass("active");
      $("body").addClass("viewing-page-" + initIndex);
      if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='" + initIndex + "']").addClass("active");

      next = $(settings.sectionContainer + "[data-index='" + (initIndex) + "']");
      if (next) {
        next.addClass("active");
        if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='" + (initIndex) + "']").addClass("active");
        $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
        $("body").addClass("viewing-page-" + next.data("index"));
        if (history.replaceState && settings.updateURL == true) {
          var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (initIndex);
          history.pushState({}, document.title, href);
        }
      }
      pos = ((initIndex - 1) * 100) * -1;
      el.transformPage(settings, pos);

    } else {
      $(settings.sectionContainer + "[data-index='1']").addClass("active");
      $("body").addClass("viewing-page-1");
      if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='1']").addClass("active");
    }
    if (settings.pagination == true) {
      $(".onepage-pagination li a").click(function () {
        var pageIndex = $(this).data("index");
        if (!$(this).hasClass("active")) {
          var current = $(settings.sectionContainer + ".active");
          next = $(settings.sectionContainer + "[data-index='" + (pageIndex) + "']");
          if (next) {
            current.removeClass("active");
            next.addClass("active")
            $(".onepage-pagination li a" + ".active").removeClass("active");
            $(".onepage-pagination li a" + "[data-index='" + (pageIndex) + "']").addClass("active");
            $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
            $("body").addClass("viewing-page-" + next.data("index"))
          }
          pos = ((pageIndex - 1) * 100) * -1;
          el.transformPage(settings, pos);
        }
        if (settings.updateURL == false) return false;
      });
    }



    $(document).bind('mousewheel DOMMouseScroll', function (event) {
      event.preventDefault();
      var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
      initScroll(event, delta);
    });
    return false;
  }


  $.fn.destroy_onepage_scroll = function (options) {
    var settings = $.extend({}, defaults, options);
    var el = $(this);
    var sections = $(settings.sectionContainer);

    $('html').css('overflow', '').css('height', '');
    $('body').css('overflow', '').css('height', '');

    el.removeClass("onepage-wrapper");
    $.each(sections, function (i) {
      //removeData('index') is necessary because in some situations (when dynamic change html) pagination breaks
      $(this).removeClass("ops-section active").removeAttr("data-index").removeData('index');
    });

    el.swipeEvents().unbind("swipeDown swipeUp touchstart touchmove");
    $("body").removeClass("disabled-onepage-scroll");
    $('.onepage-pagination li a').unbind('click');
    $('ul.onepage-pagination').remove();

    var classListOnBody = $('body').attr('class').split(/\s+/);
    $.each(classListOnBody, function (index, item) {
      if (item.indexOf('viewing-page-') >= 0) {
        $('body').removeClass(item);
      }
    });

    $(document).unbind('mousewheel DOMMouseScroll');
    $(window).unbind('resize');
    $(document).unbind('keydown');
  };

}(window.jQuery);
