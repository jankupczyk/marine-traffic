<script lang="ts">
    export let lon: number = 0;
    export let lat: number = 0;

    const a = (t: number) => Math.abs(t);
    const tr = (t: number) => Math.trunc(t);

    const norm = (t: number) => {
        if (t > 0) {
            while(t > 360) 
                t -= 360;
        } else {
            while(t < -360) 
                t += 360;
        }

        return parseFloat(t.toFixed(5));
    }

    $: lon = a(lon) > 360 ? norm(lon) : lon;
</script>

<div class="absolute bottom-2 left-2 m-2 p-3 w-56 z-9999 flex flex-col font-mono text-sm font-semibold bg-white bg-opacity-50 text-blue-800 rounded-lg">
    <div>
        ({lat}°, {lon}°)
    </div>
    <div>
        <!-- Latitude -->
        {lat < 0 ? `S` : `N`}{lat < 0 ? `0${a(tr(lat))}` : a(tr(lat))}°
        {a(tr((lat % 1) * 60))}'
        {a(tr((lat % 1) * 3600))}"
    </div>
    <div>
        <!-- Longitude -->
        {lon < 0 ? `W` : `E`}{lon < 0 ? `0${a(tr(lon))}` : a(tr(lon))}°
        {a(tr((lon % 1) * 60))}'
        {a(tr((lon % 1) * 3600))}"
    </div>
</div>
