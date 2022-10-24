const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const archivBtn = document.querySelector('.archiv')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

let countTime
let minutes = 0
let seconds = 0



const handleStart = () => {
	clearInterval(countTime)

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopwatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopwatch.textContent = `${minutes}:00`
		}
	}, 50)
}

const handleStop = () => {
	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible'
		time.textContent = `Ostatni czas: ${stopwatch.textContent}`
	}

	clearInterval(countTime)
	stopwatch.textContent = '0:00'
	timeList.textContent = ''
	seconds = 0
	minutes = 0
}

const handlePause = () => {
	clearInterval(countTime)
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
