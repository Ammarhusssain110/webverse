
// flip clock start here//
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

// flip clock end here//

$('.testi-carousel').owlCarousel({
  loop:true,
  margin:10,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

// 

$(window).ready(function () {
  $.getJSON(" https://get.geojs.io/v1/ip/geo.json", function (data) {
    console.log(data.country_code);
    $("body")
      .find('[data-countrycode="' + data.country_code + '"]')
      .attr("selected", "true");
  });
});


