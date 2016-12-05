/* ===========================================================
 * jquery-onepage-scroll.js v1.3.1
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
 * License: GPL v3
 *
 * ========================================================== */
"use strict";
! function ($) {

  var defaults = {
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    pagination: true,
    updateURL: false,
    keyboard: true,
    beforeMove: null,
    afterMove: null,
    loop: true,
    responsiveFallback: false,
    direction: 'vertical'
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
      }

    });
  };


  $.fn.onepage_scroll = function (options) {
    var settings = $.extend({}, defaults, options),
      el = $(this),
      sections = $(settings.sectionContainer, el),
      total = sections.length,
      status = "off",
      topPos = 0,
      leftPos = 0,
      lastAnimation = 0,
      quietPeriod = 500,
      paginationList = "";

    $.fn.transformPage = function (settings, pos, index) {
      if (typeof settings.beforeMove == 'function') settings.beforeMove(index);

      // Just a simple edit that makes use of modernizr to detect an IE8 browser and changes the transform method into
      // an top animate so IE8 users can also use this script.
      if ($('html').hasClass('ie8')) {
        var toppos;
        if (settings.direction == 'horizontal') {
          toppos = (el.width() / 100) * pos;
          $(this).animate({
            left: toppos + 'px'
          }, settings.animationTime);
        } else {
          toppos = (el.height() / 100) * pos;
          $(this).animate({
            top: toppos + 'px'
          }, settings.animationTime);
        }
      } else {
        $(this).css({
          "-webkit-transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
          "-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
          "-moz-transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
          "-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
          "-ms-transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
          "-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
          "transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
          "transition": "all " + settings.animationTime + "ms " + settings.easing
        });
      }
      $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
        if (typeof settings.afterMove == 'function') settings.afterMove(index);
      });
    };
    $.fn.moveDown = function () {
      var el = $(this);
      var index = $(settings.sectionContainer + ".active").data("index");
      var current = $(settings.sectionContainer + "[data-index='" + index + "']");
      var next = $(settings.sectionContainer + "[data-index='" + (index + 1) + "']");
      var pos;
      if (next.length < 1) {
        if (settings.loop == true) {
          pos = 0;
          next = $(settings.sectionContainer + "[data-index='1']");
        } else {
          return;
        }

      } else {
        pos = (index * 100) * -1;
      }
      if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
      current.removeClass("active");
      next.addClass("active");
      if (settings.pagination == true) {
        $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
        $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
      }

      $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
      $("body").addClass("viewing-page-" + next.data("index"));
      if (history.replaceState && settings.updateURL == true) {
        var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index + 1);
        history.pushState({}, document.title, href);
      }
      el.transformPage(settings, pos, next.data("index"));
    };
    $.fn.moveUp = function () {
      var el = $(this);
      var index = $(settings.sectionContainer + ".active").data("index");
      var current = $(settings.sectionContainer + "[data-index='" + index + "']");
      var next = $(settings.sectionContainer + "[data-index='" + (index - 1) + "']");
      var pos;
      if (next.length < 1) {
        if (settings.loop == true) {
          pos = ((total - 1) * 100) * -1;
          next = $(settings.sectionContainer + "[data-index='" + total + "']");
        } else {
          return;
        }
      } else {
        pos = ((next.data("index") - 1) * 100) * -1;
      }
      if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
      current.removeClass("active");
      next.addClass("active");
      if (settings.pagination == true) {
        $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
        $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
      }
      $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
      $("body").addClass("viewing-page-" + next.data("index"));
      if (history.replaceState && settings.updateURL == true) {
        var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index - 1);
        history.pushState({}, document.title, href);
      }
      el.transformPage(settings, pos, next.data("index"));
    };
    $.fn.moveTo = function (pageIndex) {
      var current = $(settings.sectionContainer + ".active");
      var next = $(settings.sectionContainer + "[data-index='" + (pageIndex) + "']");
      if (next.length > 0) {
        if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
        current.removeClass("active");
        next.addClass("active");
        $(".onepage-pagination li a" + ".active").removeClass("active");
        $(".onepage-pagination li a" + "[data-index='" + (pageIndex) + "']").addClass("active");
        $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
        $("body").addClass("viewing-page-" + next.data("index"));
        var pos = ((pageIndex - 1) * 100) * -1;

        if (history.replaceState && settings.updateURL == true) {
          var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (pageIndex - 1);
          history.pushState({}, document.title, href);
        }
        el.transformPage(settings, pos, pageIndex);
      }
    };

    function responsive() {
      //start modification
      var valForTest = false;
      var typeOfRf = typeof settings.responsiveFallback;
      if (typeOfRf == "number") {
        valForTest = $(window).width() < settings.responsiveFallback;
      }
      if (typeOfRf == "boolean") {
        valForTest = settings.responsiveFallback;
      }
      if (typeOfRf == "function") {
        var valFunction = settings.responsiveFallback();
        valForTest = valFunction;
        var typeOFv = typeof valForTest;
        if (typeOFv == "number") {
          valForTest = $(window).width() < valFunction;
        }
      }

      //end modification
      if (valForTest) {
        $("body").addClass("disabled-onepage-scroll");
        $(document).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');
        el.swipeEvents().unbind("swipeDown swipeUp");
      } else {
        if ($("body").hasClass("disabled-onepage-scroll")) {
          $("body").removeClass("disabled-onepage-scroll");
          $("html, body, .wrapper").animate({
            scrollTop: 0
          }, "fast");
        }


        el.swipeEvents().bind("swipeDown", function (event) {
          if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
          el.moveUp();
        }).bind("swipeUp", function (event) {
          if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
          el.moveDown();
        });

        $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (event) {
          event.preventDefault();
          var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
          initScroll(event, delta);
        });
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


      $(this).css({
        position: "absolute",
        left: (settings.direction == 'horizontal') ?
          leftPos + "%" : 0,
        top: (settings.direction == 'vertical' || settings.direction != 'horizontal') ?
          topPos + "%" : 0
      });

      if (settings.direction == 'horizontal')
        leftPos = leftPos + 100;
      else
        topPos = topPos + 100;


      if (settings.pagination == true) {
        paginationList += "<li><a data-index='" + (i + 1) + "' href='#" + (i + 1) + "'></a></li>";
      }
    });

    el.swipeEvents().bind("swipeDown", function (event) {
      if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
      el.moveUp();
    }).bind("swipeUp", function (event) {
      if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
      el.moveDown();
    });

    // Create Pagination and Display Them
    if (settings.pagination == true) {
      if ($('ul.onepage-pagination').length < 1) $("<ul class='onepage-pagination'></ul>").prependTo("body");

      if (settings.direction == 'horizontal') {
        var posLeft = (el.find(".onepage-pagination").width() / 2) * -1;
        el.find(".onepage-pagination").css("margin-left", posLeft);
      } else {
        var posTop = (el.find(".onepage-pagination").height() / 2) * -1;
        el.find(".onepage-pagination").css("margin-top", posTop);
      }
      $('ul.onepage-pagination').html(paginationList);
    }

    if (window.location.hash != "" && window.location.hash != "#1") {
      var initIndex = window.location.hash.replace("#", "");
      if (parseInt(initIndex) <= total && parseInt(initIndex) > 0) {
        $(settings.sectionContainer + "[data-index='" + initIndex + "']").addClass("active");
        $("body").addClass("viewing-page-" + initIndex);
        if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='" + initIndex + "']").addClass("active");

        var next = $(settings.sectionContainer + "[data-index='" + (initIndex) + "']");
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
        var pos = ((initIndex - 1) * 100) * -1;
        el.transformPage(settings, pos, initIndex);
      } else {
        $(settings.sectionContainer + "[data-index='1']").addClass("active");
        $("body").addClass("viewing-page-1");
        if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='1']").addClass("active");
      }
    } else {
      $(settings.sectionContainer + "[data-index='1']").addClass("active");
      $("body").addClass("viewing-page-1");
      if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='1']").addClass("active");
    }

    if (settings.pagination == true) {
      $(".onepage-pagination li a").click(function () {
        var page_index = $(this).data("index");
        el.moveTo(page_index);
      });
    }


    $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (event) {
      event.preventDefault();
      var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
      if (!$("body").hasClass("disabled-onepage-scroll")) initScroll(event, delta);
    });


    if (settings.responsiveFallback != false) {
      $(window).resize(function () {
        responsive();
      });

      responsive();
    }

    if (settings.keyboard == true) {
      $(document).keydown(function (e) {
        var tag = e.target.tagName.toLowerCase();

        if (!$("body").hasClass("disabled-onepage-scroll")) {
          switch (e.which) {
            case 38:
              if (tag != 'input' && tag != 'textarea') el.moveUp();
              break;
            case 40:
              if (tag != 'input' && tag != 'textarea') el.moveDown();
              break;
            case 32: //spacebar
              if (tag != 'input' && tag != 'textarea') el.moveDown();
              break;
            case 33: //pageg up
              if (tag != 'input' && tag != 'textarea') el.moveUp();
              break;
            case 34: //page dwn
              if (tag != 'input' && tag != 'textarea') el.moveDown();
              break;
            case 36: //home
              el.moveTo(1);
              break;
            case 35: //end
              el.moveTo(total);
              break;
            default:
              return;
          }
        }

      });
    }
    return false;
  };
  $.fn.destroy_onepage_scroll = function (options) {
    var settings = $.extend({}, defaults, options);
    var el = $(this);
    var sections = $(settings.sectionContainer, el);

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
