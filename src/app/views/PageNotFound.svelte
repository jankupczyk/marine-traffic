<script lang="ts">
    import { Link } from "svelte-routing";
    import { t } from "../i18n/i18n";

</script>

<svelte:head>
    <title>{$t("pgnf.title")} | Marine Traffic</title>
</svelte:head>

<main class="h-screen w-full flex">
    <div class="m-auto text-center">
        <span class="text-4xl mb-4">{$t("pgnf.title")} 😥</span>
        <div class="flex flex-col text-center">
            <span class="m-3 text-2xl">
                Go back to 
                <span class="text-blue-600">
                    <Link to="/">Home page</Link>
                </span>
            </span>
            <span class="m-3 text-2xl">
                or go back to <a class="text-blue-600" href={"javascript:history.back()"}>Previous page</a>
            </span>
            <span class="m-3 text-2xl">
                or <a class="text-blue-600" href={"javascript:window.location.reload(true)"}>refresh your page</a>
            </span>
        </div>
    </div>
</main>
