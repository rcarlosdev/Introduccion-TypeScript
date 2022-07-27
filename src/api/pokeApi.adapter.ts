import axios from "axios";

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter {
    private readonly axios = axios;

    async get<T>(url: string): Promise<T> {
        const { data } = await axios.get<T>(url);
        return data;
    }

    async post() {
        // const {  } = await axios.post(url, data);
        return;
    }

    async patch() {
        // return axios.put(url, data);
        return;
    }

    async delete() {
        // return axios.delete(url);
        return;
    }
}
