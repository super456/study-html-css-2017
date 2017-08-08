var context;
var i = 0;

var wh, hh;

function draw(id) {
    var canvas = document.getElementById(id);
    context = canvas.getContext('2d');

    wh = canvas.width;
    hh = canvas.height;

    setInterval(panting, 100);
}

function panting() {

    // 一个小方块在动
    //  这两行很重要，会重画背景图，覆盖原来的小方块
    // context.fillStyle="green";
    // context.fillRect(0,0,800,400);
    // context.fillStyle="#f60";
    // context.fillRect(i,20,20,20);
    // i++;

    // 绘制一个进度条
    //      context.fillStyle="#f60";
    //     context.fillRect(i,0,20,20);
    //     i++;

    // 断开的进度条小矩形
    // context.fillStyle="#f60";
    // context.fillRect(i,10,10,10);
    // i=i+20;

    // 绘制一个X型
    // context.fillStyle="red";
    // context.fillRect(i,i,10,10);
    // context.fillRect(400-i,400-i,10,10);
    // context.fillRect(400-i,i,10,10);
    // context.fillRect(i,400-i,10,10);
    // i++;

    // 擦除图像的方法使用
    //    context.fillStyle = "#000";
    //     context.fillRect(0,0,wh,hh);
    //     context.clearRect(10,10,wh,hh);
    //     context.fillStyle = "green";
    //     context.fillRect(i,20,10,10);
    //     i=i+20;

    // 简化版的一个贪吃蛇
    context.fillStyle = "green";
    context.fillRect(0, 0, 800, 400);
    context.fillStyle = "#c0c0c0";
    context.fillRect(i + 50, 200, 10, 10);
    context.fillStyle = "#000";
    context.fillRect(i, 200, 50, 10)
    context.fillStyle = "red";
    context.fillRect(i + 100, 200, 10, 10);
    i++;
}