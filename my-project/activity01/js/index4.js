
$(function() {
    // let firm_name = $('#firm_name').val().trim()
    // let user_name = $('#user_name').val().trim()
    // let tel_num = $('#tel_num').val().trim()
    // let province = $('#province').val().trim()

    let jumpToBottom = $('.jumpToBottom')
    let submitButton = $('.submitButton')
    jumpToBottom.on('click', function() {
        $(document).scrollTop($(document).height());
    })
    submitButton.on('click',function() {
        if(!$('#firm_name').val().trim()) {
            alert('请输入公司名')
            return false
        }
        if(!$('#user_name').val().trim()) {
            alert('请输入姓名')
            return false
        }
        if(!/^1\d{10}$/.test($('#tel_num').val().trim())) {
            alert('请输入正确的联系方式')
            return false
        }
        if(!$('#province').val()) {
            alert('请输入意向区域')
            return false
        }
        $.ajax({
            url:'http://dev-m.molbase.cn/api/mlf/apply',
            type: 'post',
            data:{
                contact_company:$('#firm_name').val(),
                contact_name:$('#user_name').val(),
                contact_phone:$('#tel_num').val(),
                contact_province:$('#province').val(),
            },
            dataType:'json',
            success: function(res) {
                alert('提交成功！')
                $('#firm_name').val('')
                $('#user_name').val('')
                $('#tel_num').val('')
            },
            error: function(res){
                console.log('网络错误！')
            }
        })
    })
});