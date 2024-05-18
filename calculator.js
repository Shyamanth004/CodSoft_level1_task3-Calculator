var display = document.getElementById("display");
var buttons = document.querySelectorAll("button");
buttons.forEach(function(butt) {
    butt.addEventListener("click", function() {
        var ckbutt = butt.value;
        operate(ckbutt);
    });
});
let output = "";
function operate(ckbutt) {
    if (ckbutt === "DEL") {
        output = output.slice(0, -1);
    } else if (ckbutt === "AC") {
        output = "";
    } else if (ckbutt === "=") {
        try {
            output = eval(output);
        } catch (error) {
            output = "Error";
        }
    }else {
        output += ckbutt;
    }
    display.value = output;
};