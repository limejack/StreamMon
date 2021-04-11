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
    window.localStorage.setItem('Metric1a',Metric1a*100/total);
    x = document.getElementsByClassName("Metric2a");
    var Metric2a = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric2a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric2a',Metric2a*100/total);
    x = document.getElementsByClassName("Metric3a");
    var Metric3a = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric3a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric3a',Metric3a*100/total);
    x = document.getElementsByClassName("Metric4a");
    var Metric4a = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric4a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric4a',Metric4a*100/total);
    x = document.getElementsByClassName("Metric5a");
    var Metric5a = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric5a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric5a',Metric5a*100/total);
    x = document.getElementsByClassName("Metric6a");
    var Metric6a = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric6a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric6a',Metric6a*100/total);
    
    
     x = document.getElementsByClassName("Metric1b");
    var Metric1b = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric1b += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric1b',Metric1b*100/total);
    x = document.getElementsByClassName("Metric2b");
    var Metric2b = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric2b += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric2b',Metric2b*100/total);
    x = document.getElementsByClassName("Metric3b");
    var Metric3b = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric3b += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric3b',Metric3b*100/total);
    x = document.getElementsByClassName("Metric4b");
    var Metric4b = 0;
    for(var i = 0; i < x.length; i ++)
    {
        Metric4a += parseInt(x[i].value);
    }
    window.localStorage.setItem('Metric4b',Metric4b*100/total);
}
var total;
if(document.title == "Results")
{
    document.getElementById("total").innerHTML = "Total: " +window.localStorage.getItem("total");
    var scoreM = 0;
    var scoreR = 0;
    var temp = window.localStorage.getItem("Metric1a");
    if(temp > 32.2)
    {
        scoreR += 2;
    }
    else if(temp > 16.1)
    {
        scoreR += 1;
    }
    var temp = window.localStorage.getItem("Metric2a");
    if(temp < 19.7)
    {
        scoreR += 2;
    }
    else if(temp < 34.5)
    {
        scoreR += 1;
    }    
    var temp = window.localStorage.getItem("Metric3a");
    if(temp < 0.3)
    {
        scoreR += 2;
    }
    else if(temp < 1.5)
    {
        scoreR += 1;
    }    
    var temp = window.localStorage.getItem("Metric4a");
    if(temp > 6.4)
    {
        scoreR += 2;
    }
    else if(temp > 3.2)
    {
        scoreR += 1;
    }    
    var temp = window.localStorage.getItem("Metric5a");
    if(temp < 46.7)
    {
        scoreR += 2;
    }
    else if(temp < 61.5)
    {
        scoreR += 1;
    }    
    var temp = window.localStorage.getItem("Metric6a");
    if(temp < 5.4)
    {
        scoreR += 2;
    }
    else if(temp < 20.8)
    {
        scoreR += 1;
    }    
    
    
    if(scoreR > 9)
    {
        scoreR = scoreR + " which is a good quality";
    }
    if(scoreR == 8)
    {
        scoreR = scoreR + " which is indeterminante quality.";
    }
    else
    {
        scoreR = scoreR + " which is terrible.";
    }
    document.getElementById("RockyMetric").innerHTML = "Rocky bottom score: " +scoreR;
    
    
    
    
    var temp = window.localStorage.getItem("Metric1b");
    if(temp > 7.8)
    {
        scoreM += 2;
    }
    else if(temp > 0.85)
    {
        scoreM += 1;
    }
    var temp = window.localStorage.getItem("Metric2b");
    if(temp > 0.5)
    {
        scoreM += 2;
    }
    else if(temp > 0)
    {
        scoreM += 1;
    }    
    var temp = window.localStorage.getItem("Metric3b");
    if(temp < 63)
    {
        scoreM += 2;
    }
    else if(temp < 85)
    {
        scoreM += 1;
    }    
    var temp = window.localStorage.getItem("Metric4b");
    if(temp < 27)
    {
        scoreM += 2;
    }
    else if(temp < 70)
    {
        scoreM += 1;
    }    
    if(scoreM > 9)
    {
        scoreM = scoreM + " which is a good quality";
    }
    if(scoreM == 8)
    {
        scoreM = scoreM + " which is indeterminante quality.";
    }
    else
    {
        scoreM = scoreM + " which is terrible.";
    }
    document.getElementById("MuddyMetric").innerHTML = "Muddy bottom score: " +scoreM;

}
else
{
    document.getElementById("main_form").onsubmit = clicked;
}
