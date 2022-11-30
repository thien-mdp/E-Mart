const nodeMailer = require("nodemailer");
require("dotenv").config();

exports.sendMail = (req, res) => {
  const {title, userEmail, content} = req.body;
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const message = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: title,
    text: content,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(400).json({message: "Something went wrong"});
    } else {
      return res.status(200).json({message: "Email sent successfully", info});
    }
  });
};
