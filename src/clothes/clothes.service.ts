import { Injectable } from '@nestjs/common';
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

  async createClothes(data: CreateClothesDto) {
    return data;
  }

  async deleteClothes(id: string) {
    return `Delete clothes ${id}`;
  }
}
