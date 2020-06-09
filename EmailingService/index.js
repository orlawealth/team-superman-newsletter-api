
let mail_array = ["stchawenzy1405@gmail.com", "rachelleashiru@gmail.com"]; // All receivers emails are listed here
let no_array = ["Hello", "World"]; // Each message in the array is assigned to the index of the mail_array above

// Import nodemailer
const nodemailer = require("nodemailer");

//Created a useable Transporter object using Gmail
let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "teamspiderman5@gmail.com", // Email created for the task
        pass: "Node1234"
    }
});



let emailPromiseArray = [];


// Preparing the email for each receiver

for (let i = 0; i < mail_array.length; i++) {
    emailPromiseArray.push(
        sendMail({
            from: "teamspiderman5@gmail.com",
            to: mail_array[i],
            subject: "Superman Newsletter",
            text: no_array[i]
        })
    )
}


// Run the promise

Promise.all(emailPromiseArray).then((result)=>{
    console.log("all mail sent");
}).catch((error)=>{
    console.log(error);
})

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
    })
}