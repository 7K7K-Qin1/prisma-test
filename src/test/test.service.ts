// test.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTestDto } from './test.dto';

@Injectable()
export class TestService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createTestDto: CreateTestDto) {
    return this.prisma.prismaClient.test.create({ data: createTestDto });
  }


  async findAll() {
    return this.prisma.prismaClient.test.findMany();
  }
}
