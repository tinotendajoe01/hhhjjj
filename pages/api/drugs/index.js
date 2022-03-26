import nc from "next-connect";
import Drug from "../../../models/Drug";

import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const drugs = await Drug.find({});
  await db.disconnect();
  res.send(drugs);
});

export default handler;
