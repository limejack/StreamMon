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
};
