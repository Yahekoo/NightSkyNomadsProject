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

    playClick();
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
    e === "goto_kids" ? window.open("pages/kids.html","_self") : window.open("pages/young_learners.html","_self") ;
    



   
    
}


function start(e) {

    switch (e) {
        case 'glasses':
            window.open("glasses.html","_self");
          break;
        case 'information':
            window.open("information.html","_self");
            break;
        case 'quiz':
            window.open("quiz.html","_self")
          break;
        case 'simulation':
            window.open("simulation.html","_self")
          break;
          case 'calendar':
            window.open("calendar.html","_self")
          break;
          case 'home':
            window.open("../index.html","_self")
          break;
    
      }

}

function timeout(ms) {
    return new Promise(res => setTimeout(res,ms));
}

function whiteOut() {
    return new Promise(() =>  setTimeout(() => {
        
        
},2000));
}


 function playHover() {
    document.getElementById('audio_hover').play();
}

 function playClick() {
    document.getElementById('audio_click').play();
}


