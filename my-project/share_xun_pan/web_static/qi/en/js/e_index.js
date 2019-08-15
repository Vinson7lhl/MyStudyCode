$(function () {
    /*-----------------------------------获取dom-----------------------------------*/
    // 有效期剩余天数
    let $_restDayNum = $('.restDayNum')
    // 产品名
    let $_p_name = $('#p_name')
    // cas号
    let $_p_cas = $('#p_cas')
    // 采购数量
    let $_p_num = $('#p_num')
    // 纯度
    let $_p_purity = $('#p_purity')
    // 备注
    let $_p_comment = $('#p_comment')
    // 公司名称
    let $_firm_name = $('#firm_name')
    // 联系方式
    let $_firm_phone = $('#firm_phone')
    // 采购单号
    let $_purchase_id = $('#purchase_id')
    // 采购状态
    let $_p_status = $('#p_status')


    // 供应商详细模块
    let $_detailModel3 = $('.detailModel3')
    // 报价单有效期
    let $_effectiveDateText = $('.effectiveDateText')
    // 供应数量
    let $_p_offer_num = $('#p_offer_num')
    // 纯度
    let $_p_offer_purity = $('#p_offer_purity')
    // 货期
    let $_p_offer_period = $('#p_offer_period')
    // 商品报价
    let $_p_offer_price = $('#p_offer_price')
    // 备注
    let $_p_offer_comment = $('#p_offer_comment')


    // 未报价按钮列表
    let $_buttonListNotCalled = $('.buttonListNotCalled')
    // 拒绝报价按钮
    let $_refuseButton = $('.refuseButton')
    // 立即报价按钮
    let $_callPrice = $('.callPrice')
    // 已报价按钮列表 / 已拒绝按钮
    let $_buttonListCalled = $('.buttonListCalled')


    // 遮罩层
    let $_bg = $('.bg')
    // 拒绝原因弹窗
    let $_popWindow = $('.popWindow')
    // 关闭拒绝原因按钮
    let $_closePopWindow = $('.closePopWindow')
    // 每个radio
    let $_perRadio = $('.perRadio')
    // 其它原因
    let $_otherReason = $('.otherReason')
    // 提交拒绝原因按钮
    let $_refusedReasonButton = $('.refusedReasonButton')


    // 报价单模块
    let $_formList = $('.formList')
    // 关闭报价单按钮
    let $_closeFormList = $('.closeFormList')
    // 所有input
    let $_inputs = $('.input')
    // 所有清空input按钮
    let $_clearInputs = $('.clearInput')
    // 报价单-供货数量
    let $_offer_p_num = $('#offer_p_num')
    // 报价单-单位
    let $_offer_p_unit = $('#offer_p_unit')
    // 报价单-纯度
    let $_offer_p_purity = $('#offer_p_purity')
    // 报价单-货期
    let $_offer_p_qi = $('#offer_p_qi')
    // 报价单-有效时间
    let $_offer_p_date = $('#offer_p_date')
    // 报价单-商品报价
    let $_offer_p_price = $('#offer_p_price')
    // 报价单-货币类型
    let $_moneyType = $('.moneyType')
    // 报价单-备注
    let $_offer_p_comment = $('#offer_p_comment')
    // 报价单-提交按钮
    let $_submit = $('.submit')

    /*-----------------------------------交互-----------------------------------*/
    // 获取url参数
    let inquiry_code = getUrlProp('inquiry_code')
    let key = getUrlProp('key')
    let shop_id = getUrlProp('shop_id')
    let user_id = ''
    let shop_name = ''
    let shop_email = ''
    let mobile = ''

    // 打开拒绝报价弹窗，并初始化
    $_refuseButton.on('click', function () {
        $_bg.fadeIn(200)
        $_popWindow.removeClass('popWindowOthers')
        $_popWindow.fadeIn(200)
        $_otherReason.removeClass('show')
        $_otherReason.val('')
        $_perRadio.removeClass('radioChecked')
        $_perRadio.eq(0).addClass('radioChecked')
    })
    // 打开立即报价弹窗，并初始化
    $_callPrice.on('click', function () {
        $_offer_p_num.val('')
        $_offer_p_unit.val('')
        $_offer_p_purity.val('')
        $_offer_p_qi.val('')
        $_offer_p_date.val('')
        $_offer_p_price.val('')
        $_moneyType.removeClass('checked')
        $_moneyType.eq(0).addClass('checked')
        $_offer_p_comment.val('')
        $_bg.fadeIn(200)
        $_formList.addClass('formListShow')
    })
    // 关闭拒绝原因
    $_closePopWindow.on('click', function () {
        $_bg.fadeOut(200)
        $_popWindow.fadeOut(200)
    })
    // 关闭报价单
    $_closeFormList.on('click', function () {
        $_bg.fadeOut(200)
        $_formList.removeClass('formListShow')
    })
    // 选择某个原因
    $_perRadio.on('click', function () {
        if (!$(this).hasClass('radioChecked')) {
            $_perRadio.removeClass('radioChecked')
            $(this).addClass('radioChecked')
            // 如果是其它
            console.log($(this).attr('data-type'))
            if ($(this).attr('data-type') === '3') {
                $_popWindow.addClass('popWindowOthers')
                $_otherReason.addClass('show')
            } else {
                $_popWindow.removeClass('popWindowOthers')
                $_otherReason.removeClass('show')
                $_otherReason.val('')
            }
        }
    })
    // 选择某个货币单位
    $_moneyType.on('click', function () {
        if (!$(this).hasClass('checked')) {
            $_moneyType.removeClass('checked')
            $(this).addClass('checked')
        }
    })
    // 输入表单时
    $_inputs.on('input', function () {
        if ($(this).val().trim() !== '') {
            $(this).siblings('.clearInput').addClass('show')
        } else {
            $(this).siblings('.clearInput').removeClass('show')
        }
    })
    // 点击清空表单时
    $_clearInputs.on('click', function () {
        $(this).siblings('.input').val('')
        $(this).removeClass('show')
    })
    // 提交拒绝原因表单
    $_refusedReasonButton.on('click', function () {
        let refuse_type = $('.radioChecked').attr('data-type')
        let refuse_remark = $_otherReason.val()
        postRefuseForm(inquiry_code, refuse_type, refuse_remark, shop_id, user_id)
        $_bg.fadeOut(200)
        $_popWindow.fadeOut(200)
    })
    // 提交报价单表单
    $_submit.on('click', function () {
        // 验证供货数量
        if (!$_offer_p_num.val().trim()) {
            alert('Quantity can not be empty')
            return false
        } else if (!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test($_offer_p_num.val().trim()) || $_offer_p_num.val().trim() <= 0) {
            alert('Quantity should be Greater than 0')
            return false
        }
        // 验证获取单位
        if (!$_offer_p_unit.val()) {
            alert('Please select one unit')
            return false
        }
        // 验证纯度
        if (!$_offer_p_purity.val().trim()) {
            alert('Purity can not be empty')
            return false
        } else if (!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test($_offer_p_num.val().trim()) || $_offer_p_purity.val().trim() <= 0) {
            alert('Purity should be Greater than 0')
            return false
        }
        // 验证有效时间
        if (!$_offer_p_date.val().trim()) {
            alert('Please select one valid time')
            return false
        }
        // 验证商品报价
        if (!$_offer_p_price.val().trim()) {
            alert('Quote can not be empty')
            return false
        } else if (!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test($_offer_p_price.val().trim()) || $_offer_p_purity.val().trim() <= 0) {
            alert('Quote should be Greater than 0')
            return false
        }
        postOfferForm()
    })
    // 当
    $_offer_p_date.on('change', function () {
        $(this).attr('placeholder', '')
        // $(this).val()  0033-02-22 值的格式如上
        if (new Date($(this).val()).getTime() - current_date < 0) {
            alert("Can't be earlier today！")
            $(this).val('')
        }
    })

    /*-----------------------------------请求-----------------------------------*/
    // 获取供应商数据（如果返回了数据说明是已经报价了）
    function getOfferDetailInfo(inquiry_code, user_id, shop_id) {
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
                console.log(res)
                // 报价单有效期
                $_effectiveDateText.text(res.inquiry.effectiveTimeStr)
                // 供应数量
                $_p_offer_num.text(res.inquiry.product_name)
                // 纯度
                $_p_offer_purity.text(res.inquiry.cas)
                // 货期
                $_p_offer_period.text(res.inquiry.number + unit_name)
                // 商品报价 
                $_p_offer_price.text(res.inquiry.cas)
                // 备注
                $_p_offer_comment.text(res.inquiry.remarks || '--')
            },
            error: function (res) {
                console.log(res)
            }
        })
    }
    // 提交报价表单
    function postOfferForm() {
        $.ajax({
            url: base_url + '/1.0/qi/quotation',
            type: 'post',
            dataType: 'json',
            data: {
                inquiry_code: inquiry_code,
                user_id: user_id,
                shop_id: shop_id,
                shop_name: shop_name,
                purity: $_offer_p_num.val().trim(),
                effective_time: $_offer_p_date.val(),
                stock_days: $_offer_p_qi.val().trim(),
                molbase_purchase_price_currency: $('.checked').attr('data-type'),
                molbase_sale_price: $_offer_p_price.val().trim(),
                remarks: $_offer_p_comment.val().trim(),
                number: $_offer_p_num.val().trim(),
                number_unit: $_offer_p_unit.val(),
                shop_email:shop_email,
                mobile: mobile
            },
            success: function (res) {
                // 跳转至成功页
                location.href='./e_success.html?inquiry_code='+ inquiry_code +'&shop_id=' + shop_id + '&user_id='+ user_id
            },
            error: function (res) {
                console.log(res)
            }
        })
    }
    // ***提交拒绝表单
    function postRefuseForm(inquiry_code, refuse_type, refuse_remark, shop_id, user_id) {
        $.ajax({
            url: base_url + '/1.0/qi/inquiry/refuse',
            type: 'POST',
            dataType: 'json',
            data: {
                inquiry_code: inquiry_code,
                refuse_type: refuse_type,
                refuse_remark: refuse_remark,
                shop_id: shop_id,
                user_id: user_id,
            },
            success: function (res) {
                $_buttonListNotCalled.removeClass('show')
                $_buttonListCalled.addClass('show buttonListRefusedCalled').find('.calledPrice').text('已拒绝')
                $_p_status.addClass('refused').text('已拒绝')
                $_p_status.attr('class','value pStatus refused').text('已拒绝')
                alert('拒绝成功！')
            },
            error: function (res) {
                console.log(res)
            }
        })
    }
    // 获取采购商数据
    $.ajax({
        url: base_url + '/1.0/qi/inquiry',
        type: 'get',
        dataType: 'json',
        data: {
            inquiry_code: inquiry_code,
            key: key,
            shop_id: shop_id
        },
        success: function (res) {
            console.log(res)
            // 剩余有效期
            $_restDayNum.text(res.inquiry.effectiveTimeStr)
            // 产品名
            $_p_name.text(res.inquiry.product_name)
            // cas号
            $_p_cas.text(res.inquiry.cas)
            // 采购数量 
            $_p_num.text(res.inquiry.number + res.inquiry.numberUnitStr)
            // 纯度
            $_p_purity.text(res.inquiry.purity + '%')
            // 备注
            $_p_comment.text(res.inquiry.remarks || '--')
            // 公司名
            $_firm_name.text(res.inquiry.pc_customer_name || '--')
            // 采购单号
            $_purchase_id.text(res.inquiry.code || '--')

            user_id = res.shop.contact.id
            shop_email = res.inquiry.shop_email
            shop_name = res.inquiry.shop_name
            mobile = res.inquiry.shop_mobile
            /**
             * 待报价-3
             *          待确认-11
             * 已拒绝-9
             * 已接受-5
             * 已取消-7
             * 已报价-13
             * 
             * 
             *  a)	待报价 Pending Offer
                b)	待确认 to be Confirmed
                c)	已拒绝 Rejected
                d)	已接受 Accepted
                e)	已取消 Cancelled

             */
            if(res.inquiry.state === 3){
                $_buttonListNotCalled.addClass('show')
                $_p_status.addClass('notOffer').text('Pending Offer')
            }
            if(res.inquiry.state === 5){
                $_p_status.addClass('accepted').text('Accepted')
            }
            if(res.inquiry.state === 7){
                $_p_status.addClass('canceled').text('Cancelled')
            }
            if(res.inquiry.state === 9){
                $_buttonListCalled.addClass('show buttonListRefusedCalled').find('.calledPrice').text('Rejected')
                $_p_status.addClass('refused').text('Rejected')
            }
            if(res.inquiry.state === 11){
                $_p_status.addClass('offered').text('to be Confirmed')
            }
            if(res.inquiry.state === 13){
                $_detailModel3.addClass('show')
                getOfferDetailInfo(inquiry_code, res.shop.contact.id, shop_id)
                $_buttonListCalled.addClass('show')
                $_p_status.addClass('offered').text('Quoted')
            }
        },
        error: function (res) {
            console.log(res)
        }
    })
})