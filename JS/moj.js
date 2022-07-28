
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
const historybtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const info = document.querySelector('.fa-question')
const modalShadow = document.querySelector('.modal-shadow')
const close = document.querySelector('.close')

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const faPaintbrush = document.querySelector('.fa-paintbrush')
const colors = document.querySelector('.colors')
const colorsflex = document.querySelector('.colorsflex')
let root = document.documentElement;

let countTime;
let minutes = 0;
let seconds = 0

let timesArr = []

const handleStart = () => {
    clearInterval(countTime)

    countTime = setInterval(() => {

        if (seconds < 9) {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`
        } else {
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`
        }

    }, 1000);

}

const handlePause = () => {
    clearInterval(countTime)
}


const handleStop = () => {

    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible'
        timesArr.push(stopwatch.textContent)
        console.log(timesArr)
    }


    clearStuff()
}


const handleReset = () => {
    time.style.visibility = 'hidden'
    timesArr = []
    clearStuff()

}

const clearStuff = (params) => {
    clearInterval(countTime)
    stopwatch.textContent = '0:00'
    timeList.textContent = ''
    seconds = 0;
    minutes = 0;
}


const showHistory = () => {
    timeList.textContent = ''
    let num = 1
    timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time} </span>`
        timeList.appendChild(newTime)
        num++
    })
}

const showModal = () => {
    if (!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block'
    } else {
        modalShadow.style.display = 'none'
    }

    modalShadow.classList.toggle('modal-animation')
}


const showColor = (params) => {
    colors.classList.toggle('colorsflex')
}

one.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'coral');
});

two.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'bisque');
});


three.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'gold');
});

four.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'forestgreen');
});



start.addEventListener('click', handleStart)
pause.addEventListener('click', handlePause)
stop.addEventListener('click', handleStop)
reset.addEventListener('click', handleReset)
historybtn.addEventListener('click', showHistory)
info.addEventListener('click', showModal)
close.addEventListener('click', showModal)
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false)
faPaintbrush.addEventListener('click', showColor)


