import { Module } from '@nestjs/common';
import { AppController } from './basic/app.controller';
import { SmartController } from './pipeStyle/app.smartcontroller';
import { InterceptController } from './interceptorStyle/app.interceptcontroller';
import { AppService } from './basic/app.service';
import { InterceptService } from './interceptorStyle/app.intercept.service';

@Module({
  imports: [],
  controllers: [AppController, SmartController, InterceptController],
  providers: [AppService, InterceptService],
})
export class AppModule {}
