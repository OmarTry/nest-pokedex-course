import { HttpService } from '@nestjs/axios';
import { HttpAdapter } from "../interfaces/http-adapter.interface";
import { Injectable } from '@nestjs/common';


@Injectable()
export class Adapter implements HttpAdapter{
    
    async fetch<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`Error HTTP: ${resp.status}`);
        const data = (await resp.json()) as T;
        return data;
}
    }
    
