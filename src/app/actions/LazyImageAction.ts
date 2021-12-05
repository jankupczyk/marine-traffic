let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver(): void {
    if (intersectionObserver) return;

    intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const eventName = entry.isIntersecting
                ? "enterViewport"
                : "exitViewport";
            entry.target.dispatchEvent(new CustomEvent(eventName));
        });
    });
}

function viewport(element: any): any {
    ensureIntersectionObserver();

    intersectionObserver.observe(element);

    return {
        destroy() {
            intersectionObserver.unobserve(element);
        },
    };
}

export default function lazyImageAction(element: any): any {
    const action = viewport(element);
    element.addEventListener("enterViewport", enterViewport);

    function enterViewport() {
        element.src = element.dataset.src;
        element.removeEventListener("enterViewport", enterViewport);
    }

    return {
        destroy() {
            action.destroy();
            element.removeEventListener("enterViewport", enterViewport);
        },
    };
}