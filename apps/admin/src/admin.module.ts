import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [
    DbModule // 导入数据库模块
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule { }
