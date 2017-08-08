function draw(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = "green";
    context.fillRect(0, 0, 800, 300);
    context.font = "bold 40px '微软雅黑'";
    context.fillStyle = "#fff";
    // 设置文字垂直对齐方式
    // context.textBaseline="top";
    // 设置文字水平对齐方式
    // context.textAlign="left";

    context.fillText("你好！陌生人", 30, 80);
    context.strokeStyle = "#fff";
    context.fillStyle = "red";
    context.font = "200 20px Arial";
    context.fillText("welcome to", 120, 150);
    context.fillStyle = "#fff";
    context.font = "bold 40px '微软雅黑'";
    context.strokeText("猿来缘往，我的博客", 250, 150);
    context.fillText("一个讲故事的世界！", 400, 220);
    // 防止文字溢出，最后一个参数，超出的文字会自动压缩
    // context.fillText("12314654648456415132123123121321321231321231321321313213213",0,270,800);
}