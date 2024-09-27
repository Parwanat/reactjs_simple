function initCooper() {
    /*
    =======================================================================
                Window Load
    =======================================================================
    */
    var loaderHolder = document.querySelector(".loader-holder");
    var main = document.getElementById("main");
    setTimeout(function () {
        loaderHolder.style.display = "none";
        main.style.opacity = "1";
    }, 500);

    var bgImages = document.querySelectorAll(".bg");
    bgImages.forEach(function (bgImage) {
        if (bgImage.getAttribute("data-bg")) {
            bgImage.style.backgroundImage = "url(" + bgImage.getAttribute("data-bg") + ")";
        }
    });

    /*
    =======================================================================
                Tabs
    =======================================================================
    */
    var tabListItems = document.querySelectorAll("ul.tabs li");
    tabListItems.forEach(function (tabListItem) {
        tabListItem.addEventListener("click", function () {
            var dataTab = this.getAttribute("data-tab");
            var tabs = document.querySelectorAll(".tab-content");

            tabListItems.forEach(function (tabListItem) {
                tabListItem.classList.remove("current");
            });
            tabs.forEach(function (tab) {
                tab.classList.remove("current");
            });

            this.classList.add("current");
            document.getElementById(dataTab).classList.add("current");

            return false;
        });
    });

    /*
    =======================================================================
                Page nav
    =======================================================================
    */
    var fbgs = document.querySelector(".fbgs");
    var bgScroll = document.querySelector(".bg-scroll");
    var bgTitleSpan = document.querySelector(".bg-title span");

    // bgScroll.style.backgroundImage = "url(" + fbgs.dataset.bgscr + ")";
    // bgTitleSpan.textContent = fbgs.dataset.bgtex;

    var scrollNavHolder = document.querySelector(".scroll-nav-holder");
    var scrollNav = document.querySelector(".scroll-nav");
    var alt = document.querySelectorAll(".alt");

    // scrollNavHolder.style.zIndex = "12";

    function adjustElements() {
        alt.forEach(function (altElement) {
            altElement.style.marginTop = -altElement.offsetHeight / 2 + "px";
        });

        // var scrollNavItems = scrollNav.querySelectorAll("li");
        // var scrollNavWidth = scrollNav.offsetWidth;
        // scrollNavItems.forEach(function (item) {
        //     item.style.width = scrollNavWidth / scrollNavItems.length - 0.5 + "px";
        // });

        var heroSliderItems = document.querySelectorAll(".hero-slider .item");
        var singleCarouselHolderItems = document.querySelectorAll(".single-carousel-holder .item");

        heroSliderItems.forEach(function (item) {
            item.style.height = document.querySelector(".hero-slider").offsetHeight + "px";
        });

        singleCarouselHolderItems.forEach(function (item) {
            item.style.height = document.querySelector(".single-carousel-holder").offsetHeight + "px";
        });
    }
    adjustElements();

    window.addEventListener("resize", function () {
        adjustElements();
    });

    
    /*
  =======================================================================
              Isotope
  =======================================================================
*/
    function n() {
        if (document.querySelectorAll(".gallery-items").length) {
            var a = new Isotope(".gallery-items", {
                layoutMode: 'fitRows',
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
                getSortData: {
                    name: '.name',
                    symbol: '.symbol',
                    number: '.number parseInt',
                    category: '[data-category]',
                    weight: function (itemElem) {
                        var weight = itemElem.querySelector('.weight').textContent;
                        return parseFloat(weight.replace(/[\(\)]/g, ''));
                    }
                }
            });
            imagesLoaded(document.querySelector(".gallery-items"), function () {
                a.layout();
            });
            document.querySelectorAll(".gallery-filters").forEach(function (elem) {
                elem.addEventListener("click", function (event) {
                    event.preventDefault();
                    var filterValue = event.target.getAttribute('data-filter');
                    a.arrange({ filter: filterValue });
                    var filterText = event.target.textContent;
                    document.querySelectorAll(".gallery-filters a").forEach(function (el) {
                        el.classList.remove("gallery-filter-active");
                    });
                    event.target.classList.add("gallery-filter-active");
                    var ua = window.navigator.userAgent;
                    var msie = ua.indexOf("MSIE ");
                    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                        document.querySelector(".filt-text").textContent = filterText;
                    } else {
                        document.querySelector(".filt-text").textContent = filterText;
                        ShuffleText(document.querySelector(".filt-text"));
                    }
                    return false;
                });
            });
        }
      
        var itemCount = document.querySelectorAll(".gallery-item").length;
        document.querySelectorAll(".all-album, .num-album").forEach(function (el) {
            el.textContent = itemCount;
        });
    }
    n();

    // var gat = document.querySelector(".gallery-filter-active").textContent;
    // document.querySelector(".filt-text").textContent = gat;

    /*
      =======================================================================
                  LightGallery
      =======================================================================
    */
   

    /*
      =======================================================================
                  Scroll animation
      =======================================================================
    */
    

    /*
      =======================================================================
                  Share
      =======================================================================
    */
    var shcm = document.querySelector(".share-container"),
        shs = JSON.parse(shcm.getAttribute("data-share")),
        ssr = document.querySelector(".show-share");

    shcm.share({
        networks: shs
    });

    function hideShare() {
        ssr.classList.add("isShare");
        document.querySelectorAll(".share-container a").forEach(function (el, index) {
            setTimeout(function () {
                el.style.opacity = 0;
            }, 50 * index);
        });
        setTimeout(function () {
            shcm.classList.remove("visshare");
        }, 300);
    }

    function showShare() {
        ssr.classList.remove("isShare");
        shcm.classList.add("visshare");
        setTimeout(function () {
            document.querySelectorAll(".share-container a").forEach(function (el, index) {
                setTimeout(function () {
                    el.style.opacity = 1;
                }, 50 * index);
            });
        }, 300);
    }
    ssr.addEventListener("click", function (event) {
        event.preventDefault();
        if (ssr.classList.contains("isShare")) showShare();
        else hideShare();
        return false;
    });

    /*
      =======================================================================
                  Progress
      =======================================================================
    */
    window.addEventListener("scroll", function () {
        var a = document.documentElement.scrollHeight;
        var b = window.innerHeight;
        var c = window.scrollY;
        var d = c / (a - b) * 100;
        document.querySelector(".progress-bar").style.width = d + "%";
    });
    document.querySelectorAll(".scroll-con-sec").forEach(function (el) {
        el.ctscroll();
    });
    document.querySelectorAll(".arrowpagenav a").forEach(function (el) {
        el.addEventListener("click", function (event) {
            event.preventDefault();
        });
    });

    /*
      =======================================================================
                  Scroll To Object 
      =======================================================================
    */
    document.querySelectorAll(".custom-scroll-link").forEach(function (el) {
        el.addEventListener("click", function () {
            var a = 20;
            var b = this.getAttribute("href");
            var target = document.querySelector(b);
            var targetOffset = target.offsetTop;
            window.scrollTo({
                top: targetOffset - a,
                behavior: "smooth"
            });
        });
    });
    document.querySelectorAll(".to-top").forEach(function (el) {
        el.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
    document.querySelectorAll(".carousel-item h3").forEach(function (el) {
        el.addEventListener("mouseenter", function () {
            el.closest(".single-carousel .item").querySelector(".bg").classList.add("hov-rot");
        });
        el.addEventListener("mouseleave", function () {
            el.closest(".single-carousel .item").querySelector(".bg").classList.remove("hov-rot");
        });
    });
    /*
    =======================================================================
                        Menu
    =======================================================================
    */
    var Menu = {
        el: {
            ham: document.querySelector(".nav-button"),
            menuTop: document.querySelector(".menu-top"),
            menuMiddle: document.querySelector(".menu-middle"),
            menuBottom: document.querySelector(".menu-bottom")
        },
        init: function () {
            Menu.bindUIactions();
        },
        bindUIactions: function () {
            Menu.el.ham.addEventListener("click", function (event) {
                Menu.activateMenu(event);
                event.preventDefault();
            });
        },
        activateMenu: function () {
            Menu.el.menuTop.classList.toggle("menu-top-click");
            Menu.el.menuMiddle.classList.toggle("menu-middle-click");
            Menu.el.menuBottom.classList.toggle("menu-bottom-click");
        }
    };
    Menu.init();
    /*
    =======================================================================
                        Contact form
    =======================================================================
    */
    document.getElementById("contactform").addEventListener("submit", function (event) {
        event.preventDefault();
        var formAction = this.getAttribute("action");
        var message = document.getElementById("message");
        message.style.transition = "height 0.75s ease";
        message.style.height = "0";
        document.getElementById("submit").setAttribute("disabled", "disabled");
        var formData = new FormData(this);
        fetch(formAction, {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                message.innerHTML = data;
                message.style.height = message.scrollHeight + "px";
                document.getElementById("submit").removeAttribute("disabled");
                if (data.includes("success")) {
                    document.getElementById("contactform").style.height = "auto";
                }
            })
            .catch(error => console.error('Error:', error));
    });
    document.querySelectorAll("#contactform input, #contactform textarea").forEach(function (element) {
        element.addEventListener("keyup", function () {
            document.getElementById("message").style.height = "0";
        });
    });
    /*
    =======================================================================
                        Video 
    =======================================================================
    */
    var backgroundVideo = document.querySelector(".background-video");
    var l = backgroundVideo.getAttribute("data-vid");
    var m = backgroundVideo.getAttribute("data-mv");
    backgroundVideo.addEventListener("loadedmetadata", function () {
        backgroundVideo.play();
    });
    var one = document.querySelector(".mm-parallax");
    var browserPrefix = "";
    var usrAg = navigator.userAgent;
    if (usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) browserPrefix = "-webkit-";
    else if (usrAg.indexOf("Opera") > -1) browserPrefix = "-o";
    else if (usrAg.indexOf("Firefox") > -1) browserPrefix = "-moz-";
    else if (usrAg.indexOf("MSIE") > -1) browserPrefix = "-ms-";
    document.body.addEventListener("mousemove", function (event) {
        var b = Math.ceil(window.innerWidth / 1.5);
        var c = Math.ceil(window.innerHeight / 1.5);
        var d = event.pageX - b;
        var e = event.pageY - c;
        var f = e / c;
        var g = -(d / b);
        var h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2));
        var i = 10 * h;
        one.style[browserPrefix + "transform"] = "rotate3d(" + f + ", " + g + ", 0, " + i + "deg)";
    });
}
    /*
    =======================================================================
                        Parallax
    =======================================================================
    */
    function initparallax() {
        "use strict";
        var a = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
            }
        };
        var trueMobile = a.any();
        if (trueMobile == null) {
            var b = new Scrollax();
            b.reload();
            b.init();
        }
        if (trueMobile) {
            document.querySelector(".background-video").remove();
        }
    }
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });
    /*
    =======================================================================
                        Init all
    =======================================================================
    */
    document.addEventListener("DOMContentLoaded", function () {
        // initparallax();
        initCooper(); // Assuming initCooper is defined elsewhere
    });
