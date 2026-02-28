{
    Fancybox.bind("[data-fancybox]", {
            hideScrollbar: false,

            Carousel: {
                Zoomable: {
                    Panzoom: {
                        clickAction: "iterateZoom",
                        maxScale: 2,
                    },
                },
            },
    });

    let kitchenCarts = Array.from(document.querySelectorAll(".kitchen"));

    kitchenCarts.forEach(el => {
        el.addEventListener("click", function(evt) {
            let slideIMG = Array.from(evt.currentTarget.querySelectorAll("img[class^='slider__img--']"));
            let sledeBTN = Array.from(evt.currentTarget.querySelectorAll(".slider-toggle"));

            let zoomBTN = evt.currentTarget.querySelector(".kitchen__btn-zoom");
            let prev = evt.currentTarget.querySelector(".kitchen__btn-left");
            let next = evt.currentTarget.querySelector(".kitchen__btn-right");

            let indButtonPush = sledeBTN.indexOf(evt.target);
            let indButtonActive = 0;

            if (zoomBTN === evt.target) {
                sledeBTN.forEach(function(el) {
                    if (el.classList.contains("slider-toggle--active")) { 
                        indButtonActive = sledeBTN.indexOf(el); 
                    } 
                });

                zoomBTN.dataset.fancyboxIndex = indButtonActive;
            }

            if (sledeBTN.includes(evt.target)) {
                evt.preventDefault();

                sledeBTN.forEach(function(el) {
                    if (el.classList.contains("slider-toggle--active")) { 
                        indButtonActive = sledeBTN.indexOf(el); 
                    } 
                });

                sledeBTN[indButtonActive].classList.remove("slider-toggle--active");
                slideIMG[indButtonActive].classList.add("slider__img--active-prev");
                setTimeout(() => {
                    slideIMG[indButtonActive].classList.remove("slider__img--active-prev");
                }, 300);
                slideIMG[indButtonActive].classList.remove("slider__img--active");

                sledeBTN[indButtonPush].classList.add("slider-toggle--active");
                slideIMG[indButtonPush].classList.add("slider__img--active");
            }

            if (prev === evt.target) {
                evt.preventDefault();

                sledeBTN.forEach(el => {
                    if (el.classList.contains("slider-toggle--active")) {
                        indButtonActive = sledeBTN.indexOf(el);
                    }
                });

                if (indButtonActive == 0) {
                    sledeBTN[indButtonActive].classList.remove("slider-toggle--active");
                    sledeBTN[sledeBTN.length - 1].classList.add("slider-toggle--active");

                    slideIMG[indButtonActive].classList.remove("slider__img--active");
                    slideIMG[indButtonActive].classList.add("slider__img--active-prev");
                    setTimeout(() => {
                        slideIMG[indButtonActive].classList.remove("slider__img--active-prev");
                    }, 300);
                    

                    slideIMG[slideIMG.length - 1].classList.add("slider__img--active");
                } else {
                    sledeBTN[indButtonActive].classList.remove("slider-toggle--active");
                    sledeBTN[indButtonActive - 1].classList.add("slider-toggle--active");

                    slideIMG[indButtonActive].classList.remove("slider__img--active");
                    slideIMG[indButtonActive].classList.add("slider__img--active-prev");
                    setTimeout(() => {
                        slideIMG[indButtonActive].classList.remove("slider__img--active-prev");
                    }, 300);

                    slideIMG[indButtonActive - 1].classList.add("slider__img--active");
                }
            }

            if (next === evt.target) {
                evt.preventDefault();

                sledeBTN.forEach(el => {
                    if (el.classList.contains("slider-toggle--active")) {
                        indButtonActive = sledeBTN.indexOf(el);
                    }
                });

                if (indButtonActive == sledeBTN.length - 1) {
                    sledeBTN[indButtonActive].classList.remove("slider-toggle--active");
                    sledeBTN[0].classList.add("slider-toggle--active");

                    slideIMG[indButtonActive].classList.remove("slider__img--active");
                    slideIMG[indButtonActive].classList.add("slider__img--active-next");
                    setTimeout(() => {
                        slideIMG[indButtonActive].classList.remove("slider__img--active-next");
                    }, 300);

                    slideIMG[0].classList.add("slider__img--active");
                } else {
                    sledeBTN[indButtonActive].classList.remove("slider-toggle--active");
                    sledeBTN[indButtonActive + 1].classList.add("slider-toggle--active");

                    slideIMG[indButtonActive].classList.remove("slider__img--active");
                    slideIMG[indButtonActive].classList.add("slider__img--active-next");
                    setTimeout(() => {
                        slideIMG[indButtonActive].classList.remove("slider__img--active-next");
                    }, 300);

                    slideIMG[indButtonActive + 1].classList.add("slider__img--active");
                }
            }
            
        }, true);
    });
    
}