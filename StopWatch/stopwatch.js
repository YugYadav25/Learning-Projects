let start = document.getElementById('play')
let stop = document.getElementById('pause')
let reset = document.getElementById('restart')
let display = document.querySelector('.timer-display')

let [seconds, minutes, hours] = [0, 0, 0]
let timer = null

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? '0' + hours : hours
    let m = minutes < 10 ? '0' + minutes : minutes
    let s = seconds < 10 ? '0' + seconds : seconds
    display.innerHTML = h + ':' + m + ':' + s;
}

function watchstart() {
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 1000)
}

function stoptimer() {
    clearInterval(timer)
    timer = null
}

function resettimer() {
    clearInterval(timer)
    ;[seconds, minutes, hours] = [0, 0, 0]
    display.innerHTML = "00:00:00"
    timer = null
}

start.addEventListener("click", watchstart)
stop.addEventListener("click", stoptimer)
reset.addEventListener("click", resettimer)
