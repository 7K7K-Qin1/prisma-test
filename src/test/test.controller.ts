import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './test.dto';
import { test } from '@prisma/client';

@Controller('test')
export class testController {
  constructor(private readonly testService: TestService) {}

  @Post()
  async create(@Body() createTestDto: CreateTestDto): Promise<test> {
    return this.testService.create(createTestDto);
  }

  @Get()
  async findAll(): Promise<test[]> {
    return this.testService.findAll();
  }

  // @Get('owner/:owner')
  // getDomainsByOwner(@Param('owner') owner: string) {
  //   return this.testService.getDomainsByOwner(owner);
  // }
}
