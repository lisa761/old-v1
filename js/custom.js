// console.log("HELLO");

var toggleLight = document.querySelector(".toggle-light");
// var toggleLightIcon = document.querySelector("#toggle-light");
var toggleLightIconSlider = document.querySelector("#toggle-light-slider");
var main = document.querySelector("#main");
var header = document.querySelector(".header-title");
var footer = document.querySelector("#bottom-bar");
var code = document.querySelectorAll("code");
var bottomActions = document.querySelectorAll(".post-action-btn");
var tags = document.querySelectorAll(".tag");

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
		code.forEach(function(cod) {
			if(cod.classList.contains("codeblock")) {
				cod.style.backgroundColor = "#9eabb3";
			}
			else {
				cod.style.backgroundColor = "rgb(21, 32, 43)";
			}
		});
		bottomActions.forEach(function(actions) {
			actions.style.backgroundColor = "rgb(21, 32, 43)";
		});
		tags.forEach(function(tag) {
			tag.style.backgroundColor = "rgb(21, 32, 43)";
		});
	} else {
		toggleLightIconSlider.classList.add("fa-toggle-off");
		toggleLightIconSlider.classList.remove("fa-toggle-on");
		main.style.backgroundColor = "#fff";
		header.style.backgroundColor = "#fff";
		if(footer) footer.style.backgroundColor = "#fff";
		code.forEach(function(cod) {
			cod.style.backgroundColor = "#f7f8f8";
		});
		bottomActions.forEach(function(actions) {
			actions.style.backgroundColor = "#fff";
		});
		tags.forEach(function(tag) {
			tag.style.backgroundColor = "#fff";
		});
	}
}, 100);
