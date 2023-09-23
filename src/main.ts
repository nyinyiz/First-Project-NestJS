import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  const localhost = process.env.HOST || 'localhost';
  await app.listen(port, localhost);
}
bootstrap();
