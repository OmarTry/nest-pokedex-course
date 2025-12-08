import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";


export class PaginationDTO {
    
    @IsPositive()
    @Min(1)
    @IsOptional()
    @IsNumber()
    limit?: number;

    @IsPositive()
    @IsOptional()
    @IsNumber()
    offset?: number;
}