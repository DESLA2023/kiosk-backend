import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; status: number; data: null } {
    return { message: 'Hello World!', status: 200, data: null };
  }
}
