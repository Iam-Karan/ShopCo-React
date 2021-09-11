import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import ProductRouter from "./Routers/ProductRouter.js";
import UserRouter from "./Routers/UserRouter.js";
import OrderRouter from './Routers/OrderRouter.js'
import SliderRouter from "./Routers/SliderRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect( process.env.MONGODB_URL || 'mongodb://localhost/shopco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/users', UserRouter);
app.use('/api/products', ProductRouter);
app.use('/api/orders', OrderRouter);
app.use('/api/slider', SliderRouter);


app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
