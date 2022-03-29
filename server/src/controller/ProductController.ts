import { Request, Response } from "express";
import { createProductService } from "../services/createProductService";


export class ProductController{
    async index(request: Request, response: Response): Promise<void>{
        try{
            const {product, provider, price} = request.body;
            const service = new createProductService();
            if (product && provider && price){
                const result = await service.execute({product, provider, price});
                if(result instanceof Error){
                  console.log(result)
                } 
                response.json(result);
            }else{
                response.json({inserted:false});
            }
        }catch(err){
            console.log(err);
        }
    }
}