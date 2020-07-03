/**
 * 防抖函数：在一定时间内只会执行唯一一次函数，
 */
$(function(){
    var input_dom = $('#debounce_input')
    var time_id = ''
    input_dom.on('keyup', function(){      
        if(time_id) {
            clearTimeout(time_id)
        }
        time_id = setTimeout(function(){
            console.log('确定输入！')
        }, 2000)
    })
});