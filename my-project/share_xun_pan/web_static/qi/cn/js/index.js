$(function() {
    console.log('首页')
    $('#offer_p_date').on('change',function() {
        // $(this).val()  0033-02-22 值的格式如上
        $(this).attr('placeholder','')
        alert($(this).val())
    })
})