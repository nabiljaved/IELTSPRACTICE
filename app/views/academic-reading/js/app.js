var time = null;
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var openNav = document.querySelector(".open");
var btnStartTest = document.getElementById('section_main_page_heading_button');
const listItems = document.querySelectorAll('.main-menu li')
const contents = document.querySelectorAll('.content')
const intro = document.querySelector(".start_test");
const controller = document.querySelector(".time_controller");
const play = document.querySelector(".time_controller_icon_play");
const stop = document.querySelector(".time_controller_icon_stop");
const pause = document.querySelector(".time_controller_icon_pause");
var initialTime = null;

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('time').innerHTML = '' + '0:00';
    controller.style.visibility = 'hidden'
});


toggleButton.addEventListener("click", function() {

    mobileNav.classList.toggle("open");
    
  });

  btnStartTest.addEventListener("click", function() {

    mobileNav.classList.toggle("open");
    
  });



listItems.forEach((item, index) => {
	item.addEventListener('click', () => {
        mobileNav.classList.remove("open")
        controller.style.visibility = 'visible'
        clearTimer()
        hideAllContents()
        hideIntroScreen()

		contents[index].classList.add('show')
	})
})


function hideAllContents() {
	contents.forEach((content) => {
		content.classList.remove('show')
	})
}

function hideIntroScreen()
{
    intro.style.display = "none"; 
}
  
initialTime = Date.now();

function checkTime(){
 
 var timeDifference = Date.now() - initialTime;
 var formatted = convertTime(timeDifference);
 document.getElementById('time').innerHTML = '' + formatted;
}

function convertTime(miliseconds) {
var totalSeconds = Math.floor(miliseconds/1000);
var minutes = Math.floor(totalSeconds/60);
var seconds = totalSeconds - minutes * 60;
return minutes + ':' + seconds;
}

play.addEventListener("click", function(){
  time = setInterval(checkTime, 100);
})

stop.addEventListener("click", function(){
    clearInterval(time);
})

pause.addEventListener("click", function(){
  clearInterval(time);
  initialTime = Date.now();
  time = setInterval(checkTime, 100);
})

function clearTimer()
{
  document.getElementById('time').innerHTML = '' + '0:00';
  clearInterval(time);
  initialTime = Date.now();
}
