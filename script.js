function clicked(){
    var x = document.getElementsById("total");
    for(var i = 0; i < x.length(); i ++)
    {
        alert(x[i].value());
    }
}
document.getElementById("main_form").onsubmit = clicked();
