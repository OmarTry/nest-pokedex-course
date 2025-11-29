import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}

//Esto ya esta configurado por el createpokemondto y la propiedad de PartialType
// PartialType dice que todas las propiedades no son obligatorias, asi que puede que para actualizar un poke
// solo te envien una de las propiedades con el cual identificas cual es