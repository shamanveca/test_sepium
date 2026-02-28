{
    window.DataAboutLikes = [];

    function makeDataLike(indexOfKitchenCart, numberOfLikes, iLikeIt) {
        return {
           indexOfKitchenCart,
           numberOfLikes,
           iLikeIt,
           isVisible: false
        }
    };

    let kitchenCarts = Array.from(document.querySelectorAll(".kitchen"));

    kitchenCarts.forEach((el, index) => {
        let indCard = index;
        let numberOfLikes = +el.querySelector(".footer__likes-nuber").textContent;
        let btn = el.querySelector(".footer__likes");

        let iLikeIt = () => {
            if (btn.classList.contains("footer__likes--active")) {
                return true;
            } else {
                return false;
            }
        };

        DataAboutLikes.push(makeDataLike(indCard, numberOfLikes, iLikeIt()));
    });

    console.log(window.DataAboutLikes);
}
