//return products from db ...nstall next connect

import nc from "next-connect";
import Product from "../../../../models/Product";
import db from "../../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect(); //connect to db
  const products = await Product.find({}); //retun all products
  await db.disconnect(); // discoonect
  res.send(products);
});

export default handler;
