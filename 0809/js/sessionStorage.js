function saveSession(id) {
    var target=document.getElementById(id);
    var mess=target.value;
    sessionStorage.setItem("mes",mess);
}

function loadSession(id) {
    var target=document.getElementById(id);
    var ms=sessionStorage.getItem("mes");
    target.innerHTML="读取的数据为："+ms;

}