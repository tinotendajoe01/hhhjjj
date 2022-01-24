import mongoose from "mongoose";

const catsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Cats = mongoose.models.Cats || mongoose.model("Cats", catsSchema);
export default Cats;
