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

		var slide = $(".contents_dish").on("mousewheel DOMMouseScroll", function(e) {
			var E = e.originalEvent;
			var delta = 0;
			if(E.detail) {
				delta = E.detail * -40;
				frame(delta);
			} else {
				delta = E.wheelDelta;
				frame(delta);
			}
			console.log(delta);
			function frame(delta) {

				if(!flag && delta < 1 && count < 5) {
					flag = true;
					count = count + 1;
					setTimeout(scrollDown, 150);
					$(conDish).animate({scrollTop : conDish.offsetTop}, 150);
					globalBg.classList.add("scroll");
				} else if(!flag && delta > 1 && count >= 1) {
					flag = true;
					setTimeout(scrollUp, 150);
					$(conDish).animate({scrollTop : conDish.offsetTop}, 150);
				}
				function scrollDown() { // 휠 내림
					conDish.classList.add("until_0" + count);
					flag = false;
				}
				function scrollUp() { // 휠 올림
					conDish.classList.remove("until_0" + count);
					count = count - 1;
					if(count === 0) {
						globalBg.classList.remove("scroll");
					}
					flag = false;
				}
			}
		});
	}
}
