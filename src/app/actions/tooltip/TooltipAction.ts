import TooltipComponent from "../../actions/tooltip/TooltipComponent.svelte";

function factory<T>(type: (new () => T)): T {
    return new type();
}

export function tooltipAction(element: HTMLElement) {
    let title: string;
    let tooltipComponent: TooltipComponent;

    function mouseOver(event) {
        title = element.getAttribute('title');
        element.removeAttribute('title');

        tooltipComponent = new TooltipComponent({
            props: {
                title: title,
                x: event.pageX,
                y: event.pageY,
            },
            target: document.body
        });
    }

    function mouseMove(event) {
        tooltipComponent.$set({
            x: event.pageX,
            y: event.pageY,
        });
    }

    function mouseLeave() {
        tooltipComponent.$destroy();
        tooltipComponent = null;
        element.setAttribute('title', title);
    }

    element.addEventListener('mouseover', mouseOver);
    element.addEventListener('mouseleave', mouseLeave);
    element.addEventListener('mousemove', mouseMove);

    return {
        destroy() {
            tooltipComponent.$destroy();
            element.removeEventListener('mouseover', mouseOver);
            element.removeEventListener('mouseleave', mouseLeave);
            element.removeEventListener('mousemove', mouseMove);
        }
    }
}