import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsString } from 'class-validator';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Clothes extends Document {
  public id: mongoose.Types.ObjectId;

  @ApiProperty({
    example: '나이키 티셔츠',
    description: '상품명',
    required: true,
  })
  @IsString()
  @Prop()
  public name: string;

  @ApiProperty({
    example: 10000,
    description: '가격',
    required: true,
  })
  @IsNumberString()
  @Prop()
  public price: number;

  @ApiProperty({
    example: '나이키',
    description: '브랜드',
    required: true,
  })
  @IsString()
  @Prop()
  public brand: string;

  @ApiProperty({
    example: '티셔츠',
    description: '카테고리',
    required: true,
  })
  @IsString()
  @Prop()
  public category: string;

  @ApiProperty({
    example: '검정색',
    description: '색상',
    required: true,
  })
  @IsString()
  @Prop()
  public color: string;

  @ApiProperty({
    example: 'XL',
    description: '사이즈',
    required: true,
  })
  @IsString()
  @Prop()
  public size: string;

  @ApiProperty({
    example: 100,
    description: '재고',
    required: true,
  })
  @IsNumberString()
  @Prop()
  public stock: number;

  @ApiProperty({
    example:
      'https://shop-phinf.pstatic.net/20201229_6/1609228156516Q2X2a_JPEG/2478581-01.jpg?type=m510',
    description: '이미지',
    required: true,
  })
  @IsString()
  @Prop()
  public imgUrl: string;
}

export const ClothesSchema = SchemaFactory.createForClass(Clothes);
