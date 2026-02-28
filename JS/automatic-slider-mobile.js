

const mediaQuery = window.matchMedia('(max-width: 1199px)');
console.log(mediaQuery.matches);



let kitchenCarts = Array.from(document.querySelectorAll(".kitchen"));

kitchenCarts.forEach((el, index) => {
    let isVisible = el.getBoundingClientRect().top < window.innerHeight && 
                    el.getBoundingClientRect().bottom >= 0 && 
                    el.getBoundingClientRect().left < window.innerWidth && 
                    el.getBoundingClientRect().right >= 0;

    window.DataAboutLikes[index].isVisible = isVisible;
});

// let oneKitchen = document.querySelector(".kitchen")
// let oneCardFotos = oneKitchen.querySelectorAll("img[class^='slider__img--']");
// let slideCount = oneCardFotos.length - 1;
// let i = 0;

// let autoScrollIMG = setInterval(() => {
//     oneCardFotos[i].classList.remove("slider__img--active");
//     i++;
//     if (i > slideCount) i = 0;
//     oneCardFotos[i].classList.add("slider__img--active");
    

//     console.log(i);

// }, 1000);



window.addEventListener("scroll", function() {

    kitchenCarts.forEach((el, index) => {
        let isVisible = el.getBoundingClientRect().top < window.innerHeight && 
                        el.getBoundingClientRect().bottom >= 0 && 
                        el.getBoundingClientRect().left < window.innerWidth && 
                        el.getBoundingClientRect().right >= 0;

        window.DataAboutLikes[index].isVisible = isVisible;
    });

    

    

    
    
    // clearInterval(autoScrollIMG);
 console.log(window.DataAboutLikes);
});

let autoScrollIMG;
window.DataAboutLikes.forEach((el, index) => {

    if (el.isVisible) {

        let oneCardFotos = kitchenCarts[index].querySelectorAll("img[class^='slider__img--']");
        let sledeBTN = kitchenCarts[index].querySelectorAll(".slider-toggle");
        let slideCount = oneCardFotos.length - 1;
        let i = 0;

        autoScrollIMG = setInterval(() => {
            oneCardFotos[i].classList.remove("slider__img--active");
            sledeBTN[i].classList.remove("slider-toggle--active");
            i++;
            if (i > slideCount) i = 0;
            oneCardFotos[i].classList.add("slider__img--active");
            sledeBTN[i].classList.add("slider-toggle--active");
            

            // console.log(i);
            // console.log(window.DataAboutLikes[index].isVisible);

        }, 1000);
    } 
});