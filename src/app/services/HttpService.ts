import type { HttpMethod } from "./HttpMethod";

/**
 * Primitive HttpService used to consume REST apis
 */
export class HttpService {
    constructor(private base: string) { }

    /**
     * Generic http request method
     * @param method 
     * @param path 
     * @param data 
     * @param token 
     * @returns 
     */
    async send<T>(method: HttpMethod, path: string, data: T, token: string): Promise<T> {
        const init: RequestInit = { method, mode: "cors", headers: {} };

        init.headers['Content-Type'] = 'application/json';
        if (data) {
            init.body = JSON.stringify(data);
        }

        if (token) {
            init.headers['Authorization'] = `Token ${token}`;
        }

        return fetch(`${this.base}/${path}`, init)
            .then((response) => response.json());
    }
}
