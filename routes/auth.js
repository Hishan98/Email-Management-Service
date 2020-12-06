const router = require('express').Router();
const User = require('../model/User');
const {mailsendValidation} = require('../validation');

router.post('/emails', async (req,res) => {

    //Genarate ID
    const crypto = require("crypto");
    const id = crypto.randomBytes(16).toString("hex");

    //Check Time
    var date = new Date();
    var current_hour = date.getHours();
    if((current_hour<8)||(current_hour>17)){
        var status = 'QUEUED';
        console.log('Email will be send after 8.00 AM');
    }
    else{
        var status = 'SENT';
        console.log('Email is eligible to send');
    }

    //validate data !
    const {error} = mailsendValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = new User({
        id:id,
        to:req.body.to,
        content:req.body.content,
        subject:req.body.subject,
        status: status
    });
    try{
        res.send({ id: id, status: status })

    }catch(err){ 
        res.status(400).send(err);
        res.send({ id: id, status: 'FAILED' })
        console.log(err);

    }
});

module.exports = router;