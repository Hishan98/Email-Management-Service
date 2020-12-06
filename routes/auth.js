const router = require('express').Router();
const User = require('../model/User');
const {mailsendValidation} = require('../validation');

router.post('/register', async (req,res) => {

    //validate data !
    const {error} = mailsendValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = new User({
        to:req.body.to,
        content:req.body.content,
        subject:req.body.subject
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
        console.log("yawwa huththo");
    }catch(err){ 
        res.status(400).send(err);
        console.log(err);

    }
});

module.exports = router;