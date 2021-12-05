<script>
    import * as svelte from "svelte";
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const baseSetContext = svelte.setContext;

    export let key = "simple-modal";
    export let closeButton = true;
    export let closeOnEsc = true;
    export let closeOnOuterClick = true;
    export let styleBg = { top: 0, left: 0 };
    export let styleWindowWrap = {};
    export let styleWindow = {};
    export let styleContent = {};
    export let styleCloseButton = {};
    export let setContext = baseSetContext;
    export let transitionBg = fade;
    export let transitionBgProps = { duration: 250 };
    export let transitionWindow = transitionBg;
    export let transitionWindowProps = transitionBgProps;

    const defaultState = {
        closeButton,
        closeOnEsc,
        closeOnOuterClick,
        styleBg,
        styleWindowWrap,
        styleWindow,
        styleContent,
        styleCloseButton,
        transitionBg,
        transitionBgProps,
        transitionWindow,
        transitionWindowProps,
    };
    let state = { ...defaultState };

    let Component = null;
    let props = null;

    let background;
    let wrap;
    let modalWindow;

    const camelCaseToDash = (str) =>
        str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();

    const toCssString = (props) =>
        Object.keys(props).reduce(
            (str, key) => `${str}; ${camelCaseToDash(key)}: ${props[key]}`,
            ""
        );

    const isFunction = (f) => !!(f && f.constructor && f.call && f.apply);

    $: cssBg = toCssString(state.styleBg);
    $: cssWindowWrap = toCssString(state.styleWindowWrap);
    $: cssWindow = toCssString(state.styleWindow);
    $: cssContent = toCssString(state.styleContent);
    $: cssCloseButton = toCssString(state.styleCloseButton);
    $: currentTransitionBg = state.transitionBg;
    $: currentTransitionWindow = state.transitionWindow;

    const toVoid = () => {};
    let onOpen = toVoid;
    let onClose = toVoid;
    let onOpened = toVoid;
    let onClosed = toVoid;

    const open = (NewComponent, newProps = {}, options = {}, callback = {}) => {
        Component = NewComponent;
        props = newProps;
        state = { ...defaultState, ...options };
        (onOpen = (event) => {
            if (callback.onOpen) callback.onOpen(event);
            dispatch("opening");
        }),
            (onClose = (event) => {
                if (callback.onClose) callback.onClose(event);
                dispatch("closing");
            }),
            (onOpened = (event) => {
                if (callback.onOpened) callback.onOpened(event);
                dispatch("opened");
            });
        onClosed = (event) => {
            if (callback.onClosed) callback.onClosed(event);
            dispatch("closed");
        };
    };

    const close = (callback = {}) => {
        onClose = callback.onClose || onClose;
        onClosed = callback.onClosed || onClosed;
        Component = null;
        props = null;
    };

    const handleKeydown = (event) => {
        if (state.closeOnEsc && Component && event.key === "Escape") {
            event.preventDefault();
            close();
        }

        if (Component && event.key === "Tab") {
            const nodes = modalWindow.querySelectorAll("*");
            const tabbable = Array.from(nodes).filter(
                (node) => node.tabIndex >= 0
            );

            let index = tabbable.indexOf(document.activeElement);
            if (index === -1 && event.shiftKey) index = 0;

            index += tabbable.length + (event.shiftKey ? -1 : 1);
            index %= tabbable.length;

            tabbable[index].focus();
            event.preventDefault();
        }
    };

    const handleOuterClick = (event) => {
        if (
            state.closeOnOuterClick &&
            (event.target === background || event.target === wrap)
        ) {
            event.preventDefault();
            close();
        }
    };

    setContext(key, { open, close });
</script>

<svelte:window on:keydown={handleKeydown} />

{#if Component}
    <div
        class="bg fixed grid place-content-center w-full h-full"
        on:click={handleOuterClick}
        bind:this={background}
        transition:currentTransitionBg={state.transitionBgProps}
        style={cssBg}
    >
        <div class="window-wrap right-0 relative max-h-full m-14" bind:this={wrap} style={cssWindowWrap}>
            <div
                class="window relative w-96 max-w-full max-h-full"
                id="modal-dialog"
                role="dialog"
                aria-modal="true"
                bind:this={modalWindow}
                transition:currentTransitionWindow={state.transitionWindowProps}
                on:introstart={onOpen}
                on:outrostart={onClose}
                on:introend={onOpened}
                on:outroend={onClosed}
            >
                {#if state.closeButton}
                    {#if isFunction(state.closeButton)}
                        <svelte:component
                            this={state.closeButton}
                            onClose={close}
                        />
                    {:else}
                        <button
                            on:click={close}
                            class="close block box-border absolute top-3 right-3 m-0 p-0 w-8 h-8 border-0"
                            style={cssCloseButton}
                        />
                    {/if}
                {/if}
                <div class="content relative p-4 overflow-auto" style={cssContent}>
                    <svelte:component this={Component} {...props} />
                </div>
            </div>
        </div>
    </div>
{/if}
<slot />

<style>
    :root {
        --primaryBack: rgba(30, 64, 175, .9);
        --primaryText: rgb(229, 231, 235);
    }

    * {
        box-sizing: border-box;
    }

    .bg {
        z-index: 9998;
    }

    .window {
        z-index: 9998;
        color: var(--primaryText);
        border: 1px solid rgba(80, 80, 80, 0.85);
        background: var(--primaryBack);
    }

    .close {
        z-index: 99999;
        color: var(--primaryText);
        transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
            background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
        -webkit-appearance: none;
    }

    .close:before,
    .close:after {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        width: 1.5rem;
        height: 1px;
        background: var(--primaryText);
        transform-origin: center;
        transition: height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
            background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    .close:before {
        -webkit-transform: translate(0, -50%) rotate(45deg);
        -moz-transform: translate(0, -50%) rotate(45deg);
        transform: translate(0, -50%) rotate(45deg);
        left: 0.25rem;
        height: 3px;
    }

    .close:after {
        -webkit-transform: translate(0, -50%) rotate(-45deg);
        -moz-transform: translate(0, -50%) rotate(-45deg);
        transform: translate(0, -50%) rotate(-45deg);
        left: 0.25rem;
        height: 3px;
    }

    .close:hover {
        transform: rotate(180deg);
        transition: 250ms ease-in;
        cursor: pointer;
    }

    .close:hover:before,
    .close:hover:after {
        height: 2px;
    }

    .close:active {
        transform: scale(0.85);
    }

    .close:hover,
    .close:focus,
    .close:active {
        outline: none;
    }
</style>
