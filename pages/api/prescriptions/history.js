import nc from "next-connect";
import Prescription from "../../../models/Prescription";
import { isAuth } from "../../../utils/auth";
import db from "../../../utils/db";
import { onError } from "../../../utils/error";

const handler = nc({
  onError,
});
handler.use(isAuth);

handler.get(async (req, res) => {
  await db.connect();
  const prescriptions = await Prescription.find({ user: req.user._id });
  res.send(prescriptions);
});

export default handler;
