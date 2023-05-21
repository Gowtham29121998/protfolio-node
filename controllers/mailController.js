import nodemailer from "nodemailer";

export async function senMail(req, res, next) {
  try {
    const data = req.body;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gowthambarani291298@gmail.com",
        pass: "gconiankygfvuxkw",
      },
    });

    var mailOptions = {
      from: data.email,
      to: "gowthambarani005@gmail.com",
      subject: "protfolio contact",
      html: `<div><p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Phone: ${data.phone}</p><p >Hi Gowtham</p><p>${data.message} <p><p>Thanks !</p></div>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(201).json({ message: "Try Again Later" });
      } else {
        res.status(200).json({ message: "Mail Send" });
      }
    });
  } catch (error) {
    next(error);
  }
}
