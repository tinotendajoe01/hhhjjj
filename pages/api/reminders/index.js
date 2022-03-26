import nc from "next-connect";

import Reminder from "../../../models/Reminder";
import db from "../../../utils/db";

const handler = nc();
// whatsapp
setInterval(() => {
  Reminder.find({}, (err, reminderList) => {
    if (err) {
      console.log(err);
    }
    if (reminderList) {
      reminderList.forEach((reminder) => {
        if (!reminder.isReminded) {
          const now = new Date();
          if (new Date(reminder.remindAt) - now < 0) {
            Reminder.findByIdAndUpdate(
              reminder._id,
              { isReminded: true },
              (err, remindObj) => {
                if (err) {
                  console.log(err);
                }
                const accountSid = process.env.ACCOUNT_SID;
                const authToken = process.env.AUTH_TOKEN;
                const client = require("twilio")(accountSid, authToken);

                client.messages
                  .create({
                    body: reminder.reminderMsg,
                    from: "whatsapp:+14155238886",
                    to: "whatsapp:+263775600726",
                  })
                  .then((message) => console.log(message.sid))
                  .done();
              }
            );
          }
        }
      });
    }
  });
}, 1000);

handler.get(async (req, res) => {
  await db.connect();
  const reminder = await Reminder.find({});
  await db.disconnect();
  res.send(reminder);
});

handler.post(async (req, res) => {
  await db.connect();
  const { reminderMsg, remindAt } = req.body;
  const reminder = new Reminder({
    reminderMsg,
    remindAt,
    isReminded: false,
  });
  reminder.save((err) => {
    if (err) {
      console.log(err);
    }
    Reminder.find({});
  });

  await db.disconnect();
  res.send({ message: "Reminder Created", reminder });
});
handler.delete(async (req, res) => {
  await db.connect();
  const reminder = await Reminder.findById(req.query.id);
  if (reminder) {
    await reminder.remove();
    await db.disconnect();
    res.send({ message: "reminder Deleted" });
  } else {
    await db.disconnect();
    res.status(404).send({ message: "reminder Not Found" });
  }
});
export default handler;
