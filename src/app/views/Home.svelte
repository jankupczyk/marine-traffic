<script lang="ts">
    import Wave from "../components/footer/Wave.svelte";
    import { link } from "svelte-routing";
    import { t } from "../i18n/i18n";
</script>

<svelte:head>
    <title>{$t("homepage.title")} | Marine Traffic</title>
</svelte:head>

<main>
    <div class="grid place-content-center font-semibold text-base md:text-2xl lg:text-4xl text-blue-800" style="height: calc(100vh - 5rem);">
        <p>{$t("coming.soon")} 📡</p>
        <a href="/ais" use:link>
            Go to →
            <span class="font-extrabold">AIS</span>
        </a>
    </div>
    <Wave />
</main>
