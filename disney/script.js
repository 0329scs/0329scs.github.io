window.onload = function() {
    hovMenu("left");
    hovMenu("right");

    function hovMenu(classPass) {
        var menuNav = document.querySelector(".h_inner > " + ".menu_" + classPass);

        menuNav.addEventListener("mouseover", overWork);
        menuNav.addEventListener("mouseout", outWork);

        var subLi;

        function overWork(e) {
            if(e.target.nodeName === "A") {
                menuLi = e.target.parentNode;
                if(menuLi.querySelector("ul")) {
                    menuLi.className = "active";
                    subLi = menuLi;
                }
            } 
        }
        function outWork(e) {
            var arrived = e.relatedTarget;
            if(subLi === undefined) {
                return;
            } else if(!check(subLi, arrived)) {
                subLi.className = "";
            }
            function check(subPass, arrivPass) {
                if(arrivPass === null) {
                    return;
                }
                while (arrivPass.nodeName != "HTML") {
                    if (subPass === arrivPass) {
                        return true;
                    }
                    arrivPass = arrivPass.parentNode
                }
                return false;
            }
        }
    }

    searchMenu()

    function searchMenu() {
        var header = document.querySelector("header");
        var search = document.querySelector(".search");
        var menuin = document.querySelector(".s_inner > a");
        var quesX = document.querySelector(".s_contain > a");

        menuin.addEventListener("click", openWork);
        quesX.addEventListener("click", exitWork);

        function openWork(e) {
            header.classList.add("search_on");
            search.classList.add("search_on");
            e.preventDefault();
        }
        function exitWork(e) {
            header.classList.remove("search_on");
            search.classList.remove("search_on");
            e.preventDefault();
        }
    }

    fixMenu() 

    function fixMenu() {
        var headFix = document.querySelector("header");
        var btnFix = headFix.querySelectorAll(".mini_btn > a");

        for(var i = 0; i < btnFix.length; i++) {
            btnFix[i].addEventListener("click", fixWork);
        }

        function fixWork(e) {
            if(headFix.classList.contains("mini_fix")) {
                headFix.classList.remove("mini_fix");
                e.preventDefault();
            } else {
                headFix.classList.add("mini_fix");
                e.preventDefault();
            }
        }
    }

    scrollMenu()

    // 과거 < 현재 - 내렸다는증거 ,  과거 > 현재 - 올렸다는 증거
    function scrollMenu() {
        var htmlEle = document.querySelector("html");
        var headEle = htmlEle.querySelector("header");
        var past = 0;

        document.addEventListener("scroll", scrollWork);

        function scrollWork() {
            var now = htmlEle.scrollTop;
            if (now === 0) {
                headEle.classList.remove("scroll");
                headEle.classList.add("top");
            } else if (past > now) {
                headEle.classList.remove("top");
                headEle.classList.add("scroll");
            } else {
                headEle.classList.remove("scroll");
            }
            past = now;
        }
    }
}