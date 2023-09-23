import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { AppService } from '../basic/app.service';
import { CommaPipe } from '../pipe/app.commapipe';
import { CommaInterceptor } from './app.commainterceptor';
import { ResponseInterceptor } from './app.commainterceptor';
import { InterceptService } from './app.intercept.service';

@Controller('intercept')
export class InterceptController {
  constructor(private readonly converterService: InterceptService) {}

  @Get('/multiBy40/:inr')
  /* Interceptor */
  @UseInterceptors(CommaInterceptor) 
  /* Pipe for Param */
  convert(@Param('inr', new CommaPipe()) inr: number): number {
    return this.converterService.multiBy40(inr);
  }
  
  @Get('/hello/:name')
  getHelloName(@Param('name') name: string): string {
    return this.converterService.getHelloName(name);
  }

//call service method getUserObject and return user object
  @Get('/user')
  @UseInterceptors(ResponseInterceptor)
  getUserObject(): any {
    return this.converterService.getUserObject();
  }
  @Get('/allUsers')
  @UseInterceptors(ResponseInterceptor)
  getUsers(): any[] {
    return this.converterService.getUsers();
  }
}