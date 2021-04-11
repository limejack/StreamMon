function clicked(){
    total = 0;
    var x = document.getElementsByClassName("total");
    for(var i = 0; i < x.length; i ++)
    {
        total += parseInt(x[i].value);
    }
    window.localStorage.setItem('total',total);
    x = document.getElementsByClassName("Metric1a");
    var Metric1a = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric1a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric1a',Metric1a);
    x = document.getElementsByClassName("Metric2a");
    var Metric2a = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric2a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric2a',Metric2a);
    x = document.getElementsByClassName("Metric3a");
    var Metric3a = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric3a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric3a',Metric3a);
    x = document.getElementsByClassName("Metric4a");
    var Metric4a = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric4a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric4a',Metric4a);
    x = document.getElementsByClassName("Metric5a");
    var Metric5a = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric5a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric5a',Metric5a);
    x = document.getElementsByClassName("Metric6a");
    var Metric6a = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric6a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric6a',Metric6a);
}
var total;
if(document.title == "Results")
{
    document.getElementById("total").innerHTML = window.localStorage.getItem("total");
    document.getElementById("Metric1a").innerHTML = window.localStorage.getItem("Metric1a");
}
else
{
    document.getElementById("main_form").onsubmit = clicked;
}
