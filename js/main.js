var pic = document.getElementById("pic");
var button = document.getElementById("button");

button.addEventListener("click", changePic);
window.onload = startTime();

function changePic() {
    if (pic.style.visibility == "hidden") {
        pic.style.visibility = "visible";
        button.innerText = "Hide Picture"
    } else {
        pic.style.visibility = "hidden";
        button.innerText = "Show Picture";
    };
};

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if (h > 12) { 
        document.getElementById("time").innerHTML = h - 12 + ":" + m + ":" + s + "PM";
    } else {
        document.getElementById("time").innerHTML = h + ":" + m + ":" + s + "AM";
    };
    var t = setTimeout(startTime, 500);
};

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};