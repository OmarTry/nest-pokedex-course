import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {

  poke_api_url = "https://pokeapi.co/api/v2/pokemon?limit=2";

  constructor(private readonly httpService: HttpService) {}

  async executedSeed() {
    const { data } = await this.httpService.axiosRef.get<PokeResponse>(this.poke_api_url);
    
    data.results.forEach(({name, url}) => {
      
      
      const segments = url.split("/");
      // console.log(segments);

      const no = +segments[segments.length - 2 ]  //sabemos que es el penultimo por como nos aparece en consola
      console.log({name, no})
    })
    
    
    return data.results;
  }  // el result es directamente de la pagina web a la que estamos pidiendo la info
}