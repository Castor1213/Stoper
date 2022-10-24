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

let timeArr = []

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
	}, 1000)
}

const handleStop = () => {
	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible'
		time.textContent = `Ostatni czas: ${stopwatch.textContent}`
		timeArr.push(stopwatch.textContent)
	}

	clearStuff()
}

const handlePause = () => {
	clearInterval(countTime)
}

const handleReset = () => {
	clearStuff()
	time.style.visibility = 'hidden'
	timeArr = []

}

const clearStuff = () => {
	clearInterval(countTime)
	stopwatch.textContent = '0:00'
	timeList.textContent = ''
	seconds = 0
	minutes = 0
}

const handleArchiv = () => {
let num = 1
timeList.textContent = ''

	timeArr.forEach(time => {
		const newTime = document.createElement('li')
		newTime.innerHTML = `Pomiar nr ${num++}: <span>${time}</span>`
		timeList.appendChild(newTime)

	})
}

const handleModal = () => {
	modalShadow.style.display = 'block'
	modalShadow.classList.toggle('modal-animation')
}

const closeModal = () => {
	modalShadow.style.display = 'none'
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
archivBtn.addEventListener('click', handleArchiv)
infoBtn.addEventListener('click', handleModal)
closeModalBtn.addEventListener('click', closeModal)
