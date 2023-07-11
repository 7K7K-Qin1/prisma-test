import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateTestDto {
  @IsString()
  @IsNotEmpty()
  transactionHash: string;

  @IsDateString()
  @IsNotEmpty()
  tradeTime: string;

  @IsString()
  TransferFrom?: string | null;

  @IsString()
  TransferTo?: string | null;

  @IsString()
  TransferValue?: string | null;

}
