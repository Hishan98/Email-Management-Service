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
        await user.save();
        res.json({ id: id, status: status })

    }catch(err){ 
        res.status(400).send(err);
        res.json({ id: id, status: 'FAILED' })
        console.log(err);

    }
});


//Find a current status of an email
router.get('/emails/', async (req, res) => {
    var query = {id: req.body.id};
    try{

        const data = await User.find(query).select({ "content": 1,"status": 1, "_id": 0}); 
        res.json(data);

    }catch(err){
        res.status(400).send(err);
        console.log(err);
    }
});


//Delete queued email
router.delete('/emails/', async (req, res) => {
    var query = {id: req.body.id};
    
    try{
        await User.findOneAndRemove(query); 
        res.send({
            "id":req.body.id,
            "deleted":"Email Successfully Deleted"
        })

    }catch(err){
        res.status(400).send(err);
        console.log(err);
    }
});

module.exports = router;