import nc from "next-connect";
import Cats from "../../../models/Cats";
import Product from "../../../models/Product";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const cats = await Cats.find({});
  await db.disconnect();
  res.send(cats);
});

export default handler;
