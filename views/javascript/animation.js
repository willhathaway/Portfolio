$(document).ready(function() {

    console.log("animation loaded");

    let name = "william daniel hathaway";

    let nameArray = name.toUpperCase().split('');

    for (let i = 0; i < 23; i++) {
        let y = i+1;
        if (y == 1 || y == 2 || y == 3 ||y == 9 || y == 21 || y == 22 || y == 23) {
            $(".animate").append(this["div"+(i+1)] = $("<div class='ww letterDiv' id = 'div" + (i+1) + "' >"));
        } else {
            $(".animate").append(this["div"+(i+1)] = $("<div class='nw letterDiv' id = 'div" + (i+1) + "' >"));
        }
    }

    for (let i = 0; i < nameArray.length; i++) {
        $('#div' + (i+1)).html(nameArray[i]);
    }
    

})