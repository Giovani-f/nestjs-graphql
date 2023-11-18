import { Field, ObjectType } from '@nestjs/graphql';
import { UUID } from 'crypto';

@ObjectType()
export class Pet {
  @Field()
  id: UUID;

  @Field()
  name: string;

  @Field({
    nullable: true,
  })
  type?: string;
}
