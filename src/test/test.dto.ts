import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateTestDto {
  @IsString()
  @IsNotEmpty()
  transactionHash: string;

  @IsString()
  @IsNotEmpty()
  tradeTime: string;

  @IsString()
  TransferFrom: string;

  @IsDateString()
  TransferTo: string;

  @IsString()
  TransferValue: string;

}
