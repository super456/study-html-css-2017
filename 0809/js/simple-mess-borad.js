function saveMess(id) {
    var mess = document.getElementById(id).value;
    // 判断获取值是否为空
    if (mess != "") {
        alert("发送信息成功！");
        // 设置时间
        var time = new Date().getTime();
        // 设置保存本地存储的信息为键值对形式
        localStorage.setItem(time, mess);
        // textArea多文本元素不用innerHTML和text()方法赋值，只能用value赋值
        document.getElementById(id).value = "";
        // 读取数据
        loadMess('msg');

    } else {
        alert("信息不能为空！！！");

    }

}

// 读取数据的方法

function loadMess(id) {
    // 设置表格样式
    var reselt = "<table border='1px' frame='box' rules='all' cellspacing='2px' cellpadding='2px'>";
    // 循环输出本地存储的键值对信息
    for (var i = 0; i < localStorage.length; i++) {
        //依次根据i值将本地存储的数据的索引值，默认从0开始取出 
        var key = localStorage.key(i);
        // 取出相应索引值的键值对信息
        var value = localStorage.getItem(key);
        // 从新设置时间，因为默认时间为时间戳。要转换成FMT模式
        var date = new Date();
        date.setTime(key);
        var datestr = date.toGMTString();
        reselt += "<tr><td>" + '这是第' + (i + 1) + '条数据' + '</td><td>' + value + '</td><td>' + datestr + '</td></tr>';

    }
    reselt += '</table>';
    var target = document.getElementById(id);
    target.innerHTML = reselt;
}

// 清除本地存储的所有信息的方法
function clearMess() {
    localStorage.clear();
    alert("留言板数据已清除！");
    loadMess('msg');
}