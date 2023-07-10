import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateDidDto } from './did.dto';

@Injectable()
export class DidService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDidDto: CreateDidDto) {
    return this.prisma.prismaClient.did.create({ data: createDidDto });
  }

  async findAll() {
    return this.prisma.prismaClient.did.findMany();
  }

  async getDomainsByOwner(owner: string) {
    const domains = await this.prisma.prismaClient.did.findMany({
      where: {
        owner: owner,
      },
      select: {
        domain: true,
      },
    });
  
    if (domains.length === 0) {
      return "该用户目前并未持有任何域名，请检查输入是否正确";
    }
  
    return domains;
  }  
}
