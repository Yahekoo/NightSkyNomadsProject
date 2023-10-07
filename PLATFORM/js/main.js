document.addEventListener("mousemove",parallax);
function parallax(e) {
    document.querySelectorAll(".planets").forEach(function(move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value)/50;
        var y = (e.clientY * moving_value)/100;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
}