import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClothesService } from './clothes.service';
import { CreateClothesDto } from './dto/create.request.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/utils/multer.option';
import { HttpExceptionFilter } from 'src/common/execeptions/http-exception.filter';

@UseFilters(HttpExceptionFilter)
@Controller('clothes')
export class ClothesController {
  constructor(private readonly clothesService: ClothesService) {}

  @ApiResponse({ status: 500, description: '서버 에러' })
  @ApiResponse({ status: 200, description: '전체 조회 성공' })
  @ApiOperation({ summary: '전체 조회' })
  @ApiTags('옷')
  @Get()
  async getAllClothes() {
    return this.clothesService.getAllClothes();
  }

  @ApiResponse({ status: 500, description: '서버 에러' })
  @ApiResponse({ status: 200, description: '단건 조회 성공' })
  @ApiOperation({ summary: '단건 조회' })
  @ApiTags('옷')
  @Get('/:id')
  async getClothes(@Param('id') id: string) {
    return this.clothesService.getClothesById(id);
  }

  @ApiResponse({ status: 500, description: '서버 에러' })
  @ApiResponse({ status: 200, description: '카테고리별 조회 성공' })
  @ApiOperation({ summary: '카테고리별 조회' })
  @ApiTags('옷')
  @Get('/category/:category')
  async getClothesByCategory(@Param('category') category: string) {
    return this.clothesService.getClothesByCategory(category);
  }

  @ApiResponse({ status: 500, description: '서버 에러' })
  @ApiResponse({ status: 200, description: '옷 등록 성공' })
  @ApiOperation({ summary: '옷 등록' })
  @ApiTags('옷')
  @Post()
  @UseInterceptors(FileInterceptor('image', multerOptions))
  async createClothes(
    @Body() data: CreateClothesDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.clothesService.createClothes(data, file);
  }

  @ApiResponse({ status: 500, description: '서버 에러' })
  @ApiResponse({ status: 200, description: '옷 삭제 성공' })
  @ApiOperation({ summary: '옷 삭제' })
  @ApiTags('옷')
  @Delete('/:id')
  async deleteClothes(@Param('id') id: string) {
    return `Delete clothes ${id}`;
  }
}
