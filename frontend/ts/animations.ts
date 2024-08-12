const animateUp: NodeListOf<HTMLElement> = document.querySelectorAll('.__animateup');
const animateDown: NodeListOf<HTMLElement> = document.querySelectorAll('.__animatedown');
const animationsXAxis: NodeListOf<HTMLElement> = document.querySelectorAll('.__animateleft, .__animateright');

const setObserver = (elements: NodeListOf<Element> | HTMLElement[], offset: number) => {
    const options: IntersectionObserverInit = {
        root: null,
        rootMargin: `${offset}px`,
        threshold: 0,
    };

    const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target as HTMLElement; // Type-cast to HTMLElement
                targetElement.classList.add('__animate');
                observer.unobserve(targetElement);
            }
        });
    };

    const animationObserver = new IntersectionObserver(callback, options);

    elements.forEach(e => {
        animationObserver.observe(e);
    });
};

// Set observers directly
setObserver(animationsXAxis, 0);
setObserver(animateUp, 0);
setObserver(animateDown, 100);
