import { Field, ObjectType } from '@nestjs/graphql';
import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: UUID;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({
    nullable: true,
  })
  type?: string;
}
