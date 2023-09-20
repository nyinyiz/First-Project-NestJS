import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SmartController } from './app.smartcontroller';
import { InterceptController } from './app.interceptcontroller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, SmartController, InterceptController],
  providers: [AppService],
})
export class AppModule {}
