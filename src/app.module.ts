import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { Mongoose } from 'mongoose';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [

    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema
    }),  
    //siempre de primero, porque si no, el root queda undefined

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,"..","public"),
    }),
    

    MongooseModule.forRoot(process.env.MONGO_DB!, {
      dbName: "pokemonsDB"
    }),

    
    PokemonModule,
    
    CommonModule,
    
    SeedModule 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor(){
    const port = process.env.PORT;
    console.log(`App is running in port ${port}`)
  }
}
