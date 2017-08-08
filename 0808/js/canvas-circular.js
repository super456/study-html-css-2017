function draw(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = "#f1f2f3";
    context.fillRect(0, 0, 400, 400);
    for (var i = 0; i < 10; i++) {
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