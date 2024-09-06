function mudaCor(color) {
    color = color.toLowerCase();

    let bgColor = document.getElementById("color");

    switch (color) {
        case "red":
            bgColor = "red";
            break;
        case "blue":
            bgColor = "blue";
            break;
        case "orange":
            bgColor = "orange";
            break;    
        case "green":
            bgColor = "green";
            break;
        case "yellow":
            bgColor = "yellow";
            break;
        default:
            bgColor = "white";
    }

    document.getElementById("color").style.backgroundColor = bgColor; 
}

