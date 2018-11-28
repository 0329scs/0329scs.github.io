eventPackage();

function eventPackage() {
    var htmlEle = document.querySelector("html");
    var headContents = htmlEle.querySelector(".header_contents");
    var goToTopBtn = document.querySelector(".go_to_top");

    scrollEvent();

    function scrollEvent() {
        document.addEventListener("scroll", scrollWork);

        function scrollWork() {
            var now = htmlEle.scrollTop;

            navFix();

            function navFix() {
                if (now > 0) {
                    headContents.classList.add("fix");
                    goToTopBtn.classList.add("show");
                    var skillTop = htmlEle.querySelector(".skill").offsetTop;

                    skillSectionAnimate(now, skillTop);

                    function skillSectionAnimate(nowPass, skillTopPass) {

                        var mainSkillList = htmlEle.querySelector(".skill_list");

                        if (nowPass >= skillTopPass) {
                            mainSkillList.classList.add("arrived");
                        } else {
                            return;
                        }
                    }
                } else {
                    headContents.classList.remove("fix");
                    goToTopBtn.classList.remove("show");
                }
            }
        }
    }

    clickEvent();

    function clickEvent() {
        var headTop = htmlEle.querySelector("header").offsetTop;
        var skillTop = htmlEle.querySelector(".skill").offsetTop;
        var portfolioTop = htmlEle.querySelector(".portfolio_list").offsetTop;

        goToTop();

        function goToTop() {
            goToTopBtn.addEventListener("click", smoothToTop);

            function smoothToTop() {
                $(htmlEle).animate({ scrollTop: headTop }, 500);
            }
        }
        navClickEvent();

        function navClickEvent() {
            var headNav = headContents.querySelector("nav");

            headNav.addEventListener("click", goToLocation);

            function goToLocation(event) {
                if (event.target.nodeName != "A") {
                    return;
                } else {
                    var targetMenu = event.target;
                    var totalMenu = headNav.querySelectorAll("a");

                    for (var i = 0; i < totalMenu.length; i++) {
                        totalMenu[i].classList.remove("now");
                    }
                    targetMenu.classList.add("now");

                    movingEvent(targetMenu);

                    function movingEvent(targetMenuPass) {
                        if (targetMenuPass.classList.contains("nav_skill")) {
                            $(htmlEle).animate({ scrollTop: skillTop }, 500);
                        } else if (targetMenuPass.classList.contains("nav_portfolio")) {
                            $(htmlEle).animate({ scrollTop: portfolioTop }, 500);
                        } else {
                            $(htmlEle).animate({ scrollTop: headTop }, 500);
                        }
                    }
                }
            }
        }

        portfolioClickEvent();

        function portfolioClickEvent() {
            var portfolioSection = document.querySelector(".portfolio");
            var portfolioMenuTab = portfolioSection.querySelector(".portfolio_menu");

            portfolioMenuTab.addEventListener("click", portfolioMenuChange);

            function portfolioMenuChange(event) {
                if (event.target.nodeName != "A") {
                    return;
                } else {
                    var allItem = portfolioMenuTab.querySelectorAll("a");
                    var targetItem = event.target;

                    for (var i = 0; i < allItem.length; i++) {
                        allItem[i].classList.remove("now")
                    }
                    targetItem.classList.add("now");

                    portfolioListChange(targetItem);

                    function portfolioListChange(targetItemPass) {
                        var portfolioListTab = portfolioSection.querySelector(".portfolio_list");

                        if (targetItemPass.classList.contains("all")) {
                            portfolioListTab.classList.remove("responsive");
                            portfolioListTab.classList.remove("pc");
                            portfolioListTab.classList.remove("mobile");
                            portfolioListTab.classList.add("all");

                        } else if (targetItemPass.classList.contains("responsive")) {
                            portfolioListTab.classList.remove("all");
                            portfolioListTab.classList.remove("pc");
                            portfolioListTab.classList.remove("mobile");
                            portfolioListTab.classList.add("responsive");
                        } else if (targetItemPass.classList.contains("pc")) {
                            portfolioListTab.classList.remove("all");
                            portfolioListTab.classList.remove("responsive");
                            portfolioListTab.classList.remove("mobile");
                            portfolioListTab.classList.add("pc");
                        } else {
                            portfolioListTab.classList.remove("all");
                            portfolioListTab.classList.remove("responsive");
                            portfolioListTab.classList.remove("pc");
                            portfolioListTab.classList.add("mobile");
                        }
                    }
                }
            }
        }
    }
}