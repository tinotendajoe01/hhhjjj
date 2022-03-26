import nc from "next-connect";
import Prescription from "../../../../models/Prescription";
import db from "../../../../utils/db";
import { isAuth } from "../../../../utils/auth";

const handler = nc();
handler.use(isAuth);
handler.get(async (req, res) => {
  await db.connect();
  const prescription = await Prescription.findById(req.query.id);
  await db.disconnect();
  res.send(prescription);
});

export default handler;
