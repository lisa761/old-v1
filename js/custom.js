// var height = screen.height;
// console.log(height);
// // $('body').css('background-color', 'black');

// function()

// if($('#sidebar').hasClass('pushed')) {
// 	console.log('true');
// 	$('body').css('position', 'fixed');
// 	// $('body').css('background-color', 'black');
// } else console.log('false');

// var width = screen.width;

// if(width <= 770) {
// 	$('#sidebar').css('height', '700px');
// 	$('#sidebar').css('overflow-y', 'auto');
// 	$('body').css('position', 'fixed');
// }

// swipeSidebarToRight: function () {
// 	var t = this;
// 	this.$sidebar.hasClass("pushed") || this.$sidebar.hasClass("processing") || (this.$sidebar.addClass("processing pushed"), this.$body.css("overflow-x", "hidden"), setTimeout(function () {
// 		t.$sidebar.removeClass("processing")
// 		$('#main').css('position', 'fixed');
// 	}, 250))
// }

// function (s) {
// 	"use strict";

// 	function t() {
// 		this.$sidebar = s("#sidebar"), this.$openBtn = s("#btn-open-sidebar"), this.$closeBtn = s("#header, #main, .post-header-cover"), this.$blog = s(".post-bottom-bar, #header, #main, .post-header-cover"), this.$body = s("body"), this.mediumScreenWidth = 768
// 	}
// 	t.prototype = {
// 		swipeSidebarToRight: function () {
// 			var t = this;
// 			this.$sidebar.hasClass("pushed") || this.$sidebar.hasClass("processing") || (this.$sidebar.addClass("processing pushed"), this.$body.css("overflow-x", "hidden"), setTimeout(function () {
// 				t.$sidebar.removeClass("processing");
// 				$('#main').css('position', 'fixed');
// 			}, 250))
// 		},
// 		swipeSidebarToLeft: function () {
// 			this.$sidebar.hasClass("pushed") && !this.$sidebar.hasClass("processing") && (this.$sidebar.addClass("processing").removeClass("pushed processing"), this.$body.css("overflow-x", "auto"))
// 		}
// 	}, s(document).ready(function () {
// 		(new t).run()
// 	})
// }
