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
function chooseNextQuestion(q_name, option) {
    if (q_name == "q1") {
        if (option == "no-legs") {
            for(var i = 1; i <= 40; i++) {
                document.getElementById("f" + i).disabled = true;
            }
        }
    }
};