function clicked(){
    document.getElementById("data_form").createAttribute("hidden");
}
document.getElementById("main_form").onsubmit = clicked();
