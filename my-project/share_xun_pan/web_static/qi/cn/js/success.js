$(function() {
    /*-----------------------------------获取dom-----------------------------------*/
    // 成功后小标题
    let $_smallTitle = $('.smallTitle')
    // 采购商-公司名
    let $_firm_name = $('#firm_name')
    // 采购商-联系方式
    let $_firm_phone = $('#firm_phone')
    // 非vip提示语
    let $_notVipTips = $('.notVipTips')

    // 报价单-产品名
    let $_p_name = $('#p_name')
    // 报价单-cas
    let $_p_cas = $('#p_cas')
    // 报价单-供应数量
    let $_p_num = $('#p_num')
    // 报价单-纯度
    let $_p_purity = $('#p_purity')
    // 报价单-货期
    let $_p_deadline = $('#p_deadline')
    // 报价单-报价有效期
    let $_p_validity = $('#p_validity')
    // 报价单-商品报价
    let $_p_price = $('#p_price')
    // 报价单-备注
    let $_p_comment = $('#p_comment')





    

    /*-----------------------------------请求-----------------------------------*/
    // 获取url参数
    let inquiry_code = getUrlProp('inquiry_code')
    let shop_id = getUrlProp('shop_id')
    let user_id = getUrlProp('user_id')
    // 获取采购商数据
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
            // 是否公开信息 0-不公开 1-公开
            if(res.inquiry.is_show_link_info == '0') {
                // 不公开
                $_smallTitle.addClass('show')
                // 修改文本
                $_firm_phone.text('用户未公开联系方式，暂不可见')
            } else {
                // 是否是vip 1-vip,0-非vip
                if(res.shop.isVip == '1'){
                    // 添加手机号
                    $_firm_phone.text(res.inquiry.pc_mobile).addClass('valueBlue')
                } else {
                    // 添加手机号
                    $_firm_phone.text(res.inquiry.pc_mobile).addClass('valueBlue')
                    // 显示非vip提示
                    $_notVipTips.addClass('show')
                }
            }
            $_firm_name.text(res.inquiry.pc_customer_name)
            $_p_name.text(res.inquiry.product_name)
            $_p_cas.text(res.inquiry.cas)
            $_p_num.text(res.quote.number + res.quote.numberUnitStr)
            $_p_purity.text(res.quote.purity + '%')
            $_p_deadline.text(res.quote.stock_days)
            $_p_validity.text(res.quote.effective_time)
            let money_type = res.quote.numberUnitStr == '1'?'￥':'$'
            $_p_price.text(money_type + ' ' +res.quote.molbase_purchase_price)
            $__p_comment.text(res.quote.remarks)
        },
        error: function (res) {
            console.log(res)
        }
    })
})