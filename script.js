function clicked(){
    total = 0;
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
    document.getElementById("total").innerHTML = window.localStorage.getItem("total");
}
else
{
    document.getElementById("main_form").onsubmit = clicked;
}
