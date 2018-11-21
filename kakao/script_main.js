window.onload = function() {
    putMenu();

        function putMenu() {
            var htmlElement = document.querySelector("html");

            document.addEventListener("scroll", scrolled);

            function scrolled() {
                var scrolled = htmlElement.scrollTop;
                if(scrolled >= 50) {
                    headerElement.setAttribute("id", "over");
                } else if(scrolled < 50) {
                    headerElement.setAttribute("id", "");
                }
            }

            var headerElement = document.querySelector("header");

            headerElement.addEventListener("mouseover", turnOn);
            headerElement.addEventListener("mouseout", turnOff);

			var underMenu;

            function turnOn(e) {
                var subMenu = e.target.parentNode.querySelector(".under_menu");
                headerElement.classList.add("put");
                if(e.target.nodeName === "A") {
                    if (subMenu) {
                        subMenu.classList.add("on");
                        underMenu = subMenu;
                    }
                }
            }
            function turnOff(e) {
                var arrived = e.relatedTarget;
                headerElement.classList.remove("put");
                
                if(underMenu === undefined) {
                    return;
                } else if ( !check(underMenu, arrived) ) {
                    underMenu.classList.remove("on");
                }
                function check(underMenu, arrived) {
                    if (arrived === null) {
                        return;
                    }
                    while (arrived.nodeName != "HTML") {
                        if (underMenu === arrived) {
                            return true;
                        }
                        arrived = arrived.parentNode;
                    }
                    return false;
                }
            }

            var langEle = headerElement.querySelector(".lang");

            langEle.addEventListener("click", langWork);

            function langWork(e) {
                e.preventDefault();
                if(e.target.nodeName != "A") {
                    return;
                } else {
                    var langHov = langEle.querySelectorAll("a");
                    var langTarget = e.target;
                    for(var i = 0; i < langHov.length; i++) {
                        if(langHov[i].classList.contains("now")) {
                            langHov[i].classList.remove("now");
                        } else {
                            langTarget.classList.add("now");
                        }
                    }
                }
            }
        }
        
        footClick();

        function footClick() {
            var footMenu = document.querySelector(".footer_desc ul");

            footMenu.addEventListener("click", footOver);

            function footOver(event) {
                event.preventDefault();
                if(event.target.nodeName === "A") {
                    var footSub = event.target.parentNode.querySelector("div");
                    if(!footSub) {
                        return;
                    } else if(footSub.classList.contains("on")) {
                        event.target.className = "";
                        footSub.classList.remove("on");
                        event.target.querySelector("span").className = "";
                    } else {
                        event.target.className = "active";
                        footSub.classList.add("on");
                        event.target.querySelector("span").className = "on";
                    }
                }
            }
        }

        utilClick();

        function utilClick() {

            var utilMenu = document.querySelector(".util");

            utilMenu.addEventListener("click", utilOver);

            function utilOver(event) {
                if(event.target.nodeName === "A") {
                    var utilSub = event.target.parentNode.querySelector("ul");
                    if(utilSub.classList.contains("util_act")) {
                        utilSub.classList.remove("util_act");
                        event.target.querySelector("span").className = "";
                    } else {
                        utilSub.classList.add("util_act");
                        event.target.querySelector("span").className = "act";
                    }
                }
                event.preventDefault();
            }
        }
}