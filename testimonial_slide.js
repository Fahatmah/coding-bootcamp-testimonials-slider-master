let slidesPosition = 0
let textsPosition = 0
const slides = document.getElementsByClassName('slide__item')
const texts = document.getElementsByClassName('text__item')
const totalSlides = slides.length
const totalTexts = texts.length
const prevButton = document.getElementById('prevBtn')
const nextButton = document.getElementById('nextBtn')

nextButton.addEventListener('click', () => {
	nextSlide()
})

prevButton.addEventListener('click', () => {
	prevSlide()
})

function updateSlidesPosition() {
	for (let slide of slides) {
		slide.classList.remove('current--visible')
	}

	slides[slidesPosition].classList.add('current--visible')
}

function updateTextsPosition() {
	for (let text of texts) {
		text.classList.remove('current--visible')
	}

	texts[textsPosition].classList.add('current--visible')
}

function nextSlide() {
	if (slidesPosition == totalSlides - 1 && textsPosition == totalTexts - 1) {
		slidesPosition = 0
		textsPosition = 0
	} else {
		slidesPosition++
		textsPosition++
	}
	updateSlidesPosition()
	updateTextsPosition()
}

function prevSlide() {
	if (slidesPosition == 0 && textsPosition == 0) {
		slidesPosition = totalSlides - 1
		textsPosition = totalTexts - 1
	} else {
		slidesPosition--
		textsPosition--
	}
	updateSlidesPosition()
	updateTextsPosition()
}
