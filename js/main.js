var pic = document.getElementById("pic");
var button = document.getElementById("button");

window.onload = start();

function changePic() {
    if (pic.style.visibility == "hidden") {
        pic.style.visibility = "visible";
        button.innerText = "Hide Picture";
        changeText();
    } else {
        pic.style.visibility = "hidden";
        button.innerText = "Show Picture";
        changeText();
    };
};

function changeText() {
    if (pic.style.visibility == "visible") {
       underText.style.visibility = "visible"; 
    } else {
        underText.style.visibility = "hidden";
    };
};

function start() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if (h > 12) { 
        document.getElementById("time").innerHTML = h - 12 + ":" + m + ":" + s + "PM" + "<hr>" + "Website developed by Kyle Beanblossom";
    } else {
        document.getElementById("time").innerHTML = h + ":" + m + ":" + s + "AM";
    };
    var t = setTimeout(start, 500);
};

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};