import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CommaPipe } from './app.commapipe';
import { CommaInterceptor } from './app.commainterceptor';

@Controller('intercept')
export class InterceptController {
  constructor(private readonly converterService: AppService) {}

  @Get('/convert/:inr')
  /* Interceptor */
  @UseInterceptors(CommaInterceptor) 
  /* Pipe for Param */
  convert(@Param('inr', new CommaPipe()) inr: number): number {
    return this.converterService.convert(inr);
  }
}