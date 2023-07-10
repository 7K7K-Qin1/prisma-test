import { Module } from '@nestjs/common';
import { DidController } from './did/did.controller';
import { DidService } from './did/did.service';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';
import { TestService } from './test/test.service';
import { testController } from './test/test.controller';

@Module({
  controllers: [DidController, testController],
  providers: [DidService, PrismaService, PrismaClient, TestService ],
})
export class AppModule {}
