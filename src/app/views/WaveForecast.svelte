<script lang="ts">
    import ComingSoon from "../components/footer/ComingSoon.svelte";
    import Wave from "../components/footer/Wave.svelte";
    import { t } from "../i18n/i18n";
</script>

<svelte:head>
    <title>{$t("waveforecast.title")} | Marine Traffic</title>
</svelte:head>

<main>
    <ComingSoon />
    <Wave />
</main>
