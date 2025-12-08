import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { Adapter } from 'src/common/adapters/http-request.adapter';

@Injectable()
export class SeedService {

  poke_api_url = "https://pokeapi.co/api/v2/pokemon?limit=200";

  constructor(
    
    private readonly http: Adapter,

    @InjectModel(Pokemon.name)
        private readonly pokemonModel :  Model<Pokemon>) {}


    

/*   async executedSeed() {

    await this.pokemonModel.deleteMany({}); //esto para que no haya pokemons repetidos y de error al insertar

    const { data } = await this.httpService.axiosRef.get<PokeResponse>(this.poke_api_url);
    
    const insertPromisesArray:Promise<any>[] = [];
    
    data.results.forEach(async({name, url}) => {
            
      const segments = url.split("/");
      // console.log(segments);
      const no = +segments[segments.length - 2 ]  //sabemos que es el penultimo por como nos aparece en consola
      // console.log({name, no})
      // const pokemon = await this.pokemonModel.create({name, no})

      insertPromisesArray.push(
        this.pokemonModel.create({name, no})
      )
    })    

    await Promise.all(insertPromisesArray)
    
    return "Seed Executed";
  } 
*/

  async executedSeed(){

    await this.pokemonModel.deleteMany(); 

    const data  = await this.http.fetch<PokeResponse>(this.poke_api_url);

    const pokemonToInsert:{name: string, no:number}[] = [];

    data.results.forEach(async({name, url}) => {
            
      const segments = url.split("/");
      const no = +segments[segments.length - 2 ]; 

      pokemonToInsert.push({name, no});
    });
    await this.pokemonModel.insertMany(pokemonToInsert);

    return `Seed Executed`;
  }
}
