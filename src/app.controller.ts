import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CommaPipe } from './app.commapipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/convert/:inr')
  convert(@Param('inr') inr : number): number {
    return this.appService.convert(inr)
  }

  @Get('/convertA/:inr')
  convertWithHandlederror(@Param('inr', new CommaPipe()) inr: number): number {
    return this.appService.convert(inr);
  }
}
