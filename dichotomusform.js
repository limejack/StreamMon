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

function chooseNextQuestion(q_name, option) {
    if (q_name == "q1") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f1").disabled = false;
        document.getElementById("f2").disabled = false;
    }
    if (q_name == "q2") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f7").disabled = false;
            document.getElementById("f8").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f9").disabled = false;
            document.getElementById("f10").disabled = false;
        }
        document.getElementById("f3").disabled = false;
        document.getElementById("f4").disabled = false;
    }
    if (q_name == "q3") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f11").disabled = false;
            document.getElementById("f12").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f13").disabled = false;
            document.getElementById("f14").disabled = false;
        }
        document.getElementById("f5").disabled = false;
        document.getElementById("f6").disabled = false;
    }
    if (q_name == "q4") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            //CLAM
        }
        if (option == "legs") {
            document.getElementById("f15").disabled = false;
            document.getElementById("f16").disabled = false;
        }
        document.getElementById("f7").disabled = false;
        document.getElementById("f8").disabled = false;
    }
    if (q_name == "q5") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f9").disabled = false;
        document.getElementById("f10").disabled = false;
    }
    if (q_name == "q6") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f11").disabled = false;
        document.getElementById("f12").disabled = false;
    }
    if (q_name == "q7") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f13").disabled = false;
        document.getElementById("f14").disabled = false;
    }
    if (q_name == "q8") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f15").disabled = false;
        document.getElementById("f16").disabled = false;
    }
    if (q_name == "q9") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f17").disabled = false;
        document.getElementById("f18").disabled = false;
    }
    if (q_name == "q10") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f19").disabled = false;
        document.getElementById("f20").disabled = false;
    }
    if (q_name == "q11") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f21").disabled = false;
        document.getElementById("f22").disabled = false;
    }
    if (q_name == "q12") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f23").disabled = false;
        document.getElementById("f24").disabled = false;
    }
    if (q_name == "q13") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f25").disabled = false;
        document.getElementById("f26").disabled = false;
    }
    if (q_name == "q14") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f27").disabled = false;
        document.getElementById("f28").disabled = false;
    }
    if (q_name == "q15") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f29").disabled = false;
        document.getElementById("f30").disabled = false;
    }
    if (q_name == "q16") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f31").disabled = false;
        document.getElementById("f32").disabled = false;
    }
    if (q_name == "q17") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f33").disabled = false;
        document.getElementById("f34").disabled = false;
    }
    if (q_name == "q18") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f35").disabled = false;
        document.getElementById("f36").disabled = false;
    }
    if (q_name == "q19") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f37").disabled = false;
        document.getElementById("f38").disabled = false;
    }
    if (q_name == "q20") {
        for(var i = 1; i <= 40; i++) {
            document.getElementById("f" + i).disabled = true;
        }
        if (option == "no-legs") {
            document.getElementById("f3").disabled = false;
            document.getElementById("f4").disabled = false;
        }
        if (option == "legs") {
            document.getElementById("f5").disabled = false;
            document.getElementById("f6").disabled = false;
        }
        document.getElementById("f39").disabled = false;
        document.getElementById("f40").disabled = false;
    }
};
