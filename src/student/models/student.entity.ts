import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('student')
@ObjectType()
export class StudentEntity{
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name?: string;

    @Column()
    @Field()
    email?: string;

    @Column()
    @Field()
    dateOfBirth?: Date;

    @Column()
    @Field()
    age?: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    @Field()
    createdAt: Date;
}