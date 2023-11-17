
var input = document.querySelector("#phone");
var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
window.addEventListener("load", function () {

  errorMsg = document.querySelector("#error-msg"),
    validMsg = document.querySelector("#valid-msg");
  var iti = window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js"
  });
  window.intlTelInput(input, {
    // allowDropdown: false,
    // autoHideDialCode: false,
    // autoPlaceholder: "off",
    // dropdownContainer: document.body,
    // excludeCountries: ["us"],
    // formatOnDisplay: false,
    geoIpLookup: function (callback) {
      $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
        var countryCode = (resp && resp.country) ? resp.country : "";
        callback(countryCode);
      });
    },
    // hiddenInput: "full_number",
    initialCountry: "auto",

    // localizedCountries: { 'de': 'Deutschland' },
    //nationalMode: false,
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    placeholderNumberType: "MOBILE",
    // preferredCountries: ['cn', 'jp'],
    // separateDialCode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js",
  });
  $(validMsg).addClass("hide");
  input.addEventListener('blur', function () {
    reset();
    if (input.value.trim()) {
      if (iti.isValidNumber()) {
        validMsg.classList.remove("hide");
      } else {
        input.classList.add("error");
        var errorCode = iti.getValidationError();
        errorMsg.innerHTML = errorMap[errorCode];
        errorMsg.classList.remove("hide");
      }
    }
  });

  input.addEventListener('change', reset);
  input.addEventListener('keyup', reset);
});


var reset = function () {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};
$(document).ready(function () {
  $("#phone").val("+1");
});






























$(".feedback-content-slider").slick({
  dots: !1,
  arrow: !0,
  infinite: !0,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: !1,
  autoplaySpeed: 2e3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        dots: !1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}),
  (function () {
    var e = new Date().getFullYear();
    new (function e(t, n) {
      var s,
        i = this;

      function l() {
        var e, t, o, r, c, p, u;
        (i.current =
          ((e = n.endDate.getTime()),
            (t = new Date().getTime()),
            (o = Math.abs(e - t) / 1e3),
            (r = Math.floor(o / 86400)),
            (c = Math.floor((o -= 86400 * r) / 3600) % 24),
            (p = Math.floor((o -= 3600 * c) / 60) % 60),
            (r = ((u = r), u < 10 ? "0" + u : u < 100 ? "" + u : "" + u)),
          {
            d: r + "",
            h: (c = a(c)) + "",
            m: (p = a(p)) + "",
          })),
          d(),
          clearTimeout(s),
          (s = setTimeout(l, 500));
      }

      function o() {
        clearTimeout(s);
      }

      function a(e) {
        return e < 10 ? "0" + e : "" + e;
      }

      function r(e, t) {
        var n = document.createElement("div");
        (n.className = "leaf _" + (t || "2") + "-digits"),
          n.setAttribute("data-label", e);
        var s = document.createElement("div"),
          l = document.createElement("span");
        (s.className = "top"), s.appendChild(l);
        var o = document.createElement("div"),
          a = document.createElement("span");
        (o.className = "leaf-front"), o.appendChild(a);
        var r = document.createElement("div"),
          d = document.createElement("span");
        (r.className = "leaf-back"), r.appendChild(d);
        var c = document.createElement("div"),
          p = document.createElement("span");
        return (
          (c.className = "bottom"),
          c.appendChild(p),
          n.appendChild(s),
          n.appendChild(o),
          n.appendChild(r),
          n.appendChild(c),
          i.el.appendChild(n),
          {
            el: n,
            topLabel: l,
            frontLabel: a,
            backLabel: d,
            bottomLabel: p,
          }
        );
      }

      function d() {
        c(i.daysLeaf, i.current.d),
          c(i.hoursLeaf, i.current.h),
          c(i.minutesLeaf, i.current.m);
      }

      function c(e, t) {
        !e.isFlipping &&
          t !== e.topLabel.innerText &&
          ((e.isFlipping = !0),
            (e.topLabel.innerText = t),
            (e.backLabel.innerText = t),
            e.el.classList.add("flip"),
            clearTimeout(e.timeout),
            (e.timeout = setTimeout(function () {
              (e.frontLabel.innerText = t),
                (e.bottomLabel.innerText = t),
                e.el.classList.remove("flip");
            }, 600)),
            clearTimeout(e.timeout2),
            (e.timeout2 = setTimeout(function () {
              e.isFlipping = !1;
            }, 1e3)));
      }
      return (
        (i.el = t),
        (i.config = Object.assign(
          {
            endDate: new Date(new Date().getFullYear(), 0, 0),
            labels: {
              days: "Days",
              hours: "Hours",
              minutes: "Minutes",
            },
          },
          n
        )),
        (i.current = {
          d: "00",
          h: "00",
          m: "00",
        }),
        (i.daysLeaf = r(i.config.labels.days, 2)),
        (i.hoursLeaf = r(i.config.labels.hours)),
        (i.minutesLeaf = r(i.config.labels.minutes)),
        d(),
        (i.observer = new IntersectionObserver(function (e, t) {
          e.forEach(function (e) {
            e.isIntersecting ? l() : o();
          });
        })),
        i.observer.observe(i.el),
        {
          start: l,
          stop: o,
          destroy: function e() {
            o(), i.observer.disconnect(), (i.el.innerHTML = "");
          },
          getCurrent: function () {
            return i.current;
          },
        }
      );
    })(document.getElementById("flipclock-1"), {
      endDate: new Date(e, 10, 27),
      labels: {
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
      },
    });
  })();


//***** Counter Timer JS Start Here *****//
$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend({
    start: 0,
    end: 100,
    easing: 'swing',
    duration: 400,
    complete: '',
    point_tag: 0
  }, options);

  var thisElement = $(this);

  $({ count: settings.start }).animate({ count: settings.end }, {
    duration: settings.duration,
    easing: settings.easing,
    point_tag: settings.point_tag,
    step: function () {

      if (settings.point_tag == 1) {

        var mathCount = parseFloat(this.count).toFixed(1);

      } else {

        var mathCount = Math.ceil(this.count);
      }
      thisElement.text(mathCount);

    },
    complete: settings.complete
  });
};

$('#number1').jQuerySimpleCounter({ end: parseFloat($('#number1').text()), duration: 2000, point_tag: 0 });
$('#number2').jQuerySimpleCounter({ end: parseInt($('#number2').text()), duration: 5000, point_tag: 0 });
$('#number3').jQuerySimpleCounter({ end: parseInt($('#number3').text()), duration: 3000, point_tag: 0 });
//***** Counter Timer JS End Here *****//
