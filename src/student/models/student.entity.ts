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

    @Column({nullable: true})
    @Field()
    email?: string;

    @Column({nullable: true})
    @Field()
    dateOfBirth?: Date;

    @Column({nullable: true})
    @Field()
    age?: number;

    @Column({type: 'boolean', default: () => 'false'})
    @Field()
    isDeleted: boolean;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    @Field()
    createdAt: Date;
}