const animations: NodeListOf<HTMLElement> = document.querySelectorAll('.__animateleft, .__animateright, .__animateup');
const animateDown: NodeListOf<HTMLElement> = document.querySelectorAll('.__animatedown'); // animateDown is handled separately as it requires a higher threshold

const setObserver = (elements: NodeListOf<Element> | HTMLElement[], offset: number): void => {
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
setObserver(animations, 0);
setObserver(animateDown, 100);
