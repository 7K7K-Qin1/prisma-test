import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { testController } from './test.controller';
import { TestService } from './test.service';

@Module({
  controllers: [testController],
  providers: [TestService, PrismaService],
})
export class testModule {}
