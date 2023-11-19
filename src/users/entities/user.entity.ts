import { ObjectType, Field } from '@nestjs/graphql';
import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: UUID;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;
}
