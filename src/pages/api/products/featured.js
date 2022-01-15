//return products from db ...nstall next connect

import nc from "next-connect";
import Featured from "../../../../models/Featured";
import db from "../../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect(); //connect to db
  const featured = await Featured.find({}); //retun all products
  await db.disconnect(); // discoonect
  res.send(featured);
});

export default handler;
