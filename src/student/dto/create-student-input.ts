import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class createStudentInput {
    @Field({nullable: true})
    id: number;
    @Field({nullable: true})
    name: string;
    @Field({nullable: true})
    email: string;
    @Field({nullable: true})
    dateOfBirth: Date;
    @Field({nullable: true})
    age: number;
    @Field({nullable: true})
    createdAt: Date;
    @Field({nullable: true})
    isDeleted: boolean;
}