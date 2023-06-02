import { OmitType } from '@nestjs/swagger';
import { Clothes } from '../clothes.schema';

export class CreateClothesDto extends OmitType(Clothes, ['img'] as const) {}
