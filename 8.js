(function() {
    (function t(loc, tit) {
        var _a = '8'
          , _b = 'https://kind-smoke-00160c203.azurestaticapps.net'
          , _c = '';
        var returnLFID = function(sw, sh, cid) {
            var lfID = null
              , key = "lfuuid="
              , date = new Date();
            function isValid(v) {
                return v && v.length > 20;
            }
            ;try {
                var ca = document.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == " ")
                        c = c.substring(1, c.length);
                    if (c.indexOf(key) == 0)
                        lfID = c.substring(key.length, c.length);
                }
            } catch (ex) {
                lfID = null;
            }
            if (!isValid(lfID) || lfID.length < 37) {
                try {
                    var cr = window.crypto || window.msCrypto;
                    lfID = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(c) {
                        return (c ^ cr.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
                    });
                } catch (ex) {
                    lfID = null;
                }
                if (!isValid(lfID)) {
                    try {
                        var d = date.getTime();
                        if (typeof performance !== "undefined" && typeof performance.now === "function") {
                            d += performance.now();
                        }
                        lfID = "f-" + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                            var r = (d + Math.random() * 16) % 16 | 0;
                            d = Math.floor(d / 16);
                            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
                        });
                    } catch (ex) {
                        lfID = null;
                    }
                }
                if (isValid(lfID)) {
                    try {
                        lfID += "-c" + cid + "-sw" + sw + "-sh" + sh + "-ms" + date.getTime() + "-r" + Math.floor(Math.random() * 9999999);
                        var e = new Date(date.getFullYear() + 10,1,1).toUTCString();
                        document.cookie = key + escape(lfID) + "; expires=" + e + ";samesite=lax;";
                    } catch (ex) {
                        lfID = null;
                    }
                }
            }
            return isValid(lfID) ? encodeURIComponent(lfID) : "NA";
        };
        var trk_sw = encodeURIComponent(screen.width).substring(0, 6);
        var trk_sh = encodeURIComponent(screen.height).substring(0, 6);
        var trk_ref = encodeURIComponent(document.referrer).substring(0, 1100);
        var trk_tit = tit || encodeURIComponent(document.title).substring(0, 200);
        var trk_loc = loc || encodeURIComponent(document.location).substring(0, 1000);
        var trk_agn = encodeURIComponent(navigator.appName).substring(0, 100);
        var trk_lng = window.navigator.userLanguage || window.navigator.language;
        var trk_agv = encodeURIComponent(navigator.userAgent + '.lfcd' + screen.colorDepth + '.lflng' + trk_lng).substring(0, 1000);
        var trk_dom = encodeURIComponent(document.domain).substring(0, 200);
        var trk_user = _a;
        var trk_cookie = '';
        var trk_uid = _c;
        var trk_img = _b + '';
        //var trk_img = _b + '/Track/Capture.aspx';
        var trk_link = trk_img + '?retType=js&trk_uid=' + trk_uid + '&trk_user=' + trk_user + '&trk_sw=' + trk_sw + '&trk_sh=' + trk_sh + '&trk_ref=' + trk_ref + '&trk_tit=' + trk_tit + '&trk_loc=' + trk_loc + '&trk_agn=' + trk_agn + '&trk_agv=' + trk_agv + '&trk_dom=' + trk_dom + '&trk_cookie=' + returnLFID(trk_sw, trk_sh, trk_user);
        var j = document.createElement('script');
        j.type = 'text/javascript';
        //j.src = trk_link;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(j, s);
        if (loc == null) {
            window.addEventListener("load", function() {
                var trk_anchors = document.getElementsByTagName('a');
                for (var i = 0, l = trk_anchors.length; i < l; i++) {
                    try {
                        var trk_ext = trk_anchors[i].getAttribute('href').substring(trk_anchors[i].getAttribute('href').lastIndexOf('.'), trk_anchors[i].getAttribute('href').length);
                        if ((/\.pdf/g).test(trk_ext) || (/\.doc/g).test(trk_ext) || (/\.docx/g).test(trk_ext) || (/\.xls/g).test(trk_ext) || (/\.xlsx/g).test(trk_ext) || (/\.ashx/g).test(trk_ext) || (/\.exe/g).test(trk_ext)) {
                            trk_anchors[i].addEventListener('mousedown', function() {
                                t(this.getAttribute('href'), 'Downloaded - ' + this.getAttribute('href'));
                            });
                        }
                    } catch (e) {}
                }
            });
        }
    }
    )();
}
)();
