/**
 * Created by Administrator on 2017/2/13.
 */

$(function () {

    /* 全局变量 */
    var index = 0, timer = null;

    isShowLogo(index);

    /* 1. 监听全局GPS */
    $('.gps li').on('click', function () {

        // 1.1 获取当前的索引
        index = $(this).index();

        // 1.2 GPS控制按钮
        $(this).addClass('cur').siblings().removeClass('cur');
        $('section').eq(index).show().siblings('section').hide();

        // 1.3 滑动按钮
        isShowLogo(index);

        // 1.4 缩放效果
        setTimeout(function () {
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },10);
    });


    /* 2. 监听屏幕滚动 */
    $(window).mousewheel(function (event, d) {
        clearTimeout(timer);

        // 2.1 滚动节流
        timer = setTimeout(function () {
            index -= d;
            if (index > $('.gps li').length - 1) {
                index = 0
            }
            else if (index < 0) {
                index = $('.gps li').length - 1
            }

            // 2.2 GPS控制按钮
            $('.gps li').eq(index).addClass('cur').siblings().removeClass('cur');
            $('section').eq(index).show().siblings('section').hide();

            // 2.3 滑动按钮
            isShowLogo(index);

            // 2.4 缩放效果
            setTimeout(function () {
                $('section').eq(index).removeClass('current').siblings('section').addClass('current');
            },10);

        }, 400);
    });


    /* 是否显示滑动按钮 */
    function isShowLogo(){
        if(index == 0){
            $('#logo').hide();
            $('#slide').show();
        }
        else {
            $('#logo').show();
            $('#slide').hide();
        }
    }
});
