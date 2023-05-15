import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  private hello = 'Hello World!';

  getHello(): string {
    return this.hello;
  }
}
