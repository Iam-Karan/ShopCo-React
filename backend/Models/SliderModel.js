import mongoose from "mongoose";

const SliderSchema = mongoose.Schema({image: { type: String, required: true },}, {
  timestamps: true,
});
const SliderModel = mongoose.model("Slider",SliderSchema)
export default SliderModel;