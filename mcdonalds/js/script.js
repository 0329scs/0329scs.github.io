eventPackage();

function eventPackage() {
    sliderMenu();//slider

    function sliderMenu() {
        var tBaSlide = $(".top_banner > ul").bxSlider({
            prevSelector: ".t_control .prev",
            nextSelector: ".t_control .next",
            pagerSelector: ".t_page",
            auto: true
        })

        var bBaSlide = $(".b_inner > ul").bxSlider({
            slideWidth: 700,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 0,
            prevSelector: ".b_control .prev",
            nextSelector: ".b_control .next",
            pagerSelector: ".b_page",
            moveSlides: 1,
            slideMargin: 1
        });

        sizeWork();
        window.addEventListener("resize", sizeWork);

        function sizeWork() {
            var viewWidth = window.innerWidth;
            
            if (viewWidth < 521) {
                bBaSlide.reloadSlider({
                    slideWidth: 505,
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 0,
                    prevSelector: ".b_control .prev",
                    nextSelector: ".b_control .next",
                    pagerSelector: ".b_page",
                    moveSlides: 1,
                    slideMargin: 1
                })
            } else if (viewWidth < 679) {
                bBaSlide.reloadSlider({
                    slideWidth: 331,
                    minSlides: 2,
                    maxSlides: 2,
                    moveSlides: 0,
                    prevSelector: ".b_control .prev",
                    nextSelector: ".b_control .next",
                    pagerSelector: ".b_page",
                    moveSlides: 1,
                    slideMargin: 1
                })
            } else {
                bBaSlide.reloadSlider({
                    slideWidth: 700,
                    minSlides: 3,
                    maxSlides: 3,
                    moveSlides: 0,
                    prevSelector: ".b_control .prev",
                    nextSelector: ".b_control .next",
                    pagerSelector: ".b_page",
                    moveSlides: 1,
                    slideMargin: 1
                })
            }
        }
    }
    scrollMenu();//scroll

    function scrollMenu() {
        document.addEventListener("scroll", scrollWork);

        function scrollWork() {
            var htmlEle = document.querySelector("html");
            var now = htmlEle.scrollTop;
            var headerEle = htmlEle.querySelector("header");

            if(now >= 50) {
                headerEle.classList.add("smaller");
            } else {
                headerEle.classList.remove("smaller");
            }
        }
    }

    mouseMenu();//mouse

    function mouseMenu() {
        clickMenu();//click

        function clickMenu() {
            var headerNav = document.querySelector("header nav");
            pcNavMenu();//pc nav

            function pcNavMenu() {
                var beforeNode;
                headerNav.addEventListener("click", pcNavWork);

                function pcNavWork(event) {
                    var target = event.target;

                    if(!target.classList.contains("nav_btn")) {
                        return;
                    } else {
                        var targetParent = target.parentNode;

                        if(beforeNode === undefined) {
                            targetParent.classList.add("active");
                            beforeNode = targetParent;
                        } else if(targetParent != beforeNode) {
                            beforeNode.classList.remove("active");
                            targetParent.classList.add("active");
                            beforeNode = targetParent;
                        } else if(targetParent === beforeNode) {
                            beforeNode.classList.remove("active");
                            beforeNode = undefined;
                        }
                    }
                }
            }

            moNavMenu();//mobile button

            function moNavMenu() {
                var moNavBtn = document.querySelector(".nav_tool");

                moNavBtn.addEventListener("click", moNavAct);

                function moNavAct(event) {
                    var target = event.target;

                    if(moNavBtn.classList.contains("btn_changed")) {
                        moNavBtn.classList.remove("btn_changed");
                        headerNav.classList.remove("mo_nav_act");
                    } else {
                        moNavBtn.classList.add("btn_changed");
                        headerNav.classList.add("mo_nav_act");
                    }
                }
            }
        }

        hovMenu();//mouseover, out

        function hovMenu() {
            var mList = document.querySelectorAll(".mid_banner li");

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
}