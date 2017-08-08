function draw(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = "#f1f2f3";
    context.fillRect(0, 0, 400, 400);
    for (var i = 0; i < 10; i++) {
        // beginPath()和closePath()方法很重要，如果不加会使每次画图都是从第一次开始
        // arc()的第五个参数值注意要用这个表示，不然会报错
        context.beginPath();
        context.arc(i*10, i*10, i*30, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = "rgba(255,0,0,0.1)";
        context.fill();
    }

    context.fillStyle = "#c0c0c0";
    context.fillRect(400, 500, 400, 400);
    for (var i = 0; i < 10; i++) {
        context.beginPath();
        context.arc(i*50, i*50, i*30, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = "rgba(255,0,0,0.2)";
        context.fill();
    }
}