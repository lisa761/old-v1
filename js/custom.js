// console.log("HELLO");

var toggleLight = document.querySelector(".toggle-light");
// var toggleLightIcon = document.querySelector("#toggle-light");
var toggleLightIconSlider = document.querySelector("#toggle-light-slider");
var main = document.querySelector("#main");
var header = document.querySelector(".header-title");
var footer = document.querySelector("#bottom-bar");

toggleLight.addEventListener("click", function() {
	// console.log("CLICKED!");
	// toggleLightIcon.classList.toggle("fa-sun");
	// toggleLightIcon.classList.toggle("fa-moon");
	toggleLightIconSlider.classList.toggle("fa-toggle-off");
	toggleLightIconSlider.classList.toggle("fa-toggle-on");
	var day = sessionStorage.getItem('day')
	if(!day || day == 'true') {
		sessionStorage.setItem('day', 'false');
	} else {
		sessionStorage.setItem('day', 'true');
	}
});
setInterval(function() { 
	if(sessionStorage.getItem('day') == "false") {
		toggleLightIconSlider.classList.remove("fa-toggle-off");
		toggleLightIconSlider.classList.add("fa-toggle-on");
		main.style.backgroundColor = "#181818";
		header.style.backgroundColor = "#181818";
		if(footer) footer.style.backgroundColor = "#181818";

		$('code.codeblock').css('background-color', '#9eabb3');
		$('code:not(.codeblock)').css('background-color', 'rgb(21, 32, 43)');
		$('.post-action-btn').css('background-color', 'rgb(21, 32, 43)');
		$('.tag').css('background-color', 'rgb(21, 32, 43)');

		$('p').css('font-family', 'Merriweather,serif');
		$('p').css('color', '#767D92');
		$('ul').css('color', '#767D92');
		$('h1').css('color', '#9098b0');
		$('h2').css('color', '#9098b0');
		$('h3').css('color', '#9098b0');
	} else {
		toggleLightIconSlider.classList.add("fa-toggle-off");
		toggleLightIconSlider.classList.remove("fa-toggle-on");
		main.style.backgroundColor = "#fff";
		header.style.backgroundColor = "#fff";
		if(footer) footer.style.backgroundColor = "#fff";

		$('code').css('background-color', '#f7f8f8');
		$('.post-action-btn').css('background-color', '#fff');
		$('.tag').css('background-color', '#fff');

		$('p').css('font-family', 'Merriweather,serif');
		$('p').css('color', '#5d686f');
		$('ul').css('color', '#5d686f');
		$('h1').css('color', '#4a4a4a');
		$('h2').css('color', '#4a4a4a');
		$('h3').css('color', '#4a4a4a');
	}
}, 100);
