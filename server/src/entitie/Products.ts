import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("products")
export class Products{
    @PrimaryGeneratedColumn("increment")
    id: string;

    @Column()
    product: string;

    @Column()
    price: number;

    @Column()
    provider: string;
}