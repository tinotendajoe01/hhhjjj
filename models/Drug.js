import mongoose from "mongoose";

const drugSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    genericName: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    standardDose: { type: String, required: true },
    adultDose: { type: String, required: true },
    kidsDose: { type: String, required: true },
    minDuration: { type: Number, required: true, default: 1 },
    maxDuration: { type: Number, required: true, default: 1 },
    adverseEffects: { type: String, required: true },
    description: { type: String, required: true },
    featuredImage: { type: String },
    isFeatured: { type: Boolean, required: true, default: false },
    isAvailable: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const Drug = mongoose.models.Drug || mongoose.model("Drug", drugSchema);
export default Drug;
