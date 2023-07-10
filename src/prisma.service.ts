import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  constructor(private readonly prisma: PrismaClient) {}

  get prismaClient(): PrismaClient {
    return this.prisma;
  }

  async enableShutdownHooks() {
    this.prisma.$on('beforeExit', async () => {
      await this.prisma.$disconnect();
    });
  }
}
