import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DidController } from './did.controller';
import { DidService } from './did.service';

@Module({
  controllers: [DidController],
  providers: [DidService, PrismaService],
})
export class DidModule {}
