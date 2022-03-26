import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    prescriptionDetails: {
      drugName: { type: String, required: true },
      drugDose: { type: String, required: true },
      drugDuration: { type: String, required: true },
      dailyFreq: { type: String, required: true },
      startDate: { type: String, required: true },
      reminders: [reminderSchema],
    },
    patientDetails: {
      fullName: { type: String, required: true },
      age: { type: Number, required: true },
      cell: { type: Number, required: true },
      gender: { type: String, required: true },
    },
  },

  {
    timestamps: true,
  }
);

const Prescription =
  mongoose.models.Prescription ||
  mongoose.model("Prescription", prescriptionSchema);
export default Prescription;
