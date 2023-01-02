const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const env = require('dotenv').config();

// using express
const app = express();

// set up the port number
const port = process.env.PORT || 5000;

// to use encrypted data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/success.html', function(req, res){
    res.sendFile(__dirname + "/success.html")
});


//Contact Form
app.post("/success.html", function(req, res){
    const message = req.body.user_message;
    const name = req.body.user_name;
    const email = req.body.user_email;
    
    let transporter = nodemailer.createTransport({
        service : 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASS //fake password
        }
    });

    let mailOption = {
        from : 'req.body.user_email',
        to : 'emmanuelamiteye9@gmail.com',
        name : name,
        email: email,
        subject : 'New message from  '  + name,
        text: message, 
    };
    transporter.sendMail(mailOption, function(err, info){
        if(err){
            console.log(err);
        }else {
            // res.sendFile(__dirname + "/success/index.html")
            res.redirect("/success.html");
            console.log("mail sent" + info.response);
        }
    })
})


// make the app to listen on asigned port number
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});


