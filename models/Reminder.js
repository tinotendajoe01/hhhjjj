import mongoose from "mongoose";
const reminderSchema = new mongoose.Schema(
  {
    reminderMsg: String,
    remindAt: String,
    isReminded: Boolean,
  },
  {
    timestamps: true,
  }
);
const Reminder =
  mongoose.models.Reminder || mongoose.model("Reminder", reminderSchema);
export default Reminder;
