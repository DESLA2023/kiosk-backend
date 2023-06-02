import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ClothesController } from './clothes.controller';
import { ClothesService } from './clothes.service';
import { Clothes, ClothesSchema } from './clothes.schema';
import { ClothesRepository } from './clothes.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clothes.name, schema: ClothesSchema }]),
  ],
  controllers: [ClothesController],
  providers: [ClothesService, ClothesRepository],
})
export class ClothesModule {}
