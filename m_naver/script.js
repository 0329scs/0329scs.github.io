window.onload = function() {
	scrollMenu();
	function scrollMenu() {
		var htmlEle = document.querySelector("html");
		window.addEventListener("scroll", scrollWork);

		function scrollWork() {
			var fixBtn = htmlEle.querySelector(".fix_btn");
			var now = htmlEle.scrollTop;
			console.log(now);
			if(now > 0) {
				if(now > 4200) {
					fixBtn.classList.remove("fixed");
				} else {
					fixBtn.classList.add("fixed");
				}
			} else if(now === 0) {
				fixBtn.classList.remove("fixed");
			}
		}
	}
	

	navEvent();

	function navEvent() {
		var navUl = document.querySelector("nav > ul");

		navUl.addEventListener("click", navHov);

		function navHov(e) {
			var navLi = navUl.querySelectorAll("li");
			var targetLi = e.target.parentNode;
			for(var i = 0; i < navLi.length; i++) {
				navLi[i].classList.remove("on");
			}
			targetLi.classList.add("on");
			e.preventDefault();
		}
	}

	rtEvent();

	function rtEvent() {
		var rtWrap = document.querySelector(".real_time_wrap");

		rtWrap.addEventListener("click", rtwCheck);

		function rtwCheck(e) {
			e.preventDefault();
			if(!e.target.classList.contains("toggle_btn")) {
				return;
			} else {
				if(rtWrap.classList.contains("slide")) {
					spreadWork();
				}
				else if(rtWrap.classList.contains("spread")) {
					slideWork();
				}
			}
			function spreadWork() {
				rtWrap.classList.remove("slide");
				rtWrap.classList.add("spread");
			}
			function slideWork() {
				rtWrap.classList.remove("spread");
				rtWrap.classList.add("slide");
			}
		}

		var rtnt = rtWrap.querySelector(".real_time_newstopic");

		listTab();

		function listTab() {
			var rtntList = rtnt.querySelector(".list_tab");

			rtntList.addEventListener("click", listHov);

			function listHov(e) {
				e.preventDefault();
				if(e.target.nodeName != "A") {
					return;
				} else {
					var listLink = rtntList.querySelectorAll("a");
					var targetLink = e.target;

					for(var i = 0; i < listLink.length; i++) {
						listLink[i].classList.remove("list_on");
					}
					targetLink.classList.add("list_on");
					if(rtnt.classList.contains("rt")) {
						rtnt.classList.remove("rt");
						rtnt.classList.add("nt");
					} else {
						rtnt.classList.remove("nt");
						rtnt.classList.add("rt");
					}
				}
			}
		}
		rtrLrTab();

		function rtrLrTab() {
			var rtrLr = rtnt.querySelectorAll(".rtr_lr");

			for(var i = 0; i < rtrLr.length; i++) {
				rtrLr[i].addEventListener("click", leftRight);
			}

			function leftRight(e) {
				e.preventDefault();
				if(e.target.nodeName != "A" && e.target.nodeName != "SPAN") {
					return;
				} else {
					var lrLi = this.querySelectorAll("li");
					var targetLi;
					if(e.target.nodeName === "A") {
						targetLi = e.target.parentNode;
					} else if (e.target.nodeName === "SPAN") {
						targetLi = e.target.parentNode.parentNode;
					}
					for(var i = 0; i < lrLi.length; i++) {
						lrLi[i].classList.remove("now");
					}
					targetLi.classList.add("now");
					var rtrDesc = this.parentNode;
					if(rtrDesc.classList.contains("left")) {
						rtrDesc.classList.remove("left");
						rtrDesc.classList.add("right");
					} else {
						rtrDesc.classList.remove("right");
						rtrDesc.classList.add("left");
					}
				}
			}
		}
	}
	pressEvent();

	function pressEvent() {
		var pressIn = document.querySelector(".press_inner");
		pressBtn = pressIn.querySelector(".press_btn");
		pressPack = pressIn.querySelector(".press_pack");
		pressBtn.addEventListener("click", pressPick);

		function pressPick(e) {
			e.preventDefault();
			if(e.target.nodeName != "A" && e.target.nodeName != "SPAN") {
				return;
			} else {
				var targetA;
				if(e.target.nodeName === "A") {
					targetA = e.target;
				} else if(e.target.nodeName === "SPAN") {
					targetA = e.target.parentNode;
				}
				morefold(targetA);
			}
			function morefold(Apass) {
					if(Apass.classList.contains("more")) {
						Apass.classList.remove("more");
						Apass.classList.add("fold");
						pressPack.classList.add("until04");
					} else if(Apass.classList.contains("fold")) {
						Apass.classList.add("more");
						Apass.classList.remove("fold");
						pressPack.classList.remove("until04");
					}
				}
			}
		}
		var rtSlide = $(".real_time_slide > ul").bxSlider({
			auto: true,
			pager: false,
			controls: false,
			mode: "vertical",
			speed: 1,
			pause: 2000
		})
		var rtSlide = $(".weather_slide > ul").bxSlider({
			auto: true,
			pager: false,
			controls: false,
			mode: "vertical",
			speed: 1,
			pause: 2000
		})
		var rtSlide = $(".stock").bxSlider({
			auto: true,
			pager: false,
			controls: false,
			mode: "vertical",
			speed: 1,
			pause: 2000
		})
}