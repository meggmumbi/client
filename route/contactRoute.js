const router = require('express').Router();
const { request } = require('express');
const nodemailer = require("nodemailer");

router.post('/contact',(req,res)=>{
    let data = req.body;
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "Please fill all the fields"})
    }
        //create a transporter object
        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port:465,
            auth:{
                user: 'margaretmumbigichuhi@gmail.com',
                pass: 'Megg96Megg',
            },
        });
        //define the mailing options

        let mailOptions = {
            from:data.email,
            to:'margaretmumbigichuhi@gmail.com',
            subject: `message from ${data.name}`,
            html: `
            <h3>Informations</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>            
            `,
        };
        //send message

        smtpTransporter.sendMail(mailOptions,(error)=>{
            try {
                if(error) return res.status(400).json({msg: 'please fill all the fields'});
                res.status(200).json({msg: 'Thank you for contacting Margaret'});
                
            } catch (error) {
                if(error)return res.status(500).json({msg: "There is server error"});
            }

        });    
});
module.exports=router;