// 限制上传文件大小和格式的jQuery插件实例
// 时间:2015-01-29 09:45 作者: 阅读:194次
// 本文实例讲述了限制上传文件大小和格式的jQuery插件。分享给大家供大家参考。具体分析如下：
// 在客户端上传文件，通常需要限制文件的尺寸和格式，最常用的做法是使用某款插件，一些成熟的插件的确界面好看，且功能强大，但美中不足的是：有时候会碰到浏览器兼容问题。本篇就来写一个"原生态"的jQuery插件，使之能限制上传文件的大小和格式。
// 首先，写一个名称为checkFileTypeAndSize.js的插件。通过判断当前文件的后缀名是否被包含在预先设置所允许的后缀名数组中，来限制文件格式；通过判断当前文件在IE以及其它浏览器下的尺寸是否大于预先设置所允许的最大文件尺寸，来限制文件大小；并提供格式错误、超过限制大小以及符合条件的回调函数。
// 复制代码 代码如下:
(function ($) {
    $.fn.checkFileTypeAndSize = function (options) {
        //默认设置
        var defaults = {
            allowedExtensions: [],
            maxSize: 1024, //单位是KB，默认最大文件尺寸1MB=1024KB
            success: function () { },
            extensionerror: function () { },
            sizeerror: function () { }
        };
        //合并设置
        options = $.extend(defaults, options);
        //遍历元素
        return this.each(function () {
            $(this).on('change', function () {
                //获取文件路径
                var filePath = $(this).val();
                //小写字母的文件路径
                var fileLowerPath = filePath.toLowerCase();
                //获取文件的后缀名
                var extension = fileLowerPath.substring(fileLowerPath.lastIndexOf('.') + 1);
                //判断后缀名是否包含在预先设置的、所允许的后缀名数组中
                if ($.inArray(extension, options.allowedExtensions) == -1) {
                    options.extensionerror();
                    $(this).focus();
                } else {
                    try {
                        var size = 0;
                        if ($.browser.msie) {//ie旧版浏览器
                            var fileMgr = new ActiveXObject("Scripting.FileSystemObject");
                            var fileObj = fileMgr.getFile(filePath);
                            size = fileObj.size; //byte
                            size = size / 1024;//kb
                            //size = size / 1024;//mb
                        } else {//其它浏览器
                            size = $(this)[0].files[0].size;//byte
                            size = size / 1024;//kb
                            //size = size / 1024;//mb
                        }
                        if (size > options.maxSize) {
                            options.sizeerror();
                        } else {
                            options.success();
                        }
                    } catch (e) {
                        alert("错误：" + e);
                    }
                }
            });
        });
    };
})(jQuery);
// 在客户端的调用变得非常简单。
// 复制代码 代码如下:
{/* <input type="file" name="f" id="f"/>
@section scripts */}

    <script src="~/Scripts/checkFileTypeAndSize.js"></script>
    <script type="text/javascript">
        $(function() {
            $('#f').checkFileTypeAndSize({
                allowedExtensions: ['jpg'],
                maxSize: 10,
                success: function() {
                    alert('ok');
                },
                extensionerror: function() {
                    alert('允许的格式为：jpg');
                    return;
                },
                sizeerror: function() {
                    alert('最大尺寸10kb');
                    return;
                }
            });
        });
    </script>
