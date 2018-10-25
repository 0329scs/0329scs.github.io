window.onload = function () {
	var htmlEle = document.querySelector("html");
	var goToTop = htmlEle.querySelector(".go_to_top");
	var headTop = htmlEle.querySelector("header").offsetTop;
	console.log(headTop);
	var skillTop = htmlEle.querySelector(".skill").offsetTop;
	console.log(skillTop);
	var portfolioTop = htmlEle.querySelector(".portfolio").offsetTop;
	console.log(portfolioTop);
	var headContents = htmlEle.querySelector(".head_contents");
	var navTarget = headContents.querySelectorAll("nav li > a");

	scrollMenu();

	function scrollMenu() {
		document.addEventListener("scroll", scrollWork);

		function scrollWork() {
			var now = htmlEle.scrollTop;

			navFix();

			function navFix() {			
				if(now > 0) {
					headContents.classList.add("fix");
				} else {
					headContents.classList.remove("fix");
				}
			}

			if(now >= skillTop) {
				goToTop.classList.add("show");
				progressBar();
				for(var i = 0 ; i < navTarget.length; i++) {
					navTarget[i].classList.remove("now");

					if(navTarget[i].parentNode.classList.contains("nav_skill")) {
						if(now >= portfolioTop) {
							navTarget[i].classList.remove("now");
						} else {
							navTarget[i].classList.add("now");
						}
					} else if(navTarget[i].parentNode.classList.contains("nav_portfolio")) {
						if(now < portfolioTop) {
							navTarget[i].classList.remove("now");
						} else {
							navTarget[i].classList.add("now");
						}
					}
				}	
			} else {
				for(var i = 0 ; i < navTarget.length; i++) {
					if(navTarget[i].parentNode.classList.contains("nav_home")) {
						navTarget[i].classList.add("now");
					} else {
						navTarget[i].classList.remove("now");
					}
				}
				goToTop.classList.remove("show");
			}

			function progressBar() {
				var percentBar = htmlEle.querySelectorAll(".percent");
				for(var i = 0; i < percentBar.length; i++) {
					var valueBar = percentBar[i].querySelector(".bar");
					var labelBar = valueBar.querySelector(".label > span");
					var barValue = [];
					barValue.push(valueBar);
					var labelValue = [];
					labelValue.push(labelBar.innerHTML);
					var width = 1;
					var fillBar = setInterval(fillBarWork(labelValue), 5000);

					function fillBarWork(labelValue) {
						if(width >= labelValue) {
							clearInterval(fillBar);
						} else {
							valueBar.style.width = labelValue + "%";
						}
					}
				}
			}
		}	
	}

	clickMenu();

	function clickMenu() {
		headContents.addEventListener("click", headNavWork);

		function headNavWork(e) {
			
			for(var i = 0 ; i < navTarget.length; i++) {
				navTarget[i].classList.remove("now");
			}
			e.target.classList.add("now");
			var targetParents = e.target.parentNode;
			if(targetParents.nodeName != "LI") {
				return;
			} else {
				navMoving();
			}		
			function navMoving () {
				if(targetParents.classList.contains("nav_home")) {
					$(htmlEle).animate({scrollTop:headTop}, 500);
				} else if(targetParents.classList.contains("nav_skill")) {
					$(htmlEle).animate({scrollTop:skillTop}, 500);
				} else if(targetParents.classList.contains("nav_portfolio")) {
					$(htmlEle).animate({scrollTop:portfolioTop}, 500);
				} else {
					return;
				}
			}
			e.preventDefault();
		}

		var portfoliocontents = htmlEle.querySelector(".portfolio");
		var portfolioMenu = portfoliocontents.querySelector(".portfolio_menu");

		portfolioMenu.addEventListener("click", portfolioWork);

		function portfolioWork(e) {
			var portfolioMenuTarget = portfolioMenu.querySelectorAll("li > a")
			for(var i = 0 ; i < portfolioMenuTarget.length; i++) {
				portfolioMenuTarget[i].classList.remove("now");
			}
			e.target.classList.add("now");
			var targetParents = e.target.parentNode;
			console.log(targetParents);
			if(targetParents.nodeName != "LI") {
				return;
			} else {
				portfolioMoving();
			}
			function portfolioMoving() {
				var portfolioList = portfoliocontents.querySelector(".portfolio_list");
				console.log(portfolioList);
				if(targetParents.classList.contains("all")) {
					portfolioList.classList.remove("responsive");
					portfolioList.classList.remove("pc");
					portfolioList.classList.remove("mobile");
					portfolioList.classList.add("all");
				} else if(targetParents.classList.contains("responsive")) {
					portfolioList.classList.remove("all");
					portfolioList.classList.remove("pc");
					portfolioList.classList.remove("mobile");
					portfolioList.classList.add("responsive");
				} else if(targetParents.classList.contains("pc")) {
					portfolioList.classList.remove("all");
					portfolioList.classList.remove("responsive");
					portfolioList.classList.remove("mobile");
					portfolioList.classList.add("pc");
				} else if(targetParents.classList.contains("mobile")) {
					portfolioList.classList.remove("all");
					portfolioList.classList.remove("responsive");
					portfolioList.classList.remove("pc");
					portfolioList.classList.add("mobile");
				} else {
					return;
				}
			}
			e.preventDefault();
		}
	}
}