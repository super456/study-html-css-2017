function draw(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = "#c0c0c0";
    context.strokeStyle = "#000";
    context.lineWidth = 5;
    context.fillRect(0, 0, 500, 500);
    context.strokeRect(0, 0, 500, 100);

    context.strokeRect(0, 100, 100, 300);

    context.strokeRect(100, 100, 400, 300);

    context.strokeRect(0, 400, 500, 100);
}