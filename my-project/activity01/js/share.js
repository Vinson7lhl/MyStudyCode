
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
            // 按照设计稿750宽度的UI去计算
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
    // 引导页Android
    let guidePicDomAndroid = $('.guidePicAndroid')
    // 底部浮动打开App按钮
    let fixedBottomButtonDom = $('.fixedBottomButton')

    // 产品图
    let pImgDom = $('.pImg img')
    // 产品名
    let pNameTextDom = $('.pNameText')
    // cas
    let casDom = $('.pCas .labelValue')
    // eName英文名
    let eName = $('.pEName .labelValue')
    // 简要描述
    let baseDesDom = $('.baseDes')
    // 分子式
    let fen_zi_shi_dom = $('.fen_zi_shi')
    // 分子量
    let fen_zi_liang_dom = $('.fen_zi_liang')
    // 精确质量
    let jing_que_zhi_liang_dom = $('.jing_que_zhi_liang')
    // logP
    let logP_dom = $('.logP')
    // PSA
    let PSA_dom = $('.PSA')
    // 中文别名
    let cOtherNames_dom = $('.cOtherNames')
    // 英文别名
    let eOtherNames_dom = $('.eOtherNames')
    // 获取url的id
    let id = getQueryVariable('id')

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
            if(isiOS) {
                guidePicDom.fadeIn(200)
            }
            if(isAndroid){
                guidePicDomAndroid.fadeIn(200)
            }
        } else {
            // 浏览器则直接打开app对应的详情页
            window.location.href = "huagong://openapp/wiki_detail?id=" + id
        }
    })
    // 点击引导层，引导层本身消失
    guidePicDom.on('click',function() {
        $(this).fadeOut(200)
    })
    guidePicDomAndroid.on('click',function() {
        $(this).fadeOut(200)
    })
    // 监听滚动(如果滚动出去的高度超过顶部下载app的广告条高度，则显示底部浮动打开App按钮)
    $(win).on('scroll',function(){ 
        if($(win).scrollTop() / base_px > 1){
            fixedBottomButtonDom.fadeIn(300)
        } else {
            fixedBottomButtonDom.fadeOut(300)
        }
    })

    // 获取头部和基本信息字段（但没有简要描述字段，需要单独再请求一次）
    $.ajax({
        url: 'http://dev-contact-api.molbase.cn/1.0/compound/info?id=' + id,
        type: 'get',
        dataType: 'json',
        success: function(res) {
            console.log(res)
            // 产品图
            pImgDom.attr('src',res.compound.structImage)
            // 产品名
            pNameTextDom.text(res.compound.cnName)
            // cas
            casDom.text(res.compound.cas)
            // 英文名
            eName.text(res.compound.enName)
            // 分子式
            fen_zi_shi_dom.text(res.compound.molStruc.formula)
            // 分子量
            fen_zi_liang_dom.text(res.compound.molStruc.molWeight)
            // 精确质量
            jing_que_zhi_liang_dom.text(res.compound.molStruc.exactMass)
            // logp
            logP_dom.text(res.compound.molStruc.logp)
            // PSA
            PSA_dom.text(res.compound.molStruc.psa)
            // 中文别名
            let cnNameAliasArray = res.compound.cnNameAlias
            if(cnNameAliasArray && cnNameAliasArray.length > 0) {
                let cnNameAliasStr = ''
                for(let i = 0 ;i<cnNameAliasArray.length; i++) {
                    cnNameAliasStr += '<p>' + cnNameAliasArray[i] + '；</p>'
                }
                cOtherNames_dom.html(cnNameAliasStr)
            } else {

            }
            // 英文别名
            let enNameAliasArray = res.compound.enNameAlias
            if (enNameAliasArray && enNameAliasArray.length > 0) {
                let enNameAliasStr = ''
                for(let i = 0 ;i<enNameAliasArray.length; i++) {
                    enNameAliasStr += '<p>' + enNameAliasArray[i] + '；</p>'
                }
                eOtherNames_dom.html(enNameAliasStr)
            }
        },
        error: function(res){
            console.log(res)
        }
    })
    // 获取基本描述
    $.ajax({
        url: 'http://dev-contact-api.molbase.cn/1.0/compound/baike/info?id=' + id,
        type: 'get',
        dataType: 'json',
        success: function(res) {
            if(res.baike_info.description.data[0]['描述']) {
                baseDesDom.text(res.baike_info.description.data[0]['描述'])
            } else {
                baseDesDom.text('暂无')
            }
        },
        error: function(res){
            console.log(res)
        }
    })
});