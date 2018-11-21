window.onload = function() {

    scrollMenu();

    function scrollMenu() {
        document.addEventListener("scroll", scrollWork);

        function scrollWork() {
            var htmlElement = document.querySelector("html");
            var scrolled = htmlElement.scrollTop;
            var headerElement = document.querySelector("header");

            if(scrolled >= 50) {
                headerElement.className = "smaller";
            } else if(scrolled < 50) {
                headerElement.className = "";
            }
        }
    }

    hoverMenu("nav");

    function hoverMenu(classPass) {
        var navUL = document.querySelector("." + classPass);
        var navLI = navUL.querySelectorAll("." + classPass + "> li");

        for(var i = 0; i < navLI.length; i++) {
            navLI[i].addEventListener("click", overwork);
        }

        function overwork(event) {
            var subMenu = this.querySelector(".under_nav");

            if(this.classList.contains("active")) {
                this.classList.remove("active");
                subMenu.style.opacity = "0";
            } else {
                for(var i = 0; i < navLI.length; i++) {
                    navLI[i].classList.remove("active");
                    navLI[i].querySelector(".under_nav").style.opacity = "0";
                }
                this.classList.add("active");
                setTimeout(function () {
                    subMenu.style.opacity = "1";
                }, 20);
            }
            event.preventDefault();
        }
    }

    toolMenu();

    function toolMenu() {
        var navTool = document.querySelector(".nav_tool");

        navTool.addEventListener("click", opened);

        function opened() {
            var toolNav = document.querySelector("nav");
            if(navTool.classList.contains("btn")) {
                navTool.classList.remove("btn");
            } else {
                navTool.classList.add("btn");
            }
            if(toolNav.classList.contains("active")) {
                toolNav.classList.remove("active");
            } else {
                toolNav.classList.add("active");
            }
        }
    }
    
    scaleWork();

    function scaleWork() {
        var mList = document.querySelectorAll(".m_banner li");

        for(var i = 0; i < mList.length; i++) {
            mList[i].addEventListener("mouseover", confirm);
            mList[i].addEventListener("mouseout", confirm);
        }

        function confirm(event) {
            if(event.target.nodeName != "A") {
                return;
            } else {
                if(event.type === "mouseover") {
                    scaled(this);
                } else if (event.type === "mouseout") {
                    reduce(this);
                }
            }
        }
        function scaled(thisPass) {
            thisPass.className = "scaled";
        }
        function reduce(thisPass) {
            thisPass.className = "";
        }
    }
}