import express from "express";
import expressAsyncHandler from "express-async-handler";
import SliderModel from "../Models/SliderModel";

const SliderRouter = express.Router();

SliderRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await SliderModel.find({});
    res.send(products);
  })
);

export default SliderRouter;