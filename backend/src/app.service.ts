import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  private message = 'Welcome To My App!';

  getWelcomeMessage(): string {
    return this.message;
  }
}
