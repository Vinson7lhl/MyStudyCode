$(function() {
    /*-----------------------------------获取dom-----------------------------------*/
    // 采购商-产品名
    let $_productName = $('.productName')
    // 采购商-cas号
    let $_casNum = $('.casNum')
    // 采购商-公司名
    let $_firmNameText = $('.firmNameText')
    // 采购商-议价、数量
    let $_p_price_num = $('#p_price_num')
    // 采购商-备注
    let $_p_firm_comment = $('#p_firm_comment')
    // 我的报价
    let $_p_offer_price = $('#p_offer_price')
    // 联系客户按钮
    let $_callClientButton = $('.callClientButton')


    // 采购详情-有效期
    let $_deadlinePurchaseDate = $('.deadlinePurchaseDate')
    // 采购详情-采购数量
    let $_p_purchase_detail_num = $('#p_purchase_detail_num')
    // 采购详情-纯度
    let $_p_purchase_detail_purity = $('#p_purchase_detail_purity')
    // 采购详情-备注
    let $_p_purchase_detail_comment = $('#p_purchase_detail_comment')
    // 采购详情-采购单号
    let $_p_purchase_detail_id = $('#p_purchase_detail_id')


    // 报价单-有效期
    let $_deadlineOfferDate = $('.deadlineOfferDate')
    // 报价单-供应数量
    let $_p_offer_detail_num = $('#p_offer_detail_num')
    // 报价单-纯度
    let $_p_offer_detail_purity = $('#p_offer_detail_purity')
    // 报价单-货期
    let $_p_offer_detail_period = $('#p_offer_detail_period')
    // 报价单-商品报价
    let $_p_offer_detail_price = $('#p_offer_detail_price')
    // 报价单-备注
    let $_p_offer_detail_comment = $('#p_offer_detail_comment')


    // 收起/查看 更多详情
    let $_swichShowDetails = $('.swichShowDetails')
    // 详情模块
    let $_purchaseOfferDetails = $('.purchaseOfferDetails')

    // 状态提示
    let $_p_status = $('#p_status')
    let phone_num =''




    

    /*-----------------------------------交互-----------------------------------*/
    // 获取url参数
    // let code = getUrlProp('code')
    $_swichShowDetails.on('click',function() {
        if($(this).text() === '查看更多详情'){
            $(this).text('收起更多详情')
            $_purchaseOfferDetails.addClass('show')
        } else {
            $(this).text('查看更多详情')
            $_purchaseOfferDetails.removeClass('show')
        }
    })
    // 联系客户
    $_callClientButton.on('click',function(){
        location.href='tel:' + phone_num
    })
    /*-----------------------------------请求-----------------------------------*/
    // 获取url参数
    let inquiry_code = getUrlProp('inquiry_code')
    let shop_id = getUrlProp('shop_id')
    let user_id = getUrlProp('user_id')
    $.ajax({
        url: base_url + '/1.0/qi/quotation/my',
        type: 'get',
        dataType: 'json',
        data: {
            inquiry_code: inquiry_code,
            user_id: user_id,
            shop_id: shop_id
        },
        success: function (res) {
            // 顶部采购商基本信息
            $_productName.text(res.inquiry.product_name)
            $_casNum.text(res.inquiry.cas)
            $_firmNameText.text(res.iinquiry.pc_customer_name)

            // 议价
            let money_type = res.quote.bargain.bargainPriceCurrency == '1'?'￥':'$'
            $_p_price_num.text(money_type + ' ' + res.quote.bargain.bargainPrice + '/' + res.quote.number + res.quote.numberUnitStr)
            phone_num = res.inquiry.pc_mobile
            let money_type2 = res.quote.molbase_purchase_price_currency == '1'?'￥':'$'
            $_p_offer_price.text(money_type2 + ' ' + res.quote.molbase_purchase_price + '/' + res.quote.number + res.quote.numberUnitStr)

            // 采购详情
            $_deadlinePurchaseDate.text(res.inquiry.effective_time)
            $_p_purchase_detail_num.text(res.inquiry.number + res.inquiry.numberUnitStr)
            $_p_purchase_detail_purity.text(res.inquiry.purity)
            $_p_purchase_detail_comment.text(res.inquiry.remarks)
            $_p_purchase_detail_id.text(inquiry_code)

            // 供应商详情
            $_deadlineOfferDate.text(res.quote.effective_time)
            $_p_offer_detail_num.text(res.quote.number + res.quote.numberUnitStr)
            $_p_offer_detail_purity.text(res.quote.purity)
            $_p_offer_detail_period.text(res.quote.stock_days)
            $_p_offer_detail_price.text(res.quote.molbase_purchase_price)
            $_p_offer_detail_comment.text(res.quote.remarks)

            /**
             * 待报价-3
             * 待确认-11
             * 已拒绝-9
             * 已接受-5
             * 已取消-7
             * 
             * 已报价-13
             */
            if(res.inquiry.state === 3){
                $_p_status.addClass('notOffer').text('待报价')
            }
            if(res.inquiry.state === 5){
                $_p_status.addClass('accepted').text('已接受')
            }
            if(res.inquiry.state === 7){
                $_p_status.addClass('canceled').text('已取消')
            }
            // 如果是拒绝报价
            if(res.inquiry.state === 9){
                $_p_status.addClass('refused').text('已拒绝')
            }
            if(res.inquiry.state === 11){
                $_p_status.addClass('offered').text('待确认')
            }
            // 如果是已经报过价了
            if(res.inquiry.state === 13){
                $_p_status.addClass('offered').text('已报价')
            }
        },
        error: function (res) {
            console.log(res)
        }
    })
})