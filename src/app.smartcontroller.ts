import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CommaPipe } from './app.commapipe';

@Controller('smart')
export class SmartController {
  constructor(private readonly converterService: AppService) {}
  /*
    We have used CommaPipe to validate "inr" path parameter
  */
  @Get('/convert/:inr')
  convert(@Param('inr', new CommaPipe()) inr: number): number {
    return this.converterService.convert(inr);
  }

  @Get('/convertA/:inr')
  convertWithHandlederror(@Param('inr', new CommaPipe()) inr: number): number {
    return this.converterService.convert(inr);
  }
}