import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, IsString } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsAlpha()
  @IsString()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
