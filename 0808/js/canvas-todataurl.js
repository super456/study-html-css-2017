function draw(id){
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle="green";
    context.fillRect(0,0,400,300);
    // 将canvas绘制的东西打开保存为图片形式的文件
    window.location=canvas.toDataURL("image/png");
}