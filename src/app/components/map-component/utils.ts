import type { Marker } from "./markers";
import * as L from "leaflet";
import type { Vessel } from "../vessel/Vessel";
import VesselObject from "../vessel/VesselObject.svelte";
import { LAYERS } from "./layers";

const capitalize = (str) => str && str[0].toUpperCase() + str.slice(1);

function bindPopup(marker, callback: Function) {
    let component;

    marker.bindPopup(() => {
        const container = L.DomUtil.create('div');
        component = callback(container);

        return container;
    });

    marker.on('popupclose', () => {
        if (component) {
            let old = component;
            component = null;

            setTimeout(() => {
                old.$destroy();
            }, 500);
        }
    });
}

function createPopup(id: number, icon: any): L.divIcon {
    return L.divIcon({
        html: icon,
        className: id ? `vessel_${id}` : `popup`
    });
}

export function createPopups(markers: Marker[]): L.LayerGroup {
    const layerGroup = new L.LayerGroup();

    markers.forEach(m => {
        let marker = L.marker(
            [m.lat, m.lon],
            { icon: createPopup(null, m.svg) }
        );

        bindPopup(marker, (mClbck) => {
            let c = new VesselObject({
                props: { 
                    vesselId: null,
                    objectId: m.id
                },
                target: mClbck
            });
        });

        marker.addTo(layerGroup);
    });

    return layerGroup;
}

export function getLayers(): object {
    const layers = [];

    Object.keys(LAYERS).forEach(
        val => layers.push([capitalize(val), L.tileLayer(LAYERS[val].url, LAYERS[val].props)])
    );

    return Object.fromEntries(new Map(layers));
}

function mapVesselTypeToColor(): string {
    return getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

export const r = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export function createVessels(vessels: any[]): L.LayerGroup {
    const layerGroup = new L.LayerGroup();

    let marker;

    vessels.forEach(vessel => {
        marker = L.marker(
            [vessel.lat, vessel.lon],
            {
                icon: createPopup(vessel.id, `<svg fill="${mapVesselTypeToColor()}" width="15" height="15"><path d="M4 14V5.6L7 0l3 5.6V14l-3-3.27L4 14z" /></svg>`),
                rotationAngle: r(0, 360)
            },
        );

        bindPopup(marker, (mClbck) => {
            let c = new VesselObject({
                props: {
                    vesselId: vessel.id,
                    objectId: null
                },
                target: mClbck
            });
        });

        marker.addTo(layerGroup);
    });

    return layerGroup;
}