import Web3 from 'web3';
import * as fs from 'fs';
import { CreateTestDto } from '../test/test.dto';
import { TestService } from '../test/test.service';
import { PrismaClient } from '@prisma/client'
import { PrismaService } from '../prisma.service';

  const web3 = new Web3(process.env.WEB3_PROVIDER_URL);
  const abiData:any = fs.readFileSync('./src/scan/MyToken.json');
  const data = JSON.parse(abiData); // 合约的ABI
  const abi = data.abi;
  const contractAddress = process.env.MY_TOKEN_ADDRESS;
  const myContract = new web3.eth.Contract(abi, contractAddress);
  
  async function getBlockInfo(startBlock: number, endBlock: number, testService: TestService) {
    for (let blockNumber = startBlock; blockNumber <= endBlock; blockNumber++) {
      const block = await web3.eth.getBlock(blockNumber, true);
      for (const tx of block.transactions as any) {
        const txHash = tx.hash;
        const tradeTime = new Date(Number(block.timestamp) * 1000);
        const receipt = await web3.eth.getTransactionReceipt(tx?.hash);
        const transferEvents = await myContract.getPastEvents('Transfer', {
          fromBlock: blockNumber,
          toBlock: blockNumber,
        });
        for (const event of transferEvents as any[]) {
          const createTestDto: CreateTestDto = {
            transactionHash: txHash,
            tradeTime: tradeTime.toISOString(),
            TransferFrom: event.returnValues.from,
            TransferTo: event.returnValues.to,
            TransferValue: event.returnValues.value.toString(),
          };
          // console.log(`block${a}:`,createTestDto);
          await testService.create(createTestDto);
        }
      }
    }
  }




  const prisma = new PrismaClient(); // 创建 PrismaClient 实例
  const prismaService = new PrismaService(prisma); // 创建 PrismaService 实例
  const testService = new TestService(prismaService); // 将 PrismaService 实例传递给 TestService 构造函数
  getBlockInfo(1, 11, testService);
  
  