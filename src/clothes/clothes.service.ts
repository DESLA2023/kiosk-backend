import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClothesDto } from './dto/create.request.dto';

@Injectable()
export class ClothesService {
  async getAllClothes() {
    return 'All clothes';
  }

  async getClothesById(id: string) {
    return `Clothes ${id}`;
  }

  async getClothesByCategory(category: string) {
    return `Clothes ${category}`;
  }

  async createClothes(data: CreateClothesDto, file: Express.Multer.File) {
    if (!file) throw new BadRequestException('파일이 없습니다.');

    return { ...data, filePath: file.path };
  }

  async deleteClothes(id: string) {
    return `Delete clothes ${id}`;
  }
}
