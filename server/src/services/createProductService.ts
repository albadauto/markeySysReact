import { getRepository } from "typeorm";
import { Products } from "../entitie/Products";

interface productInterface{
    product: string,
    price: number,
    provider: string
}
export class createProductService{
    async execute({product, price, provider}: productInterface): Promise<productInterface | Error>{
        try{
            const repo = getRepository(Products);
            const productObj = repo.create({product, price, provider});
            await repo.save(productObj);
            return productObj;
        }catch(err){    
            return new Error(err)
        }
    }
}