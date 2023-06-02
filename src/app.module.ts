import {
  MiddlewareConsumer,
  Module,
  NestModule,
  ValidationPipe,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ClothesModule } from './clothes/clothes.module';
import { APP_PIPE } from '@nestjs/core';
import { MulterModule } from '@nestjs/platform-express';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ClothesModule,
    MulterModule.register({
      dest: './images',
    }),
    ImagesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    { provide: APP_PIPE, useClass: ValidationPipe },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
