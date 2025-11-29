import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api/v2")  //esto es para la url despues del puerto, antes era localhost:3000
                                // ahora será localhost:3000/api/v2 al querer hacer una peticion


  app.useGlobalPipes(    //para usarlo necesito instalar classvalidator y classtransformer
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
