document.addEventListener("mousemove",parallax);
function parallax(e) {
    document.querySelectorAll(".planets").forEach(function(move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value)/50;
        var y = (e.clientY * moving_value)/100;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
}


async function disapearPlanets(e) {
    let i = -1;
    document.removeEventListener("mousemove",parallax);
    document.querySelectorAll(".planets").forEach(function(move) {
        var moving_value = move.getAttribute("data-value");
        var x = 4000 * i;
        var y = 4000 * i;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        move.style.transition = "transform ease-in-out 3s"
        i = -1 * i;
    });

    await timeout(2000);

    const el = document.querySelector("#nomad_icon");
        el.style.zIndex="999"
        el.style.transform = "scale(10)";
        el.style.filter = "brightness(0)";
        el.style.transition = "filter ease-out 1.9s, transform ease-in-out 2s";

    await timeout(2000);
    console.log("tests");
    window.open("pages/kids.html","_self");
    



   
    
}

function timeout(ms) {
    return new Promise(res => setTimeout(res,ms));
}

function whiteOut() {
    return new Promise(() =>  setTimeout(() => {
        
        
},2000));
}