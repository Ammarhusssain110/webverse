<?php include 'includes/section/modal.php';?>



<!-- live chat start here -->


<script async>
var dtm = window.parent.document.createElement('script');
dtm.type = "text/javascript";
dtm.id = 'ze-snippet';
dtm.src = 'https://static.zdassets.com/ekr/snippet.js?key=b60ac5c2-a354-4898-a0c3-c29fab50d091';
var d = window.parent.document.getElementsByTagName('head')[0];
d.appendChild(dtm);
var dtmf = window.parent.document.createElement('script');
dtmf.type = "text/javascript";
dtmf.id = '_adobe_dtm_script_footer_tag';
dtmf.text = '_satellite.pageBottom();';
var bd = window.parent.document.getElementsByTagName('body')[0];
bd.appendChild(dtmf);

window.onload = function() {
    setTimeout(function() {
        setButtonURL();
    }, 3000);
};

function setButtonURL() {
    $zopim.livechat.window.show();
}

function setButtonURL() {
    $zopim.livechat.window.toggle();
}

window.$zopim || function(a, d) {
        var b = $zopim = function(a) {
                b._.push(a)
            },
            c = b.s = a.createElement(d);
        a = a.getElementsByTagName(d)[0];
        b.set = function(a) {
            b.set._.push(a)
        };
        b._ = [];
        b.set._ = [];
        c.async = !0;
        c.setAttribute("charset", "utf-8");
        c.src = "";
        b.t = +new Date;
        c.type = "text/javascript";
        a.parentNode.insertBefore(c, a)
    }
    (document, "script");

$zopim(function() {
    function a(a) {
        1 <= a && $zopim.livechat.window.show()
    }
    $zopim.livechat.setOnUnreadMsgs(a)
});
</script>
<!-- live chat end here -->
<!-- Recaptcha Start -->
<script src="https://www.google.com/recaptcha/api.js?onload=CaptchaCallback" async defer></script>
<script>
$(document).on('click', '#bannerFormSubmit', function(e) {
    e.preventDefault();
    var parent = $(this).closest('form');
    console.log(grecaptcha.getResponse(parent.find('.sbx-g-recaptcha').attr('data-widget-id')));
    if (grecaptcha.getResponse(parent.find('.sbx-g-recaptcha').attr('data-widget-id')) == "") {
        e.preventDefault();
        parent.find('.captcha_validation').css('display', 'block');
    } else {
        $('.captcha_validation').css('display', 'none');
        parent.submit();
        return true;
    }
});

function CaptchaCallback() {
    jQuery('.sbx-g-recaptcha').each(function(index, el) {
        var widgetId = grecaptcha.render(el, {
            'sitekey': '6LfMuRUpAAAAAKonRGbr8xQXzKCwMQFMOxfe0oFF'
        });
        jQuery(this).attr('data-widget-id', widgetId);
    });
};
</script>
<!-- Recaptcha End -->



<script src="assets/js/jquery-3.7.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/custom.js"></script>
</body>

</html>