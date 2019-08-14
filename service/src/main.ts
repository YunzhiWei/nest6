import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup( 'docs', app, SwaggerModule.createDocument(
    app, 
    new DocumentBuilder()
      .setTitle('Nest 6 Testing')
      .setDescription('Trial for Nest v6')
      .setVersion('0.0.1')
      .addTag('Nestjs')
      .build()
  ));

  await app.listen(3000);
}
bootstrap();
