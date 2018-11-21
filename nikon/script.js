window.onload = function() {
    findMenu();

    function findMenu() {
        var moHeBtn = document.querySelector(".mo_btn");

        moHeBtn.addEventListener("click", findWork);

        function findWork() {
            var utilMenu = moHeBtn.parentNode;
            var mainCheck = document.querySelector("main");
            var navCheck = mainCheck.querySelector("nav");

            if(utilMenu.classList.contains("find")) {
                utilMenu.classList.remove("find");
            } else {
                if(mainCheck.classList.contains("cover") &&
                    navCheck.classList.contains("look")) {
                    mainCheck.classList.remove("cover");
                    navCheck.classList.remove("look");
                }
                utilMenu.classList.add("find");
            }
        }
    }

    mNavMenu();

    function mNavMenu() {
        var moNavbtn = document.querySelector(".nav_btn");

        moNavbtn.addEventListener("click", lookWork);

        function lookWork() {
            var navMenu = moNavbtn.parentNode;
            var mainMenu = navMenu.parentNode;
            var heUtilCheck = document.querySelector(".h_util");
            console.log(heUtilCheck);
            if(navMenu.classList.contains("look")) {
                navMenu.classList.remove("look");
                mainMenu.classList.remove("cover");
            } else {
                if(heUtilCheck.classList.contains("find")) {
                    heUtilCheck.classList.remove("find");
                }
                navMenu.classList.add("look");
                mainMenu.classList.add("cover");

                var moNav = moNavbtn.parentNode.querySelector(".mo_nav");

                moNav.addEventListener("click", hOnWork);

                var moClose = moNav.querySelector(".mo_close");

                moClose.addEventListener("click", function() {
                    if(navMenu.classList.contains("look")) {
                        navMenu.classList.remove("look");
                        mainMenu.classList.remove("cover");
                    }
                });
            }
        }
        function hOnWork(e) {
            e.preventDefault();

            var moLi = e.target.parentNode;
            var moUnder = moLi.querySelector(".mo_under");

            if (moUnder === null) {
                if(moLi.classList.contains("mo_nav")) {
                    return;
                }
            } else {
                if(moLi.classList.contains("on")) {
                    moLi.classList.remove("on");
                } else {
                    moLi.classList.add("on");
                }
            }
        }
    }

    pNavMenu();

    function pNavMenu() {
        var pcNav = document.querySelector(".pc_nav");
        var entireLi = pcNav.querySelectorAll(".pc_nav > ul > li");

        pcNav.addEventListener("click", check);

        function check(e) {
            var menuLi = e.target.parentNode;
            var menuDiv = menuLi.querySelector(".nav_menu");

            viewWork(e, menuLi, menuDiv);
            btnOff(menuLi, menuDiv);
        }
        function viewWork(ePass, liPass, divPass) {
            ePass.preventDefault();
            if(divPass === null) {
                return;
            } else {
                if(liPass.classList.contains("view")) {
                    liPass.classList.remove("view");
                } else {
                    for(i = 0; i < entireLi.length; i++) {
                        entireLi[i].classList.remove("view");
                    }
                    liPass.classList.add("view");
                }
            }
        }
        function btnOff(liPass, divPass) {
            if(divPass === null) {
                return;
            } else {
                var closeBtn = divPass.querySelector(".close_btn");

                closeBtn.addEventListener("click", function() {
                    if (liPass.classList.contains("view")) {
                        liPass.classList.remove("view");
                    }
                });
            }
        }
    }

    footMenu();

    function footMenu() {
        var footUl = document.querySelector(".f_inner > ul");

        footUl.addEventListener("click", fMenuOn);

        function fMenuOn(e) {
            var fMenu = e.target.parentNode;

                if(fMenu.classList.contains("on")) {
                    fMenu.classList.remove("on");
                } else {
                    fMenu.classList.add("on")
                }
                e.preventDefault();
            }
        }

    var htmlEle = document.querySelector("html");
        
    scrollMenu();

    function scrollMenu() {
        
        var homeBtn = htmlEle.querySelector(".home");

        document.addEventListener("scroll", scrollWork);

        function scrollWork() {
            var now = htmlEle.scrollTop;
            if (now === 0) {
                homeBtn.classList.remove("raise");
            } else if (now > 0) {
                homeBtn.classList.add("raise");
            }
        }
    }

    smooth();

    function smooth() {
        var homeBtn = document.querySelector(".home");
        
        homeBtn.addEventListener("click", smoothUp);

        function smoothUp() {
            $(htmlEle).animate({scrollTop:htmlEle.offsetTop}, 500);
        }
    }
}