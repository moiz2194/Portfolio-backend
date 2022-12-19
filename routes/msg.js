const express=require('express');
const router = express.Router();
const asyncerror=require('./asyncerrror.js')
const nodemailer=require("nodemailer")
router.post('/sendmsg',asyncerror(async(req,res,next)=>{

        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user:'m06011558@gmail.com',
            pass:'brxbsfzdfwvxnsod',
          },
        });
      
        var mailOptions = {
          from: "m06011558@gmail.com", // sender address
          to: req.body.email, // list of receivers
          subject: req.body.subject,
          text: req.body.message,
        };
      
        // trigger the sending of the E-mail
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            return console.log(error);
          }
          console.log("Message sent: " + info.response);
        });
res.status(200).send({success:true})
}))
module.exports=router