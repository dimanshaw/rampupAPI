import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('student')
@ObjectType()
export class StudentEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name?: string;

    @Column({nullable: true})
    @Field()
    email?: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true})
    @Field()
    dateofbirth?: Date;

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