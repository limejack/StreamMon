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
            var x = document.querySelectorAll("li");
            for (let i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "red";
            }
        } else {

        }
    }
};