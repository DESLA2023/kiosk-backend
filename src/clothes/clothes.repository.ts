import { InjectModel } from '@nestjs/mongoose';
import { Clothes } from './clothes.schema';
import { Model } from 'mongoose';
import { CreateClothesDto } from './dto/create.request.dto';
import { HttpException, Logger } from '@nestjs/common';

export class ClothesRepository {
  constructor(
    @InjectModel(Clothes.name)
    private readonly clothesModel: Model<Clothes>,
  ) {}

  async findAll() {
    return await this.clothesModel.find().exec();
  }

  async findById(id: string) {
    return await this.clothesModel.findById({ _id: id }).exec();
  }

  async findByCategory(category: string) {
    return await this.clothesModel.find({ category }).exec();
  }

  async create(data: CreateClothesDto, filePath: string): Promise<Clothes> {
    try {
      const newClothes = await this.clothesModel.create({
        ...data,
        imgUrl: filePath,
      });

      return newClothes;
    } catch (error) {
      Logger.error(error);
      throw new HttpException(error, 500);
    }
  }

  async delete(id: string) {
    try {
      await this.clothesModel.findByIdAndDelete(id).exec();
      return 'delete success';
    } catch (error) {
      Logger.error(error);
      throw new HttpException(error, 500);
    }
  }
}
