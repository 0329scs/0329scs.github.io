window.onload = function() {
	var globalBg = document.querySelector(".global_bg");

	btnWork();

	function btnWork() {
		var headLogo = globalBg.querySelector(".h_logo");

		headLogo.addEventListener("click", navWork);
		headLogo.addEventListener("mouseover", borderWork);
		headLogo.addEventListener("mouseout", borderWork);

		aniWork();

		function aniWork() {
			var aniLogo = headLogo.querySelector(".ani_logo");
			aniLogo.classList.add("act");
		}
		function navWork() {
			console.log("nav");
			if(globalBg.classList.contains("nav_open")) {
				globalBg.classList.remove("nav_open");
			} else {
				globalBg.classList.add("nav_open");
			}
		}
		function borderWork() {
			console.log("border");
			if(globalBg.classList.contains("nav_open")) {
				return;
			} else if(globalBg.classList.contains("mouse_over")) {
				globalBg.classList.remove("mouse_over");
			} else {
				globalBg.classList.add("mouse_over");
			}
		}
	}
	
	scrollWork();

	function scrollWork() {
		var conDish = globalBg.querySelector(".contents_dish");
		var flag = false;
		var count = 0;
		var frameWork = $(".contents_dish").on("mousewheel DOMMouseScroll", function(e) {
			var offset = $(".contents_dish").offset();
			var eventValues = e.wheelDelta;
			if(e.detail) {
				eventValues = e.detail * -40;
			} else {
				eventValues = e.wheelDelta;
			};

			if(eventValues < 1 && !flag && count < 5) {	// 휠 내림
				flag = true;
				count = count + 1;
				console.log(count);
	            setTimeout(scrollDown, 150);
	            $(".contents_dish").animate({scrollTop : offset.top}, 150);
	            globalBg.classList.add("scroll");
			} else if (eventValues > 1 && !flag && count >= 1) { // 휠 올림
				flag = true;
				console.log(count);
	            setTimeout(scrollUp, 150);
	            $(".contents_dish").animate({scrollTop : offset.top}, 150);
			}
			function scrollDown() {
				console.log("scrollDown");
				conDish.classList.add("until_0" + count);
				flag = false;
			}
			function scrollUp() {
				console.log("scrollUp");
				conDish.classList.remove("until_0" + count);
				count = count - 1;
				if(count === 0) {
					globalBg.classList.remove("scroll");
				}
				flag = false;
			}	
		})
	}
}
