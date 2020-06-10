const express=require('express');
const fetch=require("node-fetch");
const nodemailer = require("nodemailer");
const router=express.Router();


app.post("/sendemail", (req,res)=>{
    const news={
        name:req.body.name,
        content:req.body.content
    };
    console.log(news);
    // Get all subscribers
    let endpoint="http://localhost:4000/api/v1/subscription/active";
    let response= await fetch(endpoint).json();
    if(response.status == 200){
        // All receivers emails are listed here
        let mail_array = response.data;
    
        let emailPromiseArray = [];    
        // Preparing the email for each receiver
        for (let i = 0; i < mail_array.length; i++) {
            emailPromiseArray.push(
                sendMail({
                    from: "teamspiderman5@gmail.com",
                    to: mail_array[i],
                    subject: "Superman Newsletter",
                    text: news.content
                })
            );
        }
    
        // Run the promise
        Promise.all(emailPromiseArray).then((result)=>{
            console.log("all mail sent");
        }).catch((error)=>{
            console.log(error);
        });

        res.json({
            message:"sent to all emails"
        });
    }else{
        res.json({
            message:"No emails were sent"
        });
    }
});

//Created a useable Transporter object using Gmail    
let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "teamspiderman5@gmail.com", // Email created for the task
        pass: "Node1234"
    }
});

function sendMail(mail){

    return new Promise((resolve, reject)=>{
        transporter.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
        reject(error);
    }else{
        console.log("Message sent: " + JSON.stringify(response));
        resolve(response);
    }

    transporter.close();
        });
    });
}

module.exports=router;