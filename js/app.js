(function() {
    const header = document.querySelector('.header');
    window.onscroll =  () => {
        if(window.pageYOffset > 500) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

let burger = document.querySelector('.burger');
let headerSubnav = document.querySelector('.header__subnav');
let burgerActive = document.querySelector('.burger__active');
let subnavLink1 = document.querySelector('.shop');
let subnavLink2 = document.querySelector('.explore');
let subnavLink3 = document.querySelector('.mycart');

burger.addEventListener('click', () => {
    headerSubnav.classList.add('header__subnav-active');
    burger.classList.add('burger__close');
    burgerActive.classList.add('burger__active-show');
});

burgerActive.addEventListener('click', () => {
    headerSubnav.classList.remove('header__subnav-active');
    burger.classList.remove('burger__close');
    burgerActive.classList.remove('burger__active-show');
});

subnavLink1.addEventListener('click', () => {
    headerSubnav.classList.remove('header__subnav-active');
    burger.classList.remove('burger__close');
    burgerActive.classList.remove('burger__active-show');
});

subnavLink2.addEventListener('click', () => {
    headerSubnav.classList.remove('header__subnav-active');
    burger.classList.remove('burger__close');
    burgerActive.classList.remove('burger__active-show');
});

subnavLink3.addEventListener('click', () => {
    headerSubnav.classList.remove('header__subnav-active');
    burger.classList.remove('burger__close');
    burgerActive.classList.remove('burger__active-show');
});

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());