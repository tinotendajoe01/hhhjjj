import mongoose from "mongoose";

const optionsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Options =
  mongoose.models.Options || mongoose.model("Options", optionsSchema);
export default Options;
