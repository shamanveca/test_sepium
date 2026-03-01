

const mediaQuery = window.matchMedia('(max-width: 1199px)');
console.log(mediaQuery.matches);

let autoScrollIMG;
let kitchenCarts = Array.from(document.querySelectorAll(".kitchen"));

let autoSrcoll = function() {
    window.DataAboutLikes.forEach((el, index) => {
                
        if (el.isVisible && el.scrollOn === false) {
            let oneCardFotos = kitchenCarts[index].querySelectorAll("img[class^='slider__img--']");
            let sledeBTN = kitchenCarts[index].querySelectorAll(".slider-toggle");
            let slideCount = oneCardFotos.length - 1;
            let i = 0;
            let j = 0;

            autoScrollIMG = setInterval(() => {
                oneCardFotos[i].classList.remove("slider__img--active");
                sledeBTN[i].classList.remove("slider-toggle--active");

                oneCardFotos[i].classList.add("slider__img--active-prev");
                setTimeout(() => { 
                    oneCardFotos[j].classList.remove("slider__img--active-prev");
                    j++;
                    if (j > slideCount) j = 0;

                }, 300);

                i++;
                if (i > slideCount) i = 0;

                oneCardFotos[i].classList.add("slider__img--active");
                sledeBTN[i].classList.add("slider-toggle--active");
                
                // if (el.isVisible === false) {
                //     clearInterval(autoScrollIMG);
                //     el.scrollOn = false;

                // }

            }, 3000);

            el.scrollOn = true;

        } else if (el.isVisible === false) {
            clearInterval(autoScrollIMG);
            el.scrollOn = false;

        }
    });
}

if (mediaQuery.matches) {
    
    kitchenCarts.forEach((el, index) => {
        let isVisible = el.getBoundingClientRect().top < window.innerHeight && 
                        el.getBoundingClientRect().bottom >= 0 && 
                        el.getBoundingClientRect().left < window.innerWidth && 
                        el.getBoundingClientRect().right >= 0;

        window.DataAboutLikes[index].isVisible = isVisible;
    });

    autoSrcoll();

    window.addEventListener("scrollend", (evt) => {

        kitchenCarts.forEach((el, index) => {
            let isVisible = el.getBoundingClientRect().top < window.innerHeight && 
                            el.getBoundingClientRect().bottom >= 0 && 
                            el.getBoundingClientRect().left < window.innerWidth && 
                            el.getBoundingClientRect().right >= 0;

            window.DataAboutLikes[index].isVisible = isVisible;
        });

        
        autoSrcoll();
        
        
        // clearInterval(autoScrollIMG);
        // console.log(window.DataAboutLikes);
    });
}


window.addEventListener("resize", () => {
    if (mediaQuery.matches) {

        kitchenCarts.forEach((el, index) => {
            let isVisible = el.getBoundingClientRect().top < window.innerHeight && 
                            el.getBoundingClientRect().bottom >= 0 && 
                            el.getBoundingClientRect().left < window.innerWidth && 
                            el.getBoundingClientRect().right >= 0;

            window.DataAboutLikes[index].isVisible = isVisible;
        });

        autoSrcoll();

        window.addEventListener("scrollend", (evt) => {

            kitchenCarts.forEach((el, index) => {
                let isVisible = el.getBoundingClientRect().top < window.innerHeight && 
                                el.getBoundingClientRect().bottom >= 0 && 
                                el.getBoundingClientRect().left < window.innerWidth && 
                                el.getBoundingClientRect().right >= 0;

                window.DataAboutLikes[index].isVisible = isVisible;
            });

            
            autoSrcoll();
            
            
            // clearInterval(autoScrollIMG);
            // console.log(window.DataAboutLikes);
        });
    } else {
        clearInterval(autoScrollIMG);
       
    }
});


