const rex = document.querySelector('#rex');
const bg = document.querySelector('.bg');
const bgBottom = document.querySelector('.bg--bottom');
const sun = document.querySelector('.sun--money');
const money = document.querySelector('.money');

const buttonPause = document.querySelector('.navigation--pause');
const buttonPlay = document.querySelector('.navigation--play');

const monster = document.querySelectorAll('.monster');
const batterfly = document.querySelectorAll('.batterfly');
const lava = document.querySelectorAll('.lava');

const rex__run = document.querySelector('.rex--run');
const rex__over = document.querySelector('.rex--over');
const rex__vin = document.querySelector('.rex--vin');

//----------------------REX-START-----------------------
const rex__start = document.querySelector('.rex--start');
if (rex__start) {
	let stepTwo = document.querySelector('.step--two');
	let stepThree = document.querySelector('.step--three');
	let stepFour = document.querySelector('.step--four');
	let stepFive = document.querySelector('.step--five');
	let stepSix = document.querySelector('.step--six');
	let stepSeven = document.querySelector('.step--seven');

	if (stepTwo) {
		stepTwo.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.chat--one').style.visibility = 'hidden';
			document.querySelector('.chat--one').style.opacity = '0';
			document.querySelector('.chat--two').style.visibility = 'visible';
			document.querySelector('.chat--two').style.opacity = '1';
		})
	}

	if (stepThree) {
		stepThree.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.chat--two').style.visibility = 'hidden';
			document.querySelector('.chat--two').style.opacity = '0'; 
			document.querySelector('.chat--two').style.transitionDelay = '0s'; 
			document.querySelector('.chat--three').style.visibility = 'visible';
			document.querySelector('.chat--three').style.opacity = '1';
		})
	}

	if (stepFour) {
		stepFour.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.chat--three').style.visibility = 'hidden';
			document.querySelector('.chat--three').style.opacity = '0'; 
			document.querySelector('.chat--three').style.transitionDelay = '0s'; 
			document.querySelector('.chat--four').style.visibility = 'visible';
			document.querySelector('.chat--four').style.opacity = '1';
		})
	}

	if (stepFive) {
		stepFive.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.chat--four').style.visibility = 'hidden';
			document.querySelector('.chat--four').style.opacity = '0'; 
			document.querySelector('.chat--four').style.transitionDelay = '0s'; 
			document.querySelector('.chat--five').style.visibility = 'visible';
			document.querySelector('.chat--five').style.opacity = '1';
		})
	}

	if (stepSix) {
		stepSix.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.chat--five').style.visibility = 'hidden';
			document.querySelector('.chat--five').style.opacity = '0'; 
			document.querySelector('.chat--five').style.transitionDelay = '0s'; 
			document.querySelector('.chat--six').style.visibility = 'visible';
			document.querySelector('.chat--six').style.opacity = '1';
		})
	}

	if (stepSeven) {
		stepSeven.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.chat--six').style.visibility = 'hidden';
			document.querySelector('.chat--six').style.opacity = '0'; 
			document.querySelector('.chat--six').style.transitionDelay = '0s'; 
			document.querySelector('.chat--seven').style.visibility = 'visible';
			document.querySelector('.chat--seven').style.opacity = '1';
		})
	}

	var tl = gsap.timeline();
	tl.to("#rex--vin-right", { 
		y: 0,
		x: -25,
		rotation: -25,
		repeat: -1,
	}) 
}
//----------------------PAUSE START-----------------------
if (!rex__start) {
	document.addEventListener('keypress', function(event) { 
		if(event.code === 'Space') {
			jump();
		} else if (event.code === 'KeyP') {
			pause();
		} else if (event.code === 'KeyS') {
			play();
		}
	});

	buttonPause.addEventListener('click', function(event) {
		event.preventDefault();
		pause();
	})

	buttonPlay.addEventListener('click', function(event) {
		event.preventDefault();
		play();
	})
}

function pause() {
	if (!bg.classList.contains('bg--stop')) {
		monster.forEach(item => {
			item.classList.add('cactus--stop');
		})
		batterfly.forEach(item => {
			item.classList.add('batterfly--stop');
		})
		lava.forEach(item => {
			item.classList.add('lava--stop');
		})
		bg.classList.add('bg--stop');
		bgBottom.classList.add('bg--stop');
		rex__run.classList.add('rex--run-error');
		rex__vin.classList.add('rex--vin-active');

		buttonPause.classList.add('navigation--off');
		buttonPlay.classList.add('navigation--active');
		buttonPause.classList.remove('navigation--active');
		buttonPlay.classList.remove('navigation--off');
	}
}

function play() {
	if (bg.classList.contains('bg--stop')) {
		monster.forEach(item => {
			item.classList.remove('cactus--stop');
		})
		batterfly.forEach(item => {
			item.classList.remove('batterfly--stop');
		})
		lava.forEach(item => {
			item.classList.remove('lava--stop');
		})

		bg.classList.remove('bg--stop');
		bgBottom.classList.remove('bg--stop');
		rex__run.classList.remove('rex--run-error');
		rex__vin.classList.remove('rex--vin-active');

		buttonPause.classList.add('navigation--active');
		buttonPlay.classList.add('navigation--off');
		buttonPlay.classList.remove('navigation--active');
		buttonPause.classList.remove('navigation--off');
	}
}

//----------------------JUMP-----------------------
if (!rex__start) {
	let i = 1;
	function jump() {
		if (!bg.classList.contains('bg--stop') && !rex.classList.contains('jump')) {
			if (rex.classList !='jump') {
				rex.classList.add('jump')
			}
		
			setTimeout( function() {
				if(money.classList.contains('money--active')) {
					if (document.querySelector('.one')) {
						document.querySelector('.sun--money span').innerHTML = i++;
					} else if (document.querySelector('.two')) {
						document.querySelector('.sun--money span').innerHTML = 10 + i++;
					}else if (document.querySelector('.three')) {
						document.querySelector('.sun--money span').innerHTML = 20 + i++;
					} else if (document.querySelector('.four')) {
						document.querySelector('.sun--money span').innerHTML = 30 + i++;
					}  else if (document.querySelector('.five')) {
						document.querySelector('.sun--money span').innerHTML = 40 + i++;
					} 
					if(i >= 11) {
						document.querySelector('.next').classList.add('active');
						monster.forEach(item => {
							item.classList.add('cactus--stop');
						})
						batterfly.forEach(item => {
							item.classList.add('batterfly--stop');
						})
						lava.forEach(item => {
							item.classList.add('lava--stop');
						})
						bg.classList.add('bg--stop');
						if (bgBottom) { bgBottom.classList.add('bg--stop'); }
						rex__run.classList.add('rex--run-error');
						rex__vin.classList.add('rex--vin-active');
					}
				}
				rex.classList.remove('jump')
			}, 1000)
		}
	}
}

//----------------------MONSTER-----------------------
if (monster) {
	monster.forEach(item => {
		let isAlive = setInterval(function() {
			let rexTop = parseInt(window.getComputedStyle(rex).getPropertyValue('bottom'))
			let monsterLeft = parseInt(window.getComputedStyle(item).getPropertyValue('left'))
			if (monsterLeft < 120 && monsterLeft > 0 && rexTop <= 250) {
				monsterStop();
			} else if (monsterLeft < 130 && rexTop <= 230) {
				moneyActive();
			}
		}, 10)
	});
}
//----------------------LAVA-----------------------
if (lava) {
	lava.forEach(item => {
		console.log(item)
		let isAlive = setInterval(function() {
			let rexTop = parseInt(window.getComputedStyle(rex).getPropertyValue('bottom'))
			let lavaLeft = parseInt(window.getComputedStyle(item).getPropertyValue('left'))
			if (lavaLeft < 100 && lavaLeft > -200 && rexTop <= 170) {
				monsterStop();
			} else if (lavaLeft < 100 && rexTop <= 230) {
				moneyActive();
			}
		}, 10)
	});
}

//----------------------JUMP MONSTER STOP----------------------
function monsterStop() {
	document.querySelector('.over').classList.add('active');
	monster.forEach(item => {
		item.classList.add('cactus--stop');
	})
	lava.forEach(item => {
		item.classList.add('lava--stop');
	})
	bg.classList.add('bg--stop');
	bgBottom.classList.add('bg--stop');
	rex__run.classList.add('rex--run-error');
	rex__over.classList.add('rex--over-active');
}

//----------------------JUMP BUTTERFLY-----------------------
if (batterfly) {
	batterfly.forEach(item => {
		let isAlive = setInterval(function() {
			let rexTop = parseInt(window.getComputedStyle(rex).getPropertyValue('bottom'))
			let batterflyLeft = parseInt(window.getComputedStyle(item).getPropertyValue('left'))
			if (batterflyLeft < 70 && batterflyLeft > 0 && rexTop >= 350) {
				moneyActive();
				item.classList.add('batterfly--delete');
				
				setTimeout( function() {
					if (!bg.classList.contains('bg--stop')) {
						item.classList.remove('batterfly--delete');
					}
				}, 2000)
				
			}
		}, 10)
	});
}

//----------------------MONEY-----------------------
function moneyActive() {
	if (!bg.classList.contains('bg--stop')) {
		sun.classList.add('sun-money--active');
		money.classList.add('money--active');

		setTimeout( function() {
			money.classList.remove('money--active');
		}, 700)
	}
}

//----------------------GAME OVER-----------------------
const button = document.querySelector('.button');
if (button) {
	button.addEventListener('click', function(event) {
		document.querySelector('.active').classList.remove('active');
		location.reload();
	});
}

var tl = gsap.timeline();
//----------------------REX-VIN-----------------------
tl.to("#rex--vin-right", { y: 0, x: -25, rotation: -25, yoyo: true, ease: "linear", repeat: -1 }, '<')

//----------------------REX-RUN-----------------------
.to("#right", { y: -18, x: -15, rotation: 65, yoyo: true, ease: "linear", repeat: -1 }, '<') 
.to("#left", { y: 52, x: 52, rotation: -90, yoyo: true, ease: "linear", repeat: -1 }, '<')
.to("#handRight", { y: -55, x: 20, rotation: 45, yoyo: true, ease: "linear", repeat: -1 }, '<') 
.to("#handLeft", { y: 55, x: 16, rotation: -45, yoyo: true, ease: "linear", repeat: -1 }, '<')

//----------------------REX-OVER-----------------------
.to("#rex--over-left", { y: 0, x: 0, rotation: 25, yoyo: true, ease: "linear", repeat: -1 }, '<') 
.to("#rex--over-rightHand", { y: 0, x: 0, rotation: -25, yoyo: true, ease: "linear", repeat: -1, }, '<') 
.to("#rex--over-leftHand", { y: -15, x: 25, rotation: 25, yoyo: true, ease: "linear", repeat: -1 }, '<')

//----------------------REX-OVER-----------------------
.to("#batterflyLeft", { x: 115, scaleX: .4, yoyo: true, ease: "linear", repeat: -1, }, '<') 
.to("#batterflyRight", {  x: 0, scaleX: .4, yoyo: true, ease: "linear", repeat: -1 }, '<') 

.to("#batterflyLeft4", { x: 135, scaleX: .4, yoyo: true, ease: "linear", repeat: -1 }, '<') 
.to("#batterflyRight4", { x: 0, scaleX: .4, yoyo: true, ease: "linear", repeat: -1 }, '<') 


