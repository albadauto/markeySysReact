import { Router } from 'express';
import { ProductController } from '../controller/ProductController';
const productRouter = Router();

const controller = new ProductController();
productRouter.post("/createProduct", controller.index);



export default productRouter;