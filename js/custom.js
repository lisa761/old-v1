// console.log("HELLO");

var toggleLight = document.querySelector(".toggle-light");
var toggleLightIcon = document.querySelector("#toggle-light");
var main = document.querySelector("#main");
var header = document.querySelector(".header-title");
var footer = document.querySelector("#bottom-bar");
var code = document.querySelectorAll("code");
var bottomActions = document.querySelectorAll(".post-action-btn");
var tags = document.querySelectorAll(".tag");

toggleLight.addEventListener("click", function() {
	// console.log("CLICKED!");
	toggleLightIcon.classList.toggle("fa-sun");
	toggleLightIcon.classList.toggle("fa-moon");
	var day = sessionStorage.getItem('day')
	if(!day || day == 'true') {
		sessionStorage.setItem('day', 'false');
	} else {
		sessionStorage.setItem('day', 'true');
	}
	// if(toggleLightIcon.classList.contains("fa-moon")) {
	// if(sessionStorage.getItem('day') == "false") {
	// 	console.log("YESS");
	// 	main.style.backgroundColor = "#181818";
	// 	header.style.backgroundColor = "#181818";
	// 	if(footer) footer.style.backgroundColor = "#181818";
	// 	code.forEach(function(cod) {
	// 		if(cod.classList.contains("codeblock")) {
	// 			cod.style.backgroundColor = "#9eabb3";
	// 		}
	// 		else {
	// 			cod.style.backgroundColor = "rgb(21, 32, 43)";
	// 		}
	// 	});
	// 	bottomActions.forEach(function(actions) {
	// 		actions.style.backgroundColor = "rgb(21, 32, 43)";
	// 	});
	// 	tags.forEach(function(tag) {
	// 		tag.style.backgroundColor = "rgb(21, 32, 43)";
	// 	});
	// } else {
	// 	// #f7f8f8
	// 	main.style.backgroundColor = "#fff";
	// 	header.style.backgroundColor = "#fff";
	// 	footer.style.backgroundColor = "#fff";
	// 	code.forEach(function(cod) {
	// 		cod.style.backgroundColor = "#f7f8f8";
	// 	});
	// }
});
setInterval(function() { 
	if(sessionStorage.getItem('day') == "false") {
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
		main.style.backgroundColor = "#fff";
		header.style.backgroundColor = "#fff";
		footer.style.backgroundColor = "#fff";
		code.forEach(function(cod) {
			cod.style.backgroundColor = "#f7f8f8";
		});
	}
}, 500);
// setInterval(function() { 
// 	console.log(sessionStorage.getItem('day'));
// }, 1000);
