export function calculateZoom(lon: number, lat: number): number {
    const GLOBE_WIDTH = 256;
    let angle = lat - lon;
    if (angle < 0) angle += 360;

    const zoom = Math.round(Math.log(256 * 360 / angle / GLOBE_WIDTH) / Math.LN2);

    return zoom;
}

export function getUserGeolocation(): Promise<any> {
    return new Promise((res, rej) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                res({ lat: position.coords.latitude, lon: position.coords.longitude })
            });
        }
    });
}