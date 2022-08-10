import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{

    @ApiProperty({example: '1', description: 'Id',})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'Alisson', description: 'Primeiro nome',})
    @Column()
    firstName: string;

    @ApiProperty({example: 'Evangelista', description: 'Ultimo nome',})
    @Column()
    lastName: string;

    @ApiProperty({example: 'Alisson@gmail.com', description: 'Email',})
    @Column()
    email?: string;
}