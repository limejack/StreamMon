function clicked(){
    var x = document.getElementsByClassName("total");
    for(var i = 0; i < x.length; i ++)
    {
        alert(x[i].firstChild.value());
    }
}
document.getElementById("main_form").onsubmit = clicked();
