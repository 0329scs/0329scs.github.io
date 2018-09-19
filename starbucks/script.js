window.onload = function() {
	
	pcNavWork();

	function pcNavWork() {
		var pcNav = document.querySelector(".pc_nav");

		pcNav.addEventListener("mouseover", overWork);
		pcNav.addEventListener("mouseout", outWork);

		var configLi;

		function overWork(e) {
			if(e.target.nodeName != "A") {
				return;
			} else if(e.target.classList.contains("tab")) {
				var navLi = pcNav.querySelectorAll(".pc_nav > li");
				var targetLi = e.target.parentNode;
				for(var i = 0; i < navLi.length; i++) {
					navLi[i].classList.remove("open");
				}
				targetLi.classList.add("open");
				configLi = targetLi;
			}
		}
		function outWork(e) {
			var arrived = e.relatedTarget;

			if(configLi === undefined) {
				return;
			} else if(!check(arrived, configLi)) {
				configLi.classList.remove("open");
			}
			function check(arrivePass, configPass) {
				if(arrivePass === null) {
					return;
				}
				while(arrivePass.nodeName != "HTML") {
					if(arrivePass === configPass) {
						return true;
					}
					arrivePass = arrivePass.parentNode;
				}
				return false;
			}
		}
	}
	
	moNavWork();

	function moNavWork() {
		var moNav = document.querySelector(".mo_nav");
		var moBtn = moNav.querySelector(".mo_btn");

		moBtn.addEventListener("click", headBtn);

		function headBtn(e) {
			if(moNav.classList.contains("mo_open")) {
				moNav.classList.remove("mo_open");
			} else {
				moNav.classList.add("mo_open");
			}
			e.preventDefault();
		}

		var footMid = document.querySelector(".f_mid");
		
		footMid.addEventListener("click", footBtn);

		function footBtn(e) {
			if(e.target.className === "foot_btn" || e.target.nodeName === "SPAN") {
				var fmDesc = footMid.querySelectorAll(".desc");
				if(e.target.className === "foot_btn") {
					var targetDesc = e.target.parentNode.parentNode;
				} else if(e.target.nodeName === "SPAN") {
					var targetDesc = e.target.parentNode.parentNode.parentNode;
				}
				
				if(targetDesc.classList.contains("foot_open")) {
					targetDesc.classList.remove("foot_open")
				} else {
					for(var i = 0; i < fmDesc.length; i++) {
						fmDesc[i].classList.remove("foot_open");
					}
					targetDesc.classList.add("foot_open")
				}
			}
			e.preventDefault();
		}
	}
}


