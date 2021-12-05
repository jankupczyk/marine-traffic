import { Icon } from "../others/Icon";

export interface Marker {
    lat: number,
    lon: number,
    id: string,
    label: string
    svg: Icon
}

export const MARKERS: Marker[] = [
    { 
        lat: 0.0, 
        lon: 0.0,
        id: "nullIsland",
        label: "Null Island",
        svg: Icon.X
    },
    { 
        lat: 54.55953, 
        lon: 18.54703,
        id: "ctm",
        label: "CTM Building",
        svg: Icon.CTM
    },
];
