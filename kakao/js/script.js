eventPackage();

function eventPackage() {
    var headerInner = document.querySelector(".header_inner");

    scrollEvent()

    function scrollEvent() {
        
        document.addEventListener("scroll", scrollEventWrap);

        function scrollEventWrap() {
            var htmlEle = document.querySelector("html");
            var now = htmlEle.scrollTop;
            
            if(now > 0) {
                var subWrap = htmlEle.querySelector(".sub_wrap");

                if(subWrap === null) {
                    mainScrollEvent();
                } else {
                    subHideEvent();
                }

            function subHideEvent() {
                    if(now > 62) {
                        subWrap.classList.add("hide");
                    } else {
                        subWrap.classList.remove("hide");
                    }
                }
            }

            function mainScrollEvent() {
                if(now >= 50) {
                    headerInner.classList.remove("type01");
                    headerInner.classList.remove("type02");
                    headerInner.classList.add("scrolled");
                } else {
                    headerInner.classList.remove("scrolled");
                }
            }
        }       
    }

    mouseEvent();

    function mouseEvent() {
        clickEvent();

        function clickEvent() {

            languageEvent();

            function languageEvent() {
                var languageTab = headerInner.querySelector(".lang");
                
                languageTab.addEventListener("click", languageChange);

                function languageChange(event) {
                    event.preventDefault();

                    if(event.target.nodeName != "A") {
                        return;
                    } else {
                        var totallanguageTab = languageTab.querySelectorAll("a");
                        var targetlanguageTab = event.target;
                        
                        for (var i = 0; i < totallanguageTab.length; i++) {
                            totallanguageTab[i].classList.remove("now");
                        }
                        targetlanguageTab.classList.add("now")
                    }
                }
            }

            footerEvent();

            function footerEvent() {
                var footerDescription = document.querySelector(".footer_desc");
                var footerServiceTab = footerDescription.querySelector(".footer_desc > ul");
                var footerUtilTab = footerDescription.querySelector(".util");
                var beforeNode;
                
                footerServiceTab.addEventListener("click", footerServiceEvent);

                function footerServiceEvent(event) {
                    if(event.target.nodeName != "A") {
                        return;
                    } else { 
                        var targetFooterService = event.target;
                        if(!targetFooterService.nextSibling) {
                            return;
                        } else {
                            var targetBrotherNode = targetFooterService.nextSibling.nextSibling;
                            inputClassName(targetBrotherNode);
                        }
                        
                        function inputClassName(brotherNodePass) {
                            if(!brotherNodePass.classList.contains("on")) {
                                if(beforeNode === undefined) {
                                    brotherNodePass.classList.add("on");
                                } else {
                                    beforeNode.classList.remove("on");
                                    brotherNodePass.classList.add("on");
                                }
                                beforeNode = brotherNodePass;
                            } else {
                                brotherNodePass.classList.remove("on");
                                beforeNode = undefined;
                            }
                        }
                    }
                }

                footerUtilTab.addEventListener("click", footerUtilEvent);

                function footerUtilEvent(event) {
                    if(event.target.nodeName != "A") {
                        return;
                    } else {
                        var utilTab = event.target.parentNode;
                        
                        if(utilTab.classList.contains("util_act")) {
                            utilTab.classList.remove("util_act");
                        } else {
                            utilTab.classList.add("util_act");
                        }
                    }
                }
            }
        }
        hoverEvent();

        function hoverEvent() {
            var beforeTarget;

            headerInner.addEventListener("mouseover", mouseOver);
            headerInner.addEventListener("mouseout", mouseOut);


            function mouseOver(event) {
                headerInner.classList.add("mouse_over");   

                var target = event.target;
                
                if(target.nodeName != "A") {
                    return;
                } else {
                    if(target.nextSibling) {
                        var brotherNode = target.nextSibling.nextSibling;
                        if(brotherNode === null) {
                            return;
                        }
                        brotherNode.classList.add("targeting");
                        beforeTarget = brotherNode;
                    }
                } 
            }
            function mouseOut(event) {
                headerInner.classList.remove("mouse_over");

                var arrived = event.relatedTarget;

                if(beforeTarget === undefined) {
                    return;
                } else if(!check(beforeTarget, arrived)) {
                    beforeTarget.classList.remove("targeting");
                }
                function check(beforeTargetPass, arrivedPass) {
                    if(arrivedPass === null) {
                        return;
                    }
                    while(arrivedPass.nodeName != "HTML") {
                        if(beforeTargetPass === arrivedPass) {
                            return true;
                        }
                        arrivedPass = arrivedPass.parentNode;
                    }
                    return false;
                }
            }

            var appDown = document.querySelector(".download");

            if(appDown) {
                var appDownTab = appDown.querySelector(".app_down");

                appDown.addEventListener("mouseover", appDownOver);
                appDown.addEventListener("mouseout", appDownOut);
            }

            function appDownOver() {
                appDownTab.classList.add("layer_on");
            }
            function appDownOut() {
                appDownTab.classList.remove("layer_on");
            }
        }
    }
    slidePackage();

    function slidePackage() {
    var subSlide = $(".right_vi > ul").bxSlider({
        mode: "fade",
        prevSelector: ".prev_next .prev",
        nextSelector: ".prev_next .next",
        pager: false,
        auto: true,
        prevText: "",
        nextText: ""
    })

    var viLists = document.querySelectorAll(".visual li");

    var tBaSlide = $(".visual > ul").bxSlider({
        mode: "fade",
        prevSelector: ".prev_next .prev",
        nextSelector: ".prev_next .next",
        pager: false,
        auto: true,
        prevText: "",
        nextText: "",
        onSlideBefore: function() {
            changeColor(this.getCurrentSlide());
        },
        onSlideAfter: function() {
            changeColor(this.getCurrentSlide());
        },
        onSliderLoad: function() {
            changeColor(this.getCurrentSlide());
        }
    });

        function changeColor(now) {
            var hovHeader = document.querySelector(".header_inner");

            if (viLists[now].classList.contains("type01")) {
                hovHeader.classList.add("type01");
                hovHeader.classList.remove("type02");
            } else if (viLists[now].classList.contains("type02")) {
                hovHeader.classList.add("type02");
                hovHeader.classList.remove("type01");
            }
        }
    }
}