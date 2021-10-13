const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const File = require('../models/file');
const { v4: uuid4 } = require('uuid');

// basic configration of multer
let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;

        cb(null, uniqueName);
    }
})

let upload = multer({
    storage,
    // adding file size which ll be uploded (100mb)
    limit: {fileSize: 1000000 * 100},

}).single('myfile');



router.post('/', (req, res) => {
      
    // stroe data in upload folder
    upload(req, res, async(err) => {
        //Validate request   
        if(!req.file){
            return res.json({ err: 'All fields are required.'});
        }

        if(err){
            return res.status(500).send({ err: err.message })
        }
     
        // store data into database
            const file = new File({
                filename: req.file.filename,
                uuid: uuid4(),
                path: req.file.path,
                size: req.file.size
            });


            const response = await file.save();

            return res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}`});
            // http://localhost:3000/files/4rj4j4-frjgfrui4vfdv http://localhost:3000/api/files
            
            });

});


router.post('/send', async (req, res) => {
        const { uuid, emailTo, emailFrom } = req.body;
        
        // validate request
        if(!uuid || !emailTo || !emailFrom){
            return res.status(422).send({ error: 'All fields are required.'});
        }

        // gate data from database
        const file = await File.findOne({ uuid: uuid });
        if(file.sender){
            return res.status(422).send({ error: 'Email already sent.'});
        }

        file.sender = emailFrom;
        file.receiver = emailTo;
        const respons = await file.save();

        // send email
        const sendMail = require('../services/emailService');
        sendMail({
            from: emailFrom,
            to: emailTo,
            subject: 'OXzip file sharing',
            text: `${emailFrom} shared a file with you.`,
            html: require('../services/emailTemplate')({
                emailFrom: emailFrom,
                downloadLink: `${process.env.APP_BASE_URL}/files/${file.uuid}`,
                size: parseInt(file.size/1000) + ' KB',
                expires: '24 hrs.'
            })
        });

        return res.send({ success: true });
});

module.exports = router;