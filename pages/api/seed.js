import nc from "next-connect";
import Product from "../../models/Product";
import db from "../../utils/db";
import data from "../../utils/data";
import User from "../../models/User";
import Cats from "../../models/Cats";
import Options from "../../models/Options";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await Cats.deleteMany();
  await Cats.insertMany(data.cats);
  await Options.deleteMany();
  await Options.insertMany(data.options);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
});

export default handler;
