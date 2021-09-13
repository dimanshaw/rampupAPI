import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('student')
export class StudentEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    age: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}