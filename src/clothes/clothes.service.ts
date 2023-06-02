import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClothesDto } from './dto/create.request.dto';
import { ClothesRepository } from './clothes.repository';

@Injectable()
export class ClothesService {
  constructor(private readonly clothesRepository: ClothesRepository) {}
  async getAllClothes() {
    return await this.clothesRepository.findAll();
  }

  async getClothesById(id: string) {
    return await this.clothesRepository.findById(id);
  }

  async getClothesByCategory(category: string) {
    return await this.clothesRepository.findByCategory(category);
  }

  async createClothes(data: CreateClothesDto, file: Express.Multer.File) {
    if (!file) throw new BadRequestException('파일이 없습니다.');
    const clothes = await this.clothesRepository.create(data, file.path);

    return clothes.id;
  }

  async deleteClothes(id: string) {
    return `Delete clothes ${id}`;
  }
}
