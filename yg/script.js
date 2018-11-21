window.onload = function () {
    moNavMenu();

    function moNavMenu() {
        var bodyHide = document.querySelector("body");
        var targetHead = bodyHide.querySelector("header");
        var navAct = targetHead.querySelector(".nav_icon");
        var navX = targetHead.querySelector(".nav_x");

        navAct.addEventListener("click", actWork);
        navX.addEventListener("click", closeWork);

        function actWork(e) {
            if(e.target.nodeName === "A" || e.target.nodeName === "SPAN") {
                targetHead.classList.add("active");
                bodyHide.classList.add("body_hide");
            }
            e.preventDefault();
        }
        function closeWork(e) {
            if(e.target.nodeName === "A" || e.target.nodeName === "SPAN") {
                targetHead.classList.remove("active");
                bodyHide.classList.remove("body_hide");
            }
            e.preventDefault();
        }
    }

    trans("lang");

    function trans(classPass) {
        var transLang = document.querySelector("." + classPass);
        var langsLink = transLang.querySelectorAll("a");

        transLang.addEventListener("click", change);

        function change(event) {
            if(event.target.classList.contains("active")) {
                event.target.className = "";
            } else {
                for(var i = 0; i < langsLink.length; i++) {
                    langsLink[i].className = "";
                }
                event.target.className = "active";
            }
        }
    }

    hoverE();

    function hoverE() {
        var open = document.querySelector(".familysite");

        open.onclick = function () {
            if (open.classList.contains("active")) {
                open.classList.remove("active");
                return false;
                } else {
                    open.classList.add("active");
                    return false;
                }
            }

            open.addEventListener("mouseover", overwork);
            open.addEventListener("mouseout", outwork);

            function overwork() {
                open.classList.add("active");
            }
            function outwork() {
                open.classList.remove("active");
            }
        }
}