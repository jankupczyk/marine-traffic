import Ais from "../views/Ais.svelte";
import Home from "../views/Home.svelte";
import FishHealth from "../views/FishHealth.svelte";
import Polarlows from "../views/Polarlows.svelte";
import Saltstraumen from "../views/Saltstraumen.svelte";
import WaveForecast from "../views/WaveForecast.svelte";
import PageNotFound from "../views/PageNotFound.svelte";

interface Route {
    path: string,
    text: string,
    translation: string,
    component: any,
    topNavbar: boolean
}

export const ROUTES: Route[] = [
    { 
        path: "/",
        text: "Home",
        translation: "homepage.title",
        component: Home,
        topNavbar: true
    },
    { 
        path: "/ais",
        text: "Ais",
        translation: "ais.title.short",
        component: Ais,
        topNavbar: true
    },
    { 
        path: "/fish-health",
        text: "Fish health",
        translation: "fishhealth.title",
        component: FishHealth,
        topNavbar: true
    },
    { 
        path: "/polar-lows",
        text: "Polar lows",
        translation: "polarlows.title",
        component: Polarlows,
        topNavbar: true
    },
    { 
        path: "/saltstraumen",
        text: "Saltstraumen",
        translation: "saltstraumen.title",
        component: Saltstraumen,
        topNavbar: true
    },
    { 
        path: "/wave-forecast",
        text: "Wave forecast",
        translation: "waveforecast.title",
        component: WaveForecast,
        topNavbar: true
    },
    { 
        path: undefined,
        text: "Page Not Found",
        translation: "pgnf.title",
        component: PageNotFound,
        topNavbar: false
    }, 
];