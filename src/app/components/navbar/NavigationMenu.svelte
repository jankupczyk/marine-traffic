<script lang="ts">
    import { ROUTES } from "../../routing/routes";
    import { link } from "svelte-routing";
    import { t } from "../../i18n/i18n";
</script>

<div class="flex flex-col items-center no-select">
    <label for="menu-toggle" class="cursor-pointer items-center lg:hidden block mr-2" style="margin-top: 6px;">
        <svg class="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />
    <div class="hidden w-auto p-4 flex-col lg:p-0 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:w-auto z-9999 bg-blue-800" id="menu">
        {#each ROUTES as rt}
            {#if rt.path}
                <a href={rt.path} class="relative flex bg-none border-none cursor-pointer mx-4 uppercase font-semibold text-gray-100 text-base md:text-sm" use:link>
                    {$t(rt.translation)}
                </a>
            {/if}
        {/each}
    </div>
</div>

<style>
    #menu-toggle:checked ~ #menu {
        display: flex;
    }

    #menu > a::after {
        content: "";
        display: inline-block;
        position: absolute;
        left: 0px;
        bottom: -4px;
        background-color: rgb(243, 244, 246);
        width: 0%;
        height: 4px;
        transition: all 500ms;
    }

    #menu > a:hover::after {
        width: 100%;
    }
</style>