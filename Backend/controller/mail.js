const nodeMailer = require("nodemailer");
require("dotenv").config();

exports.sendMail = (req, res) => {
<<<<<<< HEAD
  const {title, userEmail, content} = req.body;
=======
  const {emailUser, subject, content} = req.body;
>>>>>>> b6da1ef1ed2928993bf054be5e9256b6db7be960
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const message = {
    from: process.env.EMAIL,
<<<<<<< HEAD
    to: userEmail,
    subject: title,
    text: content,
=======
    to: emailUser,
    subject: subject,

    html: content,
>>>>>>> b6da1ef1ed2928993bf054be5e9256b6db7be960
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(400).json({message: "Something went wrong"});
    } else {
<<<<<<< HEAD
      return res.status(200).json({message: "Email sent successfully", info});
=======
      return res
        .status(200)
        .json({success: true, message: "Email sent successfully", info});
>>>>>>> b6da1ef1ed2928993bf054be5e9256b6db7be960
    }
  });
};
