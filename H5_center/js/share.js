
$(function() {
    // 设置base页面rem单位
    let base_px = 1
    let doc = document
    let win = window
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
            html.style.fontSize = 100 * (clientW / 750) + "px";
            base_px = 100 * (clientW / 750)
            console.log(base_px)
        }
    win.addEventListener(reEvt, reFontSize);
    // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
    doc.addEventListener("DOMContentLoaded", reFontSize)
    reFontSize()



    /**
     * 获取DOM
     */
    // 获取弹窗模块dom
    let popUpModel = $('.fixedBg');
    // 获取求购、供应按钮dom、详细模块
    let triggerPopUpDom = $('.triggerPopUp');
    // 获取下载app按钮
    let downloadAppButtonDom = $('.downloadAppButton')
    // 获取浮动打开app按钮
    let openAppButtonDom = $('.openAppButton')
    // 关闭弹窗按钮
    let closePopUpButton = $('.closeModel');
    // 引导页
    let guidePicDom = $('.guidePic')
    // 底部浮动打开App按钮
    let fixedBottomButtonDom = $('.fixedBottomButton')
    // 产品名
    let pNameTextDom = $('.pNameText')
    // cas
    let casDom = $('.pCas .labelValue')
    // eName英文名
    let eName = $('.pEName .labelValue')


    /**
     * 获取环境判断
     */
    // 判断是ios还是安卓
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    let isWeChat = isWeiXin()

    // 判断是否微信环境
    function isWeiXin() {
        let ua = window.navigator.userAgent.toLowerCase()
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }else{
            return false;
        }
    }

    /**
     * 获取url的某个参数
     */
    function getQueryVariable(variable) {
        let query = window.location.search.substring(1);
        let vars = query.split("&")
        for (let i=0;i<vars.length;i++) {
                let pair = vars[i].split("=")
                if(pair[0] == variable) {
                    return pair[1]
                }
        }
        return false
    }

    /**
     * 绑定事件
     */
    // 显示弹窗
    triggerPopUpDom.on('click', function () {
        popUpModel.fadeIn(200)
    })
    // 关闭弹窗
    closePopUpButton.on('click',function() {
        popUpModel.fadeOut(200)
    })
    // 点击下载App按钮
    downloadAppButtonDom.on('click',function() {
        // 如果是ios则直接去App Store
        if(isiOS) {
            window.location.href = "https://apps.apple.com/cn/app/id1113951649"
        }
        // 如果是安卓
        if(isAndroid) {
            // 如果是微信则跳转到介绍页
            if (isWeChat) {
                // 跳转到介绍页
                window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.molbase.contactsapp"
            } else {
                // 浏览器则直接下载apk包
                window.location.href = "http://contact-api.molbase.cn/download/appdownload";
            }
        }
    })
    // 点击打开App按钮
    openAppButtonDom.on('click',function() {
        // 如果是微信则弹出引导层
        if (isWeChat) {
            guidePicDom.fadeIn(200)
        } else {
            // 浏览器则直接打开app对应的详情页
            // window.location.href = "vread_ios://"
        }
    })
    // 点击引导层，引导层本身消失
    guidePicDom.on('click',function() {
        $(this).fadeOut(200)
    })
    // 监听滚动
    $(win).on('scroll',function(){
        if($(win).scrollTop() / base_px > 1){
            fixedBottomButtonDom.fadeIn(300)
        } else {
            fixedBottomButtonDom.fadeOut(300)
        }
    })
});