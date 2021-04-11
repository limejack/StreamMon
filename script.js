function clicked(){
    var x = document.getElementsByClassName("total");
    for(var i = 0; i < x.length; i ++)
    {
        total += x[i].value;
    }
}
var total;
alert(document.title);
if(document.title.innerHtml == "Results")
{
    document.getElementById("total").text = total;
}
else
{
    document.getElementById("main_form").onsubmit = clicked;
}
