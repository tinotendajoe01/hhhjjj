import nc from "next-connect";
import Product from "../../../models/Product";
import db from "../../../utils/db";
import data from "../../../utils/data";
import User from "../../../models/User";
import Featured from "../../../models/Featured";
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await Featured.deleteMany();
  await Featured.insertMany(data.featured);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
});

export default handler;
