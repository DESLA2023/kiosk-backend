import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';

@Injectable()
export class ImagesService {
  getImage(filename: string) {
    const stream = createReadStream(`./images/${filename}`);

    return new StreamableFile(stream);
  }
}
