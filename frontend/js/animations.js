const animateLeft = document.querySelectorAll('.__animateleft');
const animateRight = document.querySelectorAll('.__animateright');
const animateUp = document.querySelectorAll('.__animateup');
const animateDown = document.querySelectorAll('.__animatedown');
const animations = [...animateLeft, ...animateRight];
const messagesContainer = document.querySelector('.messages');
const closeMessagesBtn = document.querySelectorAll('.messages-close');

const setObserver = (el, offset) => {
    const options = {
        root: null,
        rootMargin: `${offset}px`,
        threshold: 0,
    }

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('__animate');
                observer.unobserve(entry.target);
            }
        })
    }

    const animationObserver = new IntersectionObserver(callback, options);

    el.forEach(e => {
        animationObserver.observe(e);
    })
}

// observer for animate left/right
setObserver(animations, 0);

// observer for animate up
setObserver(animateUp, 0);

// observer for animate down
setObserver(animateDown, 100);