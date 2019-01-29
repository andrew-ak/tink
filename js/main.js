function CustomEvent(e, t) {
    t = t || {
        bubbles: !1,
        cancelable: !1,
        detail: void 0
    };
    var i = document.createEvent("CustomEvent");
    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
}

function triggerDTMEvent(e) {
    var t = new window.CustomEvent(e);
    document.body.dispatchEvent(t)
}
var SP = SP || {};
SP.env = {
    links: {
        api: "https://api.tinkoff.ru/v1/"
    }
}, "function" != typeof window.CustomEvent && (CustomEvent.prototype = window.Event.prototype, window.CustomEvent = CustomEvent);
var SP = SP || {};
! function(e) {
    var t = {
        extractDomain: function(e) {
            var t;
            return t = e.indexOf("://") > -1 ? e.split("/")[2] : e.split("/")[0], t = t.split(":")[0]
        },
        checkResponse: function(e, t) {
            "use strict";
            if (e && e.resultCode && "ok" === e.resultCode.toLowerCase() && e.payload) {
                if (t && t.length > 0) {
                    for (var i = 0; t[i] in e.payload;) i++;
                    return i === t.length
                }
                return !0
            }
            return !1
        },
        returnFirstSecondLevelDomain: function() {
            var e = document.location.hostname.split(".");
            return e.splice(0, e.length - 2), e.join(".")
        },
        getUniqueIDByGA: function() {
            var e, t = $.cookie("__utma");
            return t && "string" == typeof t && (e = t.split("."), e.length > 2) ? e[1] : null
        },
        getParameterByName: function(e, t) {
            var i = t || window.location.search,
                o = new RegExp("[?&#]" + e + "=([^&]*)").exec(i);
            return o && decodeURIComponent(o[1].replace(/\+/g, " "))
        },
        getServiceURL: function(t) {
            "use strict";
            if (!t) throw new Error("Specify URL");
            var i = e.env.links.api,
                o = e.utils.stripSlashes(t),
                n = "";
            return "/" !== o.substr(o.length - 1) && (o.indexOf("?") === -1 ? o += "/" : o = e.utils.stripSlashes(o.substring(0, o.indexOf("?"))) + "/" + o.substring(o.indexOf("?")), o.indexOf("http:") !== -1 && (o += "/")), n = i + o
        },
        stripSlashes: function(e) {
            "use strict";
            return e.replace(/^\//, "").replace(/\/$/, "")
        },
        checkMobile: function() {
            var e = !1;
            return function(t) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), e
        },
        checkTabletAndMobile: function() {
            var e = !1;
            return function(t) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), e
        },
        getDeviceType: function() {
            t.checkMobile() ? e.deviceType = "mobile" : t.checkTabletAndMobile() ? e.deviceType = "tablet" : e.deviceType = "desktop", $("body").addClass(e.deviceType)
        },
        getCurrentOrientation: function() {
            if ("number" == typeof window.orientation) {
                if (90 === window.orientation || window.orientation === -90) return "landscape";
                if (0 === window.orientation || 180 === window.orientation) return "portrait"
            }
            return e.utils.isIe() ? $(document).width() >= $(document).height() ? "landscape" : "portrait" : screen.availWidth >= screen.availHeight ? "landscape" : "portrait"
        },
        openWindow: function(e, t) {
            var i, o, t = t || {},
                n = {
                    title: t.title || "",
                    width: t.width || 575,
                    height: t.height || 400
                };
            $.extend(n, {
                left: ($(window).width() - n.width) / 2,
                top: ($(window).height() - n.height) / 2
            }), i = "status=1,width=" + n.width + ",height=" + n.height + ",top=" + n.top + ",left=" + n.left, o = window.open("", n.title, i), o.location.href = e
        },
        maskMobile: function(e, t) {
            for (var i, o, n, a = {
                    9: {
                        pattern: /\d/
                    },
                    S: {
                        pattern: /\d|\//
                    },
                    s: {
                        pattern: /\//
                    },
                    "*": {
                        pattern: /\d|\*|\×/
                    },
                    $: {
                        pattern: /\w/
                    },
                    "@": {
                        pattern: /7/
                    },
                    "%": {
                        pattern: /8/
                    },
                    H: {
                        pattern: /[\dа-яёА-ЯЁ]/
                    },
                    D: {
                        pattern: /[a-zA-ZА-Яа-я\\-\\-\\sёЁ ]/
                    }
                }, r = "", s = "", c = t.length, l = _.isUndefined(e) ? 0 : e.length, u = 0, d = 0; u < c && d < c;) o = d < l && e[d] || "", n = t[u], i = a[n], i ? o.match(i.pattern) ? (r += o, s += o, u++, d++) : i.defaults ? (r += i.defaults, u++, d++) : d++ : (r += n, u++, o === n && d++);
            return {
                maskedValue: r.slice(0, r.length),
                unmaskedValue: s,
                maskStep: u,
                valueStep: d
            }
        },
        forEach: function(e, t) {
            for (var i = 0; i < e.length; i++) t(e[i])
        },
        cleanInputs: function() {
            this.forEach(document.querySelectorAll("input"), function(e) {
                e.value = ""
            })
        }
    };
    e.utils = t
}(SP), $(function() {
        "use strict";
        var e = SP || {},
            t = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "wm", "sid"],
            i = e.utils.getParameterByName("utm_source"),
            o = e.utils.getParameterByName("dsp_click_id"),
            n = e.utils.getParameterByName("source"),
            a = e.utils.getParameterByName("position"),
            r = e.utils.getParameterByName("block"),
            s = document.referrer;
        if (i) {
            if ($.each(t, function(t, i) {
                    var o = e.utils.getParameterByName(i);
                    $.cookie(o);
                    o ? $.cookie(i, o, {
                        domain: ".tinkoff.ru"
                    }) : $.cookie(i, "", {
                        expires: -1
                    })
                }), n)
                if ($.cookie("ctx_source", n, {
                        domain: ".tinkoff.ru"
                    }), /^\d+(0|s|t)\d+$/.test(a)) {
                    var c = a.split("1t1".match(/^\d+(0|s|t)\d+$/)[1]);
                    $.cookie("ctx_block", c[0], {
                        domain: ".tinkoff.ru"
                    }), $.cookie("ctx_position", c[1], {
                        domain: ".tinkoff.ru"
                    })
                } else $.cookie("ctx_block", r, {
                    domain: ".tinkoff.ru"
                }), $.cookie("ctx_position", a, {
                    domain: ".tinkoff.ru"
                });
            o ? $.cookie("dsp_click_id", o, {
                domain: ".tinkoff.ru"
            }) : $.cookie("dsp_click_id") || $.cookie("dsp_click_id", "no dsp_click_id", {
                domain: ".tinkoff.ru"
            })
        } else $.cookie("utm_source") || (/(yandex|google|go.mail|rambler)/.test(s) ? $.cookie("utm_source", e.utils.extractDomain(s), {
            domain: ".tinkoff.ru"
        }) : /tinkoff.ru/.test(s) || $.cookie("utm_source", s, {
            domain: ".tinkoff.ru"
        }));
        $.getJSON("", function(e) {
            $.cookie("dmp_id", e.dmp_id, {
                domain: ".tinkoff.ru"
            })
        }), SP.identify.init(!1)
    }), $(function() {
        if ($browser = $.browser, oldBrowser = $browser.msie && $browser.versionNumber <= 8 || $browser.chrome && $browser.versionNumber <= 35 || $browser.mozilla && $browser.versionNumber <= 24 || $browser.safari && $browser.versionNumber <= 5 || $browser.opera && $browser.versionNumber <= 12 || !1, oldBrowser && !$.browser.mobile) {
            var e = $(".js-browser-popup"),
                t = e.find(".js-browser-popup-close"),
                i = "old-browser-popup_state_active";
            e.addClass(i), t.on("click", function() {
                e.removeClass(i)
            })
        }
    }), $(function() {
        function e() {
            $(".banner__scroll-arrow").addClass("banner__scroll-arrow_hidden")
        }

        function t() {
            $(".banner__button").addClass("banner__button_shown")
        }
        $(".js-scroll-to-next-screen").on("click", function() {
            $(document.body).animate({
                scrollTop: 500
            }, 700)
        }), $(window).on("scroll", function() {
            t(), e()
        })
    }), $(function() {
        $(".js-scroll-to-form").on("click", function(e) {
            e.preventDefault(), $("html, body").stop().animate({
                scrollTop: $("#form").offset().top
            }, 900, "swing")
        })
    }), $(function() {
        function e(e) {
            return e.replace(/-|_|\s|\(|\)/g, "")
        }
        var t, i = SP || {},
            o = $(".js-form__container"),
            n = o.find(".ui-form"),
            a = n.find(".ui-input"),
            r = n.find(".ui-input__field"),
            s = n.find(".ui-checkbox"),
            c = n.find(".app-form-step-component-rules-checkbox-title .ui-link"),
            l = $(".form").find(".app-form-rules-container"),
            u = l.find(".app-form-rules-close-button"),
            d = $("input"),
            m = d.filter('[name="phonenumber"]'),
            p = d.filter('[name="birthdate"]'),
            f = d.filter('[name="email"]'),
            g = d.filter('[name="firstname"]'),
            h = d.filter('[name="lastname"]'),
            v = (d.filter('[name="foreigner"]'), d.filter('[name="country"]')),
            w = d.filter('[name="regionid"]'),
            b = d.filter('[name="region"]'),
            k = d.filter('[name="middlename"]'),
            y = {
                focused: "ui-input_focused",
                changed: "ui-input_changed",
                checked: "ui-checkbox_checked",
                error: "ui-input_error"
            },
            _ = {
                phone: "+7 (999) 999-99-99",
                birthDate: "99.99.9999"
            },
            x = "hidden",
            C = {
                highlight: function(e, t, i) {
                    var o = $(t),
                        n = o.closest(".ui-input");
                    if (o.toggleClass(y.error, e), n.toggleClass(y.error, e), o.is('[name="agreement"]')) {
                        var a = o.closest(".ui-checkbox-directive").find(".ui-checkbox");
                        a.toggleClass("ui-checkbox_error", e)
                    }
                },
                inputToggle: function(e, t, i) {
                    var o = e.closest(".ui-form__row"),
                        n = e.closest(".ui-input"),
                        i = i || !t;
                    e.val(""), n.removeClass(y.changed + " " + y.error), o.toggleClass(x, !t).attr(x, i)
                }
            },
            P = {
                showSuccess: function() {
                    var e = "form__content",
                        t = "form__form-success-wrapper",
                        i = $("." + e),
                        o = $("." + t),
                        n = "_hidden";
                    i.addClass(e + n), o.removeClass(t + n)
                }
            },
            S = ["Украина", "Беларусь", "Таджикистан", "Казахстан", "Не выбрано"],
            z = {},
            q = [],
            N = !1,
            T = !1;
        c.add(u).click(function(e) {
            e.preventDefault(), e.stopPropagation(), l.toggleClass(x), n.toggleClass(x), o.toggleClass("ui-form__container_separator")
        }), m.on("keyup focus", function(e) {
            if (8 != e.keyCode && 39 != e.keyCode && 37 != e.keyCode) {
                var t = $(this).val(),
                    o = i.utils.maskMobile(t, _.phone);
                $(this).val(o.maskedValue).change()
            }
        }), p.mask(_.birthDate, {
            autoclear: !1
        }), r.on({
            focus: function() {
                $(this).closest(a).addClass(y.focused)
            },
            blur: function() {
                var e = $(this);
                e.closest(a).removeClass(y.focused), e.val() || e.closest(a).removeClass(y.changed)
            },
            change: function() {
                $(this).closest(a).addClass(y.changed)
            },
            input: function() {
                var e = $(this);
                e.is("[name=region]") && C.inputToggle(k, e.val().trim())
            }
        }), s.on("click", function(e) {
            var t = $(this),
                i = t.closest(".ui-checkbox-directive").find("input"),
                o = i.is(":checked");
            t.toggleClass(y.checked), i.is("[name=isforeigner]") && (C.inputToggle(b, o), C.inputToggle(k, o, !0), C.inputToggle(v, !o))
        }), n.validate({
            rules: {
                lastname: {
                    required: !0,
                    validName: !0
                },
                firstname: {
                    required: !0,
                    validName: !0
                },
                region: {
                    required: !0,
                    validPlace: !0
                },
                regionid: {
                    required: !1,
                    validPlace: !0
                },
                middlename: {
                    required: !0,
                    validPlace: !0
                },
                country: {
                    required: !0,
                    validPlace: !0
                },
                phonenumber: {
                    required: !0,
                    minlength: 12,
                    onkeyup: !1,
                    validPhone: {
                        value: function() {
                            return t = e(m.val())
                        }
                    },
                    ruPhonePrefix: {
                        value: function() {
                            return t = e(m.val())
                        }
                    }
                },
                email: {
                    email: !0,
                    required: !0
                },
                birthdate: {
                    required: !0,
                    dateParse: !0
                },
                agreement: {
                    required: !0,
                    maxlength: 2
                }
            },
            messages: {
                country: {
                    required: "Выберите страну проживания"
                },
                birthdate: {
                    dateParse: "Укажите верную дату рождения"
                },
                agreement: {
                    required: "Вам необходимо дать согласие Банку на обработку персональных данных"
                }
            },
            errorClass: y.error,
            highlight: C.highlight.bind(C, !0),
            unhighlight: C.highlight.bind(C, !1),
            errorPlacement: function(e, t) {
                var i = t.closest(".ui-input");
                if (t.is('[name="agreement"]')) {
                    var o = t.closest(".ui-checkbox-directive").find(".ui-checkbox");
                    o.addClass("ui-checkbox_error")
                }
                i.addClass(y.error), i.find(".ui-hint__tooltip-text").append(e)
            },
            submitHandler: function(e) {
                var o, n = "",
                    a = "office_work",
                    r = $("#isforeigner").is(":checked"),
                    s = p.val().split(".");
                triggerDTMEvent("formSubmit"), o = {
                    birthdate: s[2] + "-" + s[1] + "-" + s[0],
                    email: f.val(),
                    firstname: g.val(),
                    lastname: h.val(),
                    phonenumber: t,
                    isforeigner: r,
                    siteid: a,
                    utmSource: i.utils.getParameterByName("utm_source") || "",
                    utmContent: i.utils.getParameterByName("utm_content") || "",
                    utmMedium: i.utils.getParameterByName("utm_medium") || "",
                    utmCampaign: i.utils.getParameterByName("utm_campaign") || ""
                }, r ? o.middleName = v.val() : (o.middleName = k.val(), o.regionid = w.val()), jQuery.support.cors = !0, $.ajax({
                    url: n + "rest/candidates",
                    type: "POST",
                    data: o
                }), P.showSuccess()
            },
            onkeyup: !1
        }), b.autocomplete({
            minLength: 0,
            source: function(e, t) {
                var o = i.utils.getServiceURL("regions"),
                    n = {
                        feature: "isRegion"
                    };
                $.extend(n, e.term ? {
                    query: e.term
                } : {}), $.getJSON(o, n).done(function(e) {
                    var i;
                    e.payload.length && (i = e.payload.map(function(e) {
                        return z[e.name] = e.id, {
                            value: e.name
                        }
                    })), t(i)
                })
            },
            select: function(e, t) {
                if (N = z[t.item.value], w.val(N), b.parents(".ui-input").addClass(y.changed), N) {
                    var o = i.utils.getServiceURL("addresses"),
                        n = {
                            region: N,
                            get_by: "parent"
                        };
                    if ($.getJSON(o, n).done(function(e) {
                            e.payload.regions[0].areas.length && (q = e.payload.regions[0].areas.map(function(e, t) {
                                var i = [];
                                return i[t] = e.name
                            })), k.autocomplete({
                                source: q,
                                minLength: 0,
                                select: function(e, t) {
                                    k.parents(".ui-input").addClass(y.changed)
                                }
                            }).click(function() {
                                $(this).autocomplete("search", "")
                            }), k.autocomplete("enable")
                        }), T === !1) return C.inputToggle(k, !0), void(T = N);
                    T !== N && C.inputToggle(k, !0), T = N
                }
            },
            change: function(e, t) {
                null === t.item && k.autocomplete("disable")
            }
        }).click(function() {
            $(this).autocomplete("search", "")
        }), v.autocomplete({
            source: S,
            minLength: 0,
            select: function(e, t) {
                v.parents(".ui-input").addClass(y.changed)
            }
        }).click(function() {
            $(this).autocomplete("search", "")
        }), i.utils.cleanInputs()
    }), $(function() {
        $(".js-slick").slick({
            infinite: !0,
            fade: !0,
            swipe: !0,
            responsive: [{
                breakpoint: 1e3,
                settings: {
                    arrows: !1,
                    dots: !0,
                    swipe: !0,
                    adaptiveHeight: !0
                }
            }]
        })
    }), $(function() {
        $(".js-footer-online-call").on("click", function(e) {
            var t = this.href || "",
                i = {
                    width: 380,
                    height: 390
                },
                o = window.open("", "_blank", "resizable=0,toolbar=0,titlebar=no,scrollbars=0,width=" + i.width + ",height=" + i.height + ",top=" + (window.screen.availHeight / 2 - i.height / 2) + ",left=" + (window.screen.availWidth / 2 - i.width / 2));
            o.document.write('<style>html,body{margin: 0;padding: 0;overflow: hidden;height: 100%;}</style><iframe src="' + t + '" width="380px" height="390px" frameBorder="0"></iframe>'), e.stopPropagation(), e.preventDefault()
        })
    }),
    function(e, t) {
        "use strict";
        e.extend(e.validator.messages, {
            required: "Поле обязательное",
            email: "Неверный формат email",
            ruPhonePrefix: "Код города/оператора должен начинаться с цифры 3, 4, 5, 6, 8, 9",
            validPhone: "Неверный формат номера телефона",
            validName: "Допустимо использовать только буквы русского алфавита или латинского алфавита и дефис",
            validPlace: "Допустимо использовать только буквы русского алфавита и цифры",
            max: e.validator.format("Введите значение, меньшее или равное {0}")
        }), e.validator.addMethod("dateParse", function(e, i) {
            return this.optional(i) || null !== t.parse(e) && /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d$/i.test(e)
        }, "Укажите верную дату"), e.validator.addMethod("validName", function(e, t) {
            return this.optional(t) || /^[а-яА-ЯЁё\s\-]+$/i.test(e)
        }), e.validator.addMethod("validPlace", function(e, t) {
            return this.optional(t) || /^[а-яА-ЯЁё\s\-.]+$/i.test(e)
        }), e.validator.addMethod("validPhone", function(e, t, i) {
            return this.optional(t) || /^.{12,}/.test(i.value())
        }), e.validator.addMethod("ruPhonePrefix", function(e, t, i) {
            return this.optional(t) || /^[78]{0,1}[345689]/.test(i.value().replace(/[^\d]+/g, ""))
        })
    }(jQuery, Date);
var SP = SP || {};
! function(e, t) {
    "use strict";
    t.permaCookie = function(i, o) {
        var n = {
            methods: ["cookie", "localstorage"],
            prefix: "__P__",
            initialize: {},
            set: function(e, t) {
                var i, o;
                for (i = 0; i < this.methods.length; i++) o = "set_" + this.methods[i], this.initialize[this.methods[i]] = this[o](this.prefix + e, t);
                return this.isInitializeSuccess()
            },
            isInitializeSuccess: function() {
                var e, t = !1;
                for (e in this.initialize) this.initialize.hasOwnProperty(e) && (t = t || this.initialize[e]);
                return t
            },
            set_cookie: function(i, o) {
                var n = 3650;
                return t.cookie(i, o, {
                    path: "/",
                    expires: n,
                    domain: "." + e.utils.returnFirstSecondLevelDomain()
                }), t.cookie(i) == o
            },
            set_localstorage: function(e, t) {
                try {
                    return !!window.localStorage && (t ? localStorage.setItem(e, t) : localStorage.removeItem(e), localStorage.getItem(e) == t)
                } catch (i) {
                    return !1
                }
            },
            get: function(e) {
                var t, i, o, n = this.methods;
                for (t = 0; t < n.length; t++)
                    if (i = "get_" + n[t], o = this[i](this.prefix + e)) {
                        this.set(e, o);
                        break
                    }
                return o
            },
            get_cookie: function(e) {
                return t.cookie(e) || null
            },
            get_localstorage: function(e) {
                try {
                    return window.localStorage ? localStorage.getItem(e) || null : null
                } catch (t) {
                    return null
                }
            }
        };
        return i && "undefined" != typeof o ? n.set(i, o) : i ? n.get(i) : void 0
    }
}(SP, jQuery);
var SP = SP || {};
! function(e, t, i) {
    "use strict";
    var o = i(document);
    e.identify = e.identify || {
        dataIsTooOld: function(e) {
            return !e || (new Date).getTime() - e > 864e5
        },
        getUTMA: function() {
            return e.utils.getUniqueIDByGA()
        },
        sendData: function(t) {
            var o = e.utils.getServiceURL("webuser");
            return t === Object(t) ? i.getJSON(o, t) : i.getJSON(o)
        },
        set: function(e, t) {
            i.permaCookie("wuid", e), i.permaCookie("wuid_last_call_time", (new Date).getTime()), i.permaCookie("wuid_auth", t)
        },
        init: function(t) {
            var n = this,
                a = this.getUTMA(),
                r = i.permaCookie("wuid"),
                s = {},
                c = !("string" == typeof r && 32 === r.length),
                l = this.dataIsTooOld(i.permaCookie("wuid_last_call_time")),
                u = t && "true" != i.permaCookie("wuid_auth");
            return c || l || u ? (a && (s.ga_utma = a), r && (s.wuid = r), void n.sendData(s).done(function(i) {
                return e.utils.checkResponse(i, ["wuid"]) ? (n.set(i.payload.wuid, t), void o.trigger("WUID-Ready")) : void o.trigger("WUID-Fail")
            }).fail(function() {
                o.trigger("WUID-Fail")
            })) : void o.trigger("WUID-Ready")
        }
    }
}(SP, window, jQuery);
var date = new Date,
    currentYear = date.getFullYear();
window.addEventListener("load", function() {
    document.getElementById("currentYear").innerHTML = currentYear
});
