<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { Icon } from "../others/Icon";
    import Toolbar from "./Toolbar.svelte";

    const dispatch = createEventDispatcher();

    export let elements = [
        {
            text: "Vessel filter",
            icon: Icon.FILTER,
            callback: () => dispatch("filterVessel"),
        },
        {
            text: "Show markers",
            icon: Icon.EYE,
            iconOff: Icon.EYE_OFF,
            callback: () => dispatch("showMarkers"),
        },
        {
            text: "Show lines",
            icon: Icon.VIEW_LIST,
            callback: () => dispatch("showLines"),
        },
        {
            text: "Reset view",
            icon: Icon.X,
            callback: () => dispatch("resetView"),
        },
    ];
</script>

<nav
    style="margin-left: 10px;"
    class="z-9999 absolute w-12 top-32 flex flex-col"
>
    <ul>
        {#each elements as e}
            <li class="my-2">
                <Toolbar
                    props={{ text: e.text, icon: e.icon }}
                    on:click={e.callback}
                />
            </li>
        {/each}
    </ul>
</nav>
