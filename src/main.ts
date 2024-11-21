import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://TU_USUARIO:TU_CONTRASEÑA@TU_HOST:5672'],
      queue: 'items_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
