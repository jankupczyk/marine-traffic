<script lang="ts">
    import * as L from "leaflet";
    import "leaflet/dist/leaflet.css";
    import { getUserGeolocation } from "../others/geolocation";
    import CursorCoordinates from "./CursorCoordinates.svelte";
    import { CursorControl } from "./CursorControl";
    import { LAYERS } from "./layers";
    import { MARKERS } from "./markers";
    import { createPopups, createVessels, getLayers } from "./utils";
    import MapToolbar from "../map-toolbar/MapToolbar.svelte";
    import type { Vessel } from "../vessel/Vessel";
    import { getContext, onMount } from "svelte";

    const { open } = getContext("simple-modal");

    onMount(() => {
        const selector = `#map > div.leaflet-control-container > div.leaflet-top.leaflet-right > div > section > div.leaflet-control-layers-base > label > div > input`;
        (<HTMLInputElement>document.querySelector(selector)).checked = true;
    });

    export let vessels: Vessel[] = [];
    
    let mapElement: any;
    let lon: number, lat: number;
    let scale;
    let markers;
    let vesselGroup;

    function leafletMapAction(element: HTMLElement) {
        // Construct map
        mapElement = L.map(element, {
            zoom: 6,
            doubleClickZoom: false,
            maxBounds: L.latLngBounds(L.latLng(105, -180), L.latLng(-105, 180)),
        });

        L.tileLayer(LAYERS.base.url, LAYERS.base.params).addTo(mapElement);

        // Add layers, markers and vessels to map
        L.control.layers(getLayers()).addTo(mapElement);
        markers = createPopups(MARKERS).addTo(mapElement);
        vesselGroup = createVessels(vessels).addTo(mapElement);
        scale = L.control.scale();        

        // Starting coordinates based on user geolocation
        getUserGeolocation().then((coords) => {
            L.circle([coords.lat, coords.lon], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.40,
                radius: 500
            }).addTo(mapElement);

            mapElement.setView([coords.lat, coords.lon], 6);
        });
        
        mapElement.addControl(scale);
        mapElement.addControl(new CursorControl());
        mapElement.addEventListener("mousemove", updateCursor);

        return {
            update: () => {},
            destroy: () => {
                mapElement.removeEventListener("mousemove", updateCursor);
                mapElement.remove();
            },
        };
    }

    function updateCursor(event) {
        lat = +(Math.round(event.latlng.lat * 100000) / 100000).toFixed(5);
        lon = +(Math.round(event.latlng.lng * 100000) / 100000).toFixed(5);
    }

    function filterVessel(event) {
        console.log("Coming Soon...");
        // open(Block, { color: "red" });
    }

    function showMarkers(event) {
        if (markers) {
            markers.remove();
            markers = null;
        } else {
            markers = createPopups(MARKERS);
            markers.addTo(mapElement);
        }
    }

    function showLines(event) {
        console.log("Coming Soon...");
    }

    function resetView(event) {
        mapElement.setView([0, 0], 6);
    }

    function resizeMap() {
        mapElement.invalidateSize();
    }
</script>

<svelte:window on:resize={() => resizeMap()} />

<div class="flex">
    <MapToolbar
        on:filterVessel={filterVessel}
        on:showMarkers={showMarkers}
        on:showLines={showLines}
        on:resetView={resetView}
    />
    <div
        id="map"
        style="height: calc(100vh - 3rem);"
        class="w-full"
        use:leafletMapAction
    />
    <CursorCoordinates {lon} {lat} />
</div>
