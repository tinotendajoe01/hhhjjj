import nc from "next-connect";
import Prescription from "../../../models/Prescription";
import { isAuth } from "../../../utils/auth";
import db from "../../../utils/db";
import { onError } from "../../../utils/error";

const handler = nc({
  onError,
});
handler.use(isAuth);

handler.post(async (req, res) => {
  await db.connect();
  const newPrescription = new Prescription({
    ...req.body,
    user: req.user._id,
  });
  const prescription = await newPrescription.save();
  res.status(201).send(prescription);
});

export default handler;
