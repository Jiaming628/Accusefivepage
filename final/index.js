/* ------------ Mobile Menu ------------ */
const mobileMenu = document.querySelector('.mobileMenu')
const menuItems = document.querySelectorAll('.mobileMenuItem')
const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.closeIcon')
const menuIcon = document.querySelector('.menuIcon')

function toggleMenu() {
	if (mobileMenu.classList.contains('showMenu')) {
		mobileMenu.classList.remove('showMenu')

		// Check if elements are found before accessing their styles
		if (closeIcon) {
			closeIcon.style.display = 'none'
		} else {
			console.error('closeIcon not found!')
		}

		if (menuIcon) {
			menuIcon.style.display = 'block'
		} else {
			console.error('menuIcon not found!')
		}
	} else {
		mobileMenu.classList.add('showMenu')

		if (closeIcon) {
			closeIcon.style.display = 'block'
		} else {
			console.error('closeIcon not found!')
		}

		if (menuIcon) {
			menuIcon.style.display = 'none'
		} else {
			console.error('menuIcon not found!')
		}
	}
}

hamburger.addEventListener('click', toggleMenu)

menuItems.forEach(function (menuItem) {
	menuItem.addEventListener('click', toggleMenu)
})

// Video Player
var v = document.getElementById('home-video')
v.onclick = function () {
	if (v.paused) {
		v.play()
	} else {
		v.pause()
	}
}

// MUSIC RECORDS TEXT
const records = document.getElementById('music-records')

function hideRecordsText() {
	records.style.display = 'none'
}

if (records) {
	records.addEventListener('click', hideRecordsText)
} else {
	console.error('records text not found!')
}
