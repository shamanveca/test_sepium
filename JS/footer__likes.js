{

let kitchenCarts = Array.from(document.querySelectorAll(".kitchen"));

kitchenCarts.forEach(el => {
    el.addEventListener("click", function(evt) {
        let pushBTN = evt.currentTarget.querySelector(".footer__likes");
        let indexCard = kitchenCarts.indexOf(evt.currentTarget);
        let likeNumberNow = DataAboutLikes[indexCard].numberOfLikes;

        if (pushBTN === evt.target) {
            evt.preventDefault();

            if (window.DataAboutLikes[indexCard].iLikeIt === false) {
                window.DataAboutLikes[indexCard].iLikeIt = true;
                pushBTN.classList.add("footer__likes--active");

                pushBTN.querySelector(".footer__likes-nuber").textContent = likeNumberNow + 1;

                window.DataAboutLikes[indexCard].numberOfLikes = likeNumberNow + 1;
            } else {
                window.DataAboutLikes[indexCard].iLikeIt = false;
                pushBTN.classList.remove("footer__likes--active");

                pushBTN.querySelector(".footer__likes-nuber").textContent = likeNumberNow - 1;

                window.DataAboutLikes[indexCard].numberOfLikes = likeNumberNow - 1;
                console.log(pushBTN, DataAboutLikes);
            }
        }
    }, true);
});



}



