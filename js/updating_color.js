function renderColorPicker() {
    var template = document.getElementById("fav-color");
    template.removeAttribute("hidden");
}

//gets called when a color is clicked
function updateColor(name) {
    color_data.forEach(function(arr_data) {

        //check name against color data
        if (name == arr_data.name) {

            //and change current color data to match the selected color information
            data.current_color.color = arr_data.color_code;
            data.current_color.off_color = arr_data.off_color_code;
            data.current_color.name = arr_data.name;

        }
    });
}

//changes color of all items in the html with a specific class
function changeColor() {

    var elements = document.getElementsByClassName("color");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = data.current_color.color;
    }

    var elements = document.getElementsByClassName("border-color");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.borderColor = data.current_color.color;
    }

    var elements = document.getElementsByClassName("off-color");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = data.current_color.off_color;
    }

}

//closes the modal when update button is clicked
function updateColorClicked() {
    changeColor();
    document.getElementById("fav-color").setAttribute("hidden", "hidden");
    modal.classList.add("fade-out");
    document.body.style.backgroundImage = "none";
}


