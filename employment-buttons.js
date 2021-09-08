let curr_descript = "descript1"

function buttonClicked(id) {
    if(id !== curr_descript) {
        document.getElementById(curr_descript).style.display = "none";
        document.getElementById(id).style.display = "block";
        curr_descript = id;
    }
}

buttonClicked("descript1");