const commonMethods = {
    queryString: function (name) {
        var query = window.location.search;
        if (query) {
            var items = query.substr(1).split('&'),
                len = items.length;
            for (var i = 0; i < len; i++) {
                var item = items[i].split('='),
                    key = item[0],
                    val = item[1];
                if (name == key) {
                    return val;
                }
            }
        }
        return null;
    },
    clientType: (function () {
        if (/(iPhone|iPad|iOS|iPod)/i.test(navigator.userAgent)) {
            return 'iPhone';
        } else if (/(Android|Linux)/i.test(navigator.userAgent)) {
            return 'Android';
        } else {
            return 'pc';
        }
    })(),
    cookie: {
        set: function (cookieKey, cookieValue, cookieOpts) {
            var arr = [];
            var d, t;
            var cfg = {
                'expire': null,
                'customExpire': null,
                'path': null,
                'domain': null,
                'secure': null,
                'encode': true
            };
            $.extend(cfg, cookieOpts);
            if (cfg.encode == true) {
                cookieValue = escape(cookieValue);
            }
            arr.push(cookieKey + '=' + cookieValue);

            if (cfg.path != null) {
                arr.push('path=' + cfg.path);
            }
            if (cfg.domain != null) {
                arr.push('domain=' + cfg.domain);
            }
            if (cfg.secure != null) {
                arr.push(cfg.secure);
            }
            if (cfg.expire != null) {
                d = new Date();
                t = d.getTime() + cfg.expire * 3600000; //cfg.expire * 1小时
                d.setTime(t);
                arr.push('expires=' + d.toGMTString());
            }
            if (cfg.customExpire != null) {
                arr.push('expires=' + cfg.customExpire.toGMTString());
            }
            document.cookie = arr.join(';');
        }
        ,
        get: function (cookieKey) {
            cookieKey = cookieKey.replace(/([\.\[\]\$])/g, '\\\$1');
            var rep = new RegExp(cookieKey + '=([^;]*)?;', 'i');
            var co = document.cookie + ';';
            var res = co.match(rep);
            if (res) {
                return res[1] || "";
            } else {
                return null;
            }
        }
        ,
        remove: function (cookieKey, cookieOpts) {
            cookieOpts = cookieOpts || {};
            cookieOpts.expire = -10;
            this.set(cookieKey, '', cookieOpts);
        }
    },
};
const commonName = {
    anchorId: commonMethods.queryString('anchorId') || commonMethods.queryString('anchorid') || commonMethods.cookie.get('anchorId') || commonMethods.cookie.get('anchorid'),
    userId: commonMethods.queryString('userId') || commonMethods.queryString('userid') || commonMethods.cookie.get('userId') || commonMethods.cookie.get('userid'),
};
module.exports = Object.assign(commonMethods,commonName);