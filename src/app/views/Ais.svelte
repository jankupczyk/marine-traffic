<script lang="ts">
    import MapComponent from "../components/map-component/MapComponent.svelte";
    import { t } from "../i18n/i18n";
    import { Apis } from "../services/Apis";
    import { HttpMethod } from "../services/HttpMethod";
    import { HttpService } from "../services/HttpService";
    import Modal from "../components/modal-component/Modal.svelte";
    import Alert from "../components/footer/Alert.svelte";
    import Spinner from "../components/footer/Spinner.svelte";
    import viewportAction from "../actions/ViewportAction";

    const httpService: HttpService = new HttpService(Apis.PROD);
</script>

<svelte:head>
    <title>{$t("ais.title")} | Marine Traffic</title>
</svelte:head>

<main use:viewportAction>
    <!-- Request first 300 vessels -->
    {#await Promise.all([
        httpService.send(HttpMethod.GET, `ais?page=0`, null, null),
        httpService.send(HttpMethod.GET, `ais?page=1`, null, null),
        httpService.send(HttpMethod.GET, `ais?page=2`, null, null),
    ])}
        <div class="grid place-content-center" style="height: calc(100vh - 3rem);">
            <Spinner />
        </div>
    {:then [vessels,vessels2,vessels3]}
        <Modal>
            <MapComponent vessels={vessels.concat(vessels2, vessels3)} />
        </Modal>
        <Alert text={$t("ais.map.info")} />
    {:catch err}
        <div class="grid place-content-center text-blue-700 text-base md:text-3xl" style="height: calc(100vh - 3rem);">
            <h2>{$t("fail.data")} 😥</h2>
        </div>
    {/await}
</main>
