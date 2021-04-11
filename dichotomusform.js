// const btn = document.querySelector('#btn');
//         // handle click button
//         btn.onclick = function () {
//             const rbs = document.querySelectorAll('input[name="choice"]');
//             let selectedValue;
//             for (const rb of rbs) {
//                 if (rb.checked) {
//                     selectedValue = rb.value;
//                     break;
//                 }
//             }
//             alert(selectedValue);
//         };
function reset() {
    for(var i = 1; i <= 40; i++) {
        document.getElementById("f" + i).disabled = true;
        document.getElementById("f" + i).checked = false;
    }
    document.getElementById("f1").disabled = false;
    document.getElementById("f2").disabled = false;
    
    document.getElementById("f1").parentNode.style.backgroundColor = "#90C290";
    document.getElementById("f2").parentNode.style.backgroundColor = "#90C290";
    //document.getElementById("bug").setAttribute("src", "");
}

reset();
document.getElementById("f1").disabled = false;
document.getElementById("f2").disabled = false;
document.getElementById("f1").parentNode.style.backgroundColor = "#90C290";
document.getElementById("f2").parentNode.style.backgroundColor = "#90C290";

function chooseNextQuestion(q_name, option) {
    if (q_name == "q1") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f3").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f4").disabled = false;
            document.getElementById("f4").parentNode.style.backgroundColor = "#90C290";
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
            document.getElementById("f5").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f6").parentNode.style.backgroundColor = "#90C290";
        }
        document.getElementById("f1").disabled = false;
        document.getElementById("f2").disabled = false;
    }
    if (q_name == "q2") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("f7").disabled = false;
            document.getElementById("f8").disabled = false;
            document.getElementById("f7").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f8").parentNode.style.backgroundColor = "#90C290";
        }
        if (option == "legs") {
            document.getElementById("f9").disabled = false;
            document.getElementById("f10").disabled = false;
            document.getElementById("f9").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f10").parentNode.style.backgroundColor = "#90C290";
        }
        document.getElementById("f3").disabled = false;
        document.getElementById("f4").disabled = false;
    }
    if (q_name == "q3") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("f11").disabled = false;
            document.getElementById("f12").disabled = false;
            document.getElementById("f11").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f12").parentNode.style.backgroundColor = "#90C290";
        }
        if (option == "legs") {
            document.getElementById("f13").disabled = false;
            document.getElementById("f14").disabled = false;
            document.getElementById("f13").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f14").parentNode.style.backgroundColor = "#90C290";
        }
        document.getElementById("f5").disabled = false;
        document.getElementById("f6").disabled = false;
    }
    if (q_name == "q4") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("bug").setAttribute("src", "Clams.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Clam, scroll down for more information!");
            //CLAM
            reset();
        }
        if (option == "legs") {
            document.getElementById("f15").disabled = false;
            document.getElementById("f16").disabled = false;
            document.getElementById("f15").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f16").parentNode.style.backgroundColor = "#90C290";

            document.getElementById("f7").disabled = false;
            document.getElementById("f8").disabled = false;
        }
    }
    if (q_name == "q5") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("f17").disabled = false;
            document.getElementById("f18").disabled = false;
            document.getElementById("f17").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f18").parentNode.style.backgroundColor = "#90C290";
        }
        if (option == "legs") {
            document.getElementById("f19").disabled = false;
            document.getElementById("f20").disabled = false;
            document.getElementById("f19").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f20").parentNode.style.backgroundColor = "#90C290";
        }
        document.getElementById("f9").disabled = false;
        document.getElementById("f10").disabled = false;
    }
    if (q_name == "q6") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("bug").setAttribute("src", "Beetle.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Beetles")
            //Beetles
            reset();
        }
        if (option == "legs") {
            document.getElementById("f21").disabled = false;
            document.getElementById("f22").disabled = false;
            document.getElementById("f21").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f22").parentNode.style.backgroundColor = "#90C290";

            document.getElementById("f11").disabled = false;
            document.getElementById("f12").disabled = false;
        }
    }
    if (q_name == "q7") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("bug").setAttribute("src", "Crayfish.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Crawfish");
            //Crawfish
            reset();
        }
        if (option == "legs") {
            document.getElementById("f23").disabled = false;
            document.getElementById("f24").disabled = false;
            document.getElementById("f23").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f24").parentNode.style.backgroundColor = "#90C290";

            document.getElementById("f13").disabled = false;
            document.getElementById("f14").disabled = false;
        }
    }
    if (q_name == "q8") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("bug").setAttribute("src", "Gilled Snails.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Gilled Snail");
            //Gilled Snail
            reset();
        }
        if (option == "legs") {
            document.getElementById("bug").setAttribute("src", "Lunged Snails.png");
            //alert("Lunged Snail");
            //Lunged Snail
            reset();
        }
    }
    if (q_name == "q9") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("f25").disabled = false;
            document.getElementById("f26").disabled = false;
            document.getElementById("f25").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f26").parentNode.style.backgroundColor = "#90C290";
            
            document.getElementById("f17").disabled = false;
            document.getElementById("f18").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("bug").setAttribute("src", "Flat Worm.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("FlatWorm");
            //Flat Worm
            reset();
        }
    }
    if (q_name == "q10") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("f27").disabled = false;
            document.getElementById("f28").disabled = false;
            document.getElementById("f27").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f28").parentNode.style.backgroundColor = "#90C290";
            
            document.getElementById("f19").disabled = false;
            document.getElementById("f20").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("bug").setAttribute("src", "Most True Fly.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Most True Flies");
            //Most True Flies
            reset();
        }
    }
    if (q_name == "q11") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("f29").disabled = false;
            document.getElementById("f30").disabled = false;
            document.getElementById("f29").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f30").parentNode.style.backgroundColor = "#90C290";
        }
        if (option == "legs") {
            document.getElementById("f31").disabled = false;
            document.getElementById("f32").disabled = false;
            document.getElementById("f31").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f32").parentNode.style.backgroundColor = "#90C290";
        }
        document.getElementById("f21").disabled = false;
        document.getElementById("f22").disabled = false;
    }
    if (q_name == "q12") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            alert("Scud");
            //Scud
            reset();
        }
        if (option == "legs") {
            alert("Sowbug");
            //Sowbug
            reset();
        }
    }
    if (q_name == "q13") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            alert("Aquatic Worm");
            //Aquatic Worm
            reset();
        }
        if (option == "legs") {
            alert("Leech");
            //Leech
            reset();
        }
    }
    if (q_name == "q14") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            alert("Black Fly");
            //Black Fly
            reset();
        }
        if (option == "legs") {
            alert("Midges");
            //Midges
            reset();
        }
    }
    if (q_name == "q15") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("f33").disabled = false;
            document.getElementById("f34").disabled = false;
            document.getElementById("f33").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f34").parentNode.style.backgroundColor = "#90C290";
        }
        if (option == "legs") {
            document.getElementById("f35").disabled = false;
            document.getElementById("f36").disabled = false;
            document.getElementById("f35").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f36").parentNode.style.backgroundColor = "#90C290";
        }
        document.getElementById("f29").disabled = false;
        document.getElementById("f30").disabled = false;
    }
    if (q_name == "q16") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("bug").setAttribute("src", "Dragonfly.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Dragonfly and Damselfly");
            //Dragonfly and Damselfly
            reset();
        }
        if (option == "legs") {
            document.getElementById("bug").setAttribute("src", "Most Caddisfly.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Most Caddisfly");
            //Most Caddisfly
            reset();
        }
    }
    if (q_name == "q17") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("f37").disabled = false;
            document.getElementById("f38").disabled = false;
            document.getElementById("f37").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f38").parentNode.style.backgroundColor = "#90C290";
        }
        if (option == "legs") {
            document.getElementById("f39").disabled = false;
            document.getElementById("f40").disabled = false;
            document.getElementById("f39").parentNode.style.backgroundColor = "#90C290";
            document.getElementById("f40").parentNode.style.backgroundColor = "#90C290";
        }
        document.getElementById("f33").disabled = false;
        document.getElementById("f34").disabled = false;
    }
    if (q_name == "q18") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("bug").setAttribute("src", "Mayfly.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Mayfly");
            //Mayfly
            reset();
        }
        if (option == "legs") {
            document.getElementById("bug").setAttribute("src", "Dragonfly.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Dragonfly and Damselfly");
            //Dragonfly and Damselfly
            reset();
        }
    }
    if (q_name == "q19") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("bug").setAttribute("src", "Stonefly.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Stonefly");
            //Stonefly
            reset();
        }
        if (option == "legs") {
            document.getElementById("bug").setAttribute("src", "Mayfly.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Mayfly");
            //Mayfly
            reset();
        }
    }
    if (q_name == "q20") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.backgroundColor = "#FCF7F8";
        }
        if (option == "no-legs") {
            document.getElementById("bug").setAttribute("src", "Hellgrammite.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Hellgrammites, Fishfly, Alderfly");
            //Hellgrammites, Fishfly, Alderfly
            reset();
        }
        if (option == "legs") {
            document.getElementById("bug").setAttribute("src", "Netspinner.png");
            document.getElementById("bug").scrollIntoView({behavior:"smooth",block:"end"});
            //alert("Common Netspinner");
            //Common Netspinner
            reset();
        }
    }
};
