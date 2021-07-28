
window.onload = function(){
    var arr =["audio/Gaston庞加斯顿 - Ring Ring Ring (最热男版).mp3","audio/陈奕迅 - 让我留在你身边.mp3","audio/P!NK - Just Like Fire.mp3","audio/徐梓淳 - 嫌晚.mp3"];              //把需要播放的歌曲从后往前排，这里已添加两首音乐，可继续添加多个音乐
    var myAudio = new Audio();
    myAudio.preload = true;
    myAudio.controls = true;
    myAudio.src = arr.pop();         //每次读数组最后一个元素
    myAudio.addEventListener('ended', playEndedHandler, false);
    myAudio.play();
    document.getElementById("audioBox").appendChild(myAudio);
    myAudio.loop = false;//禁止循环，否则无法触发ended事件
    function playEndedHandler(){
        myAudio.src = arr.pop();
        myAudio.play();
        console.log(arr.length);
        !arr.length && myAudio.removeEventListener('ended',playEndedHandler,false);//只有一个元素时解除绑定
    }
}
/*导入其他html文件到这个页面中*/
$('#article_001').load("blog/Mongo数据库的使用教程(完全版).html");
$('#article_002').load("blog/sqlite3初使用.html");
$('#article_003').load("blog/sqlite之更新数据(根据csv文件).html");
$('#article_004').load("blog/从csv文件向数据库中插入数据.html");


/*下拉菜单的初始化*/
$('.ui.segment.accordion').accordion({
        selector: {
            trigger: '.title'
        }
    });
/*qq提示框初始化*/
$('#qqLabel').popup({
    popup: '#qqPopup',
    position:'top center'
})
/*微信提示框初始化*/
$('#wechatLabel').popup({
    popup: '#wechatPopup',
    position:'top center'
})

/*中间的小菜单*/
/*并且:.ui.sticky 空格是包含*/
$('.ui.sticky').sticky({
    context: '#right_context'
})

/*tab初始化*/
$('.item').tab();
