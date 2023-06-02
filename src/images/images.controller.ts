import { Controller, Get, Param } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}
  @Get('/:filename')
  async getImage(@Param('filename') filename: string) {
    return this.imagesService.getImage(filename);
  }
}
