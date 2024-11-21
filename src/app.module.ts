import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item/entities/item.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'TU_HOST',
      port: 5432,
      username: 'TU_USUARIO',
      password: 'TU_CONTRASEÑA',
      database: 'TU_BASE_DE_DATOS',
      entities: [Item],
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
