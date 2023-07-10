import Web3 from 'web3';
import * as fs from 'fs';
import { CreateTestDto } from 'src/test/test.dto';
import { TestService } from 'src/test/test.service';

  const web3 = new Web3('http://localhost:7545'); // 连接到ganache节点
  const abiData:any = fs.readFileSync('./src/scan/MyToken.json');
  const data = JSON.parse(abiData); // 合约的ABI
  const abi = data.abi;
  // console.log(abi);
  const contractAddress = '0xe57B9d075d6de3edf24eE361207613004867b965'; // 合约地址
  const myContract = new web3.eth.Contract(abi, contractAddress);
  
  async function getBlockInfo(startBlock: number, endBlock: number) {
    for (let blockNumber = startBlock; blockNumber <= endBlock; blockNumber++) {
        const block = await web3.eth.getBlock(blockNumber, true);
        for (const tx of block.transactions as any) {
            const txHash = tx.hash;
            const tradeTime = new Date(Number(block.timestamp) * 1000);
            console.log(`Transaction hash: ${txHash}, trade time: ${tradeTime}`);
            const receipt = await web3.eth.getTransactionReceipt(tx?.hash);
            const transferEvents = await myContract.getPastEvents('Transfer', {
              fromBlock: blockNumber,
              toBlock: blockNumber,
            });            
            for (const event of transferEvents as any[]) {
                console.log(`Transfer from ${event.returnValues.from} to ${event.returnValues.to} with value ${event.returnValues.value}`);
            }
        }
    }
}

getBlockInfo(1, 10); 
