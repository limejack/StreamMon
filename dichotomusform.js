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
for(var i = 1; i <= 40; i++) {
    document.getElementById("f" + i).disabled = true;
}
document.getElementById("f1").disabled = false;
document.getElementById("f2").disabled = false;
document.getElementById("f1").parentNode.style.borderBottom = "2px solid #90C290";
document.getElementById("f2").parentNode.style.borderBottom = "2px solid #90C290";
function chooseNextQuestion(q_name, option) {
    if (q_name == "q1") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f3").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f4").disabled = false;
            document.getElementById("f4").parentNode.style.borderBottom = "2px solid #90C290";
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
            document.getElementById("f5").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f6").parentNode.style.borderBottom = "2px solid #90C290";
        }
        document.getElementById("f1").disabled = false;
        document.getElementById("f2").disabled = false;
    }
    if (q_name == "q2") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            document.getElementById("f7").disabled = false;
            document.getElementById("f8").disabled = false;
            document.getElementById("f7").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f8").parentNode.style.borderBottom = "2px solid #90C290";
        }
        if (option == "legs") {
            document.getElementById("f9").disabled = false;
            document.getElementById("f10").disabled = false;
            document.getElementById("f9").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f10").parentNode.style.borderBottom = "2px solid #90C290";
        }
        document.getElementById("f3").disabled = false;
        document.getElementById("f4").disabled = false;
    }
    if (q_name == "q3") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            document.getElementById("f11").disabled = false;
            document.getElementById("f12").disabled = false;
            document.getElementById("f11").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f12").parentNode.style.borderBottom = "2px solid #90C290";
        }
        if (option == "legs") {
            document.getElementById("f13").disabled = false;
            document.getElementById("f14").disabled = false;
            document.getElementById("f13").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f14").parentNode.style.borderBottom = "2px solid #90C290";
        }
        document.getElementById("f5").disabled = false;
        document.getElementById("f6").disabled = false;
    }
    if (q_name == "q4") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            alert("Clam");
            //CLAM
        }
        if (option == "legs") {
            document.getElementById("f15").disabled = false;
            document.getElementById("f16").disabled = false;
            document.getElementById("f15").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f16").parentNode.style.borderBottom = "2px solid #90C290";
        }
        document.getElementById("f7").disabled = false;
        document.getElementById("f8").disabled = false;
    }
    if (q_name == "q5") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            document.getElementById("f17").disabled = false;
            document.getElementById("f18").disabled = false;
            document.getElementById("f17").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f18").parentNode.style.borderBottom = "2px solid #90C290";
        }
        if (option == "legs") {
            document.getElementById("f19").disabled = false;
            document.getElementById("f20").disabled = false;
            document.getElementById("f19").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f20").parentNode.style.borderBottom = "2px solid #90C290";
        }
        document.getElementById("f9").disabled = false;
        document.getElementById("f10").disabled = false;
    }
    if (q_name == "q6") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            alert("Beetles")
            //Beetles
        }
        if (option == "legs") {
            document.getElementById("f21").disabled = false;
            document.getElementById("f22").disabled = false;
            document.getElementById("f21").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f22").parentNode.style.borderBottom = "2px solid #90C290";
        }
        document.getElementById("f11").disabled = false;
        document.getElementById("f12").disabled = false;
    }
    if (q_name == "q7") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            alert("Crawfish");
            //Crawfish
        }
        if (option == "legs") {
            document.getElementById("f23").disabled = false;
            document.getElementById("f24").disabled = false;
            document.getElementById("f23").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f24").parentNode.style.borderBottom = "2px solid #90C290";
        }
        document.getElementById("f13").disabled = false;
        document.getElementById("f14").disabled = false;
    }
    if (q_name == "q8") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            alert("Gilled Snail");
            //Gilled Snail
        }
        if (option == "legs") {
            alert("Lunged Snail");
            //Lunged Snail
        }
        document.getElementById("f15").disabled = false;
        document.getElementById("f16").disabled = false;
    }
    if (q_name == "q9") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            document.getElementById("f25").disabled = false;
            document.getElementById("f26").disabled = false;
            document.getElementById("f25").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f26").parentNode.style.borderBottom = "2px solid #90C290";
        }
        if (option == "legs") {
            alert("FlatWorm");
            //Flat Worm
        }
        document.getElementById("f17").disabled = false;
        document.getElementById("f18").disabled = false;
    }
    if (q_name == "q10") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            document.getElementById("f27").disabled = false;
            document.getElementById("f28").disabled = false;
            document.getElementById("f27").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f28").parentNode.style.borderBottom = "2px solid #90C290";
        }
        if (option == "legs") {
            alert("Most True Flies");
            //Most True Flies
        }
        document.getElementById("f19").disabled = false;
        document.getElementById("f20").disabled = false;
    }
    if (q_name == "q11") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            document.getElementById("f29").disabled = false;
            document.getElementById("f30").disabled = false;
            document.getElementById("f29").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f30").parentNode.style.borderBottom = "2px solid #90C290";
        }
        if (option == "legs") {
            document.getElementById("f31").disabled = false;
            document.getElementById("f32").disabled = false;
            document.getElementById("f31").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f32").parentNode.style.borderBottom = "2px solid #90C290";
        }
        document.getElementById("f21").disabled = false;
        document.getElementById("f22").disabled = false;
    }
    if (q_name == "q12") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            alert("Scud");
            //Scud
        }
        if (option == "legs") {
            alert("Sowbug");
            //Sowbug
        }
        document.getElementById("f23").disabled = false;
        document.getElementById("f24").disabled = false;
    }
    if (q_name == "q13") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            alert("Aquatic Worm");
            //Aquatic Worm
        }
        if (option == "legs") {
            alert("Leech");
            //Leech
        }
        document.getElementById("f25").disabled = false;
        document.getElementById("f26").disabled = false;
    }
    if (q_name == "q14") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            alert("Black Fly");
            //Black Fly
        }
        if (option == "legs") {
            alert("Midges");
            //Midges
        }
        document.getElementById("f27").disabled = false;
        document.getElementById("f28").disabled = false;
    }
    if (q_name == "q15") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            document.getElementById("f33").disabled = false;
            document.getElementById("f34").disabled = false;
            document.getElementById("f33").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f34").parentNode.style.borderBottom = "2px solid #90C290";
        }
        if (option == "legs") {
            document.getElementById("f35").disabled = false;
            document.getElementById("f36").disabled = false;
            document.getElementById("f35").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f36").parentNode.style.borderBottom = "2px solid #90C290";
        }
        document.getElementById("f29").disabled = false;
        document.getElementById("f30").disabled = false;
    }
    if (q_name == "q16") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            alert("Dragonfly and Damselfly");
            //Dragonfly and Damselfy
        }
        if (option == "legs") {
            alert("Most Caddisfly");
            //Most Caddisfly
        }
        document.getElementById("f31").disabled = false;
        document.getElementById("f32").disabled = false;
    }
    if (q_name == "q17") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            document.getElementById("f37").disabled = false;
            document.getElementById("f38").disabled = false;
            document.getElementById("f37").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f38").parentNode.style.borderBottom = "2px solid #90C290";
        }
        if (option == "legs") {
            document.getElementById("f39").disabled = false;
            document.getElementById("f40").disabled = false;
            document.getElementById("f39").parentNode.style.borderBottom = "2px solid #90C290";
            document.getElementById("f40").parentNode.style.borderBottom = "2px solid #90C290";
        }
        document.getElementById("f33").disabled = false;
        document.getElementById("f34").disabled = false;
    }
    if (q_name == "q18") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            alert("Mayfly");
            //Mayfly
        }
        if (option == "legs") {
            alert("Dragonfly and Damselfly");
            //Dragonfly and Damselfly
        }
        document.getElementById("f35").disabled = false;
        document.getElementById("f36").disabled = false;
    }
    if (q_name == "q19") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            alert("Stonefly");
            //Stonefly
        }
        if (option == "legs") {
            alert("Mayfly");
            //Mayfly
        }
        document.getElementById("f37").disabled = false;
        document.getElementById("f38").disabled = false;
    }
    if (q_name == "q20") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
            document.getElementById("f" + i).parentNode.style.border = "0";
        }
        if (option == "no-legs") {
            alert("Hellgrammites, Fishfly, Alderfly");
            //Hellgrammites, Fishfly, Alderfly
        }
        if (option == "legs") {
            alert("Common Netspinner");
            //Common Netspinner
        }
        document.getElementById("f39").disabled = false;
        document.getElementById("f40").disabled = false;
    }
};
