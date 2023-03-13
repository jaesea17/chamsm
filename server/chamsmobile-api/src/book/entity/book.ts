import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'book' })
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string

    @Column()
    description: string;

    @Column()
    author: string;

}

