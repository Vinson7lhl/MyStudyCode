(function (doc, win) {
    var html = doc.getElementsByTagName("html")[0],
        // orientationchange->手机屏幕转屏事件
        // resize->页面大小改变事件(一边pc端有用)
        reEvt = "orientationchange" in win ? "orientationchange" : "resize",
        reFontSize = function () {
            var clientW = doc.documentElement.clientWidth || doc.body
                .clientWidth;
            if (!clientW) {
                return;
            }
            // 按照设计稿375宽度的UI去计算
            html.style.fontSize = 100 * (clientW / 375) + "px";
        }
    win.addEventListener(reEvt, reFontSize);
    // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
    doc.addEventListener("DOMContentLoaded", reFontSize);
})(document, window);


if (typeof base_url == 'undefined') {
    base_url = '';
}

// 获取url参数
function getUrlProp(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&")
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=")
        if (pair[0] == variable) {
            return pair[1]
        }
    }
    return ''
}
// 转换时间 1000-09-09 00:00:00
function formatTen(num) {
    return num > 9 ? (num + "") : ("0" + num);
}
function transformDate(date) {
    let date1 = new Date(date)
    let year = date1.getFullYear()
    let month = date1.getMonth() + 1
    let day = date1.getDate()
    let hour = date1.getHours()
    let minute = date1.getMinutes()
    let second = date1.getSeconds()
    return year + "-" + formatTen(month) + "-" + formatTen(day) + " " + formatTen(hour) + ":" + formatTen(minute) + ":" + formatTen(second);
}
let  current_date= ''
function getCurrentDate() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return new Date(year + "-" + formatTen(month) + "-" + formatTen(day)).getTime()
}
current_date = getCurrentDate()
// 转换产品单位(1:ton 2:kg 3:g 4:mg 5:L 6:ml)
function transformToCnUnitName(e_name) {
    switch (e_name) {
        case 'ton' : {
            return '吨'
            break
        }
        case 'kg' : {
            return '千克'
            break
        }
        case 'g' : {
            return '克'
            break
        }
        case 'mg' : {
            return '毫克'
            break
        }
        case 'L' : {
            return '升'
            break
        }
        case 'ml' : {
            return '毫升'
            break
        }
    }
}

// header手机号
$('.headPhoneNum').on('click', function () {
    location.href = "tel:4006021666";
})