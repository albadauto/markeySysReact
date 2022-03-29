import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ProductMigration1648495808783 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"products",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"product",
                        type:"varchar"
                    },
                    {
                        name:"provider",
                        type:"varchar"
                    },
                    {
                        name:"price",
                        type: "float"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("products");
    }

}
