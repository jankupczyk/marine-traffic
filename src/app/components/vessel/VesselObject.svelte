<script lang="ts">
    import { t } from "../../i18n/i18n";
    import { Apis } from "../../services/Apis";
    import { HttpMethod } from "../../services/HttpMethod";
    import { HttpService } from "../../services/HttpService";
    import Spinner from "../footer/Spinner.svelte";
    import markerData from "../others/markersData";

    export let vesselId;
    export let objectId;

    const httpService = new HttpService(Apis.PROD);

    const loadImage = (url) => 
        new Promise((resolve, reject) => {
            const img = new Image();
            img.addEventListener('load', () => resolve(img));
            img.addEventListener('error', (err) => reject(err));
            img.src = url;
        });

        const filterKeys = (arr) => {
            return arr.filter(e => ['mmsi', 'name', 'callsign', 'country', 'destination', 'lat', 'lon'].includes(e));
        }
</script>

<div class="grid place-content-center place-items-center p-3 text-blue-800">
    {#if vesselId}
        {#await httpService.send(HttpMethod.GET, `ais/${vesselId}`, null, null)}
            <Spinner />
        {:then vesselData}
            <header class="w-full flex">
                <div class="flex my-auto mx-1">
                    <img src="https://flagicons.lipis.dev/flags/4x3/no.svg" class="w-7 h-7 rounded-sm" alt="">
                </div>
                <div class="flex flex-col">
                    <h2 class="font-bold uppercase text-lg" style="line-height: 1rem;">{vesselData.name}</h2>
                    <span class="font-light capitalize">{vesselData.shipTypeText}</span>
                </div>
            </header>

            <img class="w-auto h-auto" src={"images/default.jpg"} alt={vesselData.name || "Vessel"} />

            <article class="w-full my-4 text-xs text-left">
                {#each filterKeys(Object.keys(vesselData)) as d}
                    <div class="flex flex-row">
                        <span >{d}:</span>
                        <span class="ml-2">{vesselData[d] ? vesselData[d] : "----"}</span>
                    </div>
                {/each}
            </article>

            <footer class="flex flex-col">
                <div class="flex flex-row">
                    <span class="font-normal">Received:</span>
                    <span class="font-semibold ml-2">{Math.round((((new Date().getTime() - new Date(vesselData.timeStamp).getTime()) / 1000) / 60))} {$t("ais.vessel.object.received.text")}</span>
                </div>
                <div class="flex flex-row">
                    <span class="font-normal">Date:</span>
                    <span class="font-semibold ml-2">{`${new Date(vesselData.timeStamp).getDate()}-${new Date(vesselData.timeStamp).getMonth() + 1}-${new Date(vesselData.timeStamp).getFullYear()}`}</span>
                </div>
            </footer>
        {/await}
    {:else}
        <header class="w-full flex">
            <div class="flex flex-col">
                <h2 class="font-bold uppercase text-lg m-2" style="line-height: 1rem;">{markerData[objectId].name}</h2>
            </div>
        </header>

        <img class="w-auto h-auto" src={markerData[objectId].img} alt={markerData[objectId].name} />

        <div class="text-base p-1">
            {$t(markerData[objectId].translation)}
        </div>

        <a href={markerData[objectId].sourceLink} target="_blank">{$t("more.info")}</a>
    {/if}
</div>