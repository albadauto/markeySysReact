import express from 'express';
import './database/index';
import productRouter from './routes/ProductRoute';
import cors from 'cors';
const app = express();

//CONFIG
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/", productRouter);


app.listen(5000, () => console.log("Market API Running"));