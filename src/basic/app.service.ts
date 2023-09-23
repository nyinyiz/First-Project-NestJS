import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  convert(inr: number): number {
    return inr * 80;
  }

  getHelloName(name: string): string {
    return `Hello ${name}. Nice to see you!`;
  }
}
