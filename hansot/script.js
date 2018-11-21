window.onload = function() {
    sizeWork();
    window.addEventListener("resize", sizeWork);

    function sizeWork() {
        var viewWidth = window.innerWidth;
        if(viewWidth < 1023) {
            mobileTop();

            function mobileTop() {
                var wrapFix = document.querySelector(".wrap");
                var mobileMenu = document.querySelector(".menu_inner");
                var mobileBtn = mobileMenu.querySelector(".mo_btn");
                var mobileNav = mobileMenu.querySelector("nav > ul");
                var mobileLi = mobileMenu.querySelectorAll(".top_nav");
        
                mobileBtn.addEventListener("click", mobileOn);
                mobileNav.addEventListener("click", mobileLiOn);

                function mobileOn(e) {
                    if(e.target.nodeName != "A" && e.target.nodeName != "SPAN") {
                        return;
                    }
                    var mobileIn = mobileBtn.parentNode;
                    if(mobileIn.classList.contains("act")) {
                        mobileIn.classList.remove("act");
                        wrapFix.classList.remove("fix");
                    } else {
                        mobileIn.classList.add("act");
                        wrapFix.classList.add("fix");
                    }
                        e.preventDefault();
                    }
                function mobileLiOn(e) {
                    if(e.target.nodeName != "A") {
                        return;
                    }
                    var moTargetLi = e.target.parentNode;
                    
                    if(moTargetLi.classList.contains("act")) {
                        moTargetLi.classList.remove("act");
                        wrapFix.classList.remove("li_scroll");
                    } else {
                        for(var i = 0; i < mobileLi.length; i++) {
                            mobileLi[i].classList.remove("act");
                            }
                        moTargetLi.classList.add("act");
                        wrapFix.classList.add("li_scroll");
                        }
                        e.preventDefault();
                    }
                }
            }

        if(viewWidth > 1024) {
            scrollMenu()

            function scrollMenu() {
                var htmlEle = document.querySelector("HTML");
                var headEle = htmlEle.querySelector("header");

                document.addEventListener("scroll", scrollWork);

                function scrollWork() {
                    var now = htmlEle.scrollTop;

                    if(now > 0) {
                        headEle.classList.add("scroll");
                    } else {
                        headEle.classList.remove("scroll");
                        }
                    }
                }


            navMenu();

            function navMenu() {
                var headinner = document.querySelector(".menu_inner");
                var topLi = headinner.querySelectorAll(".top_nav");

                headinner.addEventListener("mouseover", openWork);
                headinner.addEventListener("mouseout", exitWork);

                var subLi;

                function openWork(e) {
                    if(e.target.nodeName != "A") {
                        return;
                    }
                    for(var i = 0; i < topLi.length; i++) {
                        topLi[i].classList.remove("on");
                    }
                    var targetLi = e.target.parentNode;
                    if(targetLi.classList.contains("top_nav")) {
                        headinner.classList.add("on");
                        targetLi.classList.add("on");
                        subLi = targetLi;
                    }
                }

                function exitWork(e) {
                    var arrived = e.relatedTarget;
                    
                    if(!check(arrived, subLi)) {
                        for(var i = 0; i < topLi.length; i++) {
                        topLi[i].classList.remove("on");
                        }
                        headinner.classList.remove("on");
                    }

                    function check(arrivedPass, subLiPass) {
                        if(arrivedPass === null) {
                            return;
                        }
                        while(arrivedPass.nodeName != "HTML") {
                            if(arrivedPass === subLiPass) {
                                return true;
                            }
                            arrivedPass = arrivedPass.parentNode;
                        }
                        return false;
                    }

                }

            }
        }
    }

    footInfo();

    function footInfo() {
        var footDesc = document.querySelector(".info_desc");

        footDesc.addEventListener("click", viewWork);

        function viewWork(e) {
            if(footDesc.classList.contains("view")) {
                footDesc.classList.remove("view");
            } else {
                footDesc.classList.add("view");
            }	
            e.preventDefault();
        }
    }
}