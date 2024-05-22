let [sec,min,hour] = [0,0,0]
let timer = document.getElementById("timer")
var interval = null;

var start = document.querySelector("#start")
var stop = document.querySelector("#stop")
var restart = document.querySelector("#restart")



// function for stopwatch
function stopWatch(){
    sec++;
    if(sec===60){
        sec = 0;
        min++;
        if(min===60){
            min = 0;
            hour++;
        }
    }
    var h = hour < 10 ? "0" + hour : hour
    var m = min < 10 ? "0" + min : min
    var s = sec < 10 ? "0" + sec : sec

    timer.innerHTML = h + ":" + m + ":" + s
}

// function for click_event

function watchStart(){
    if(interval !== null){
        clearInterval(interval)
    }
    interval = setInterval(stopWatch,1000)
}

// function to stopWatch

function watchStop(){
    clearInterval(interval)
}

//  function to restart

function watchRestart(){
    clearInterval(interval);
    [sec, min, hour] = [0,0,0];
    timer.innerHTML = "00:00:00"

}


// add event listener to start
start.addEventListener("click",watchStart)

// add event listener to stop
stop.addEventListener("click",watchStop)

// add event listener to restart

restart.addEventListener("click",watchRestart)

