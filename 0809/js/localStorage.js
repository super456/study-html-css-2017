function saveLocal(id) {
    var target= document.getElementById(id);
    var ms=target.value;
    localStorage.setItem("mess",ms);
    
}

function loadLocal(id) {
    var target=document.getElementById(id);
    var ms=localStorage.getItem("mess");
    target.innerHTML="读出来的数据为："+ms;
    
    
}