function clicked(){
    var x = document.getElementsByClassName("total");
    for(var i = 0; i < x.length; i ++)
    {
        total += x[i].value;
    }
    window.localStorage.setItem('total',total);
}
var total;
if(document.title == "Results")
{
    alert(document.getElementById("total").firstChild)
    document.getElementById("total").firstChild.innerHTML = window.localStorage.getItem("total");
}
else
{
    document.getElementById("main_form").onsubmit = clicked;
}
