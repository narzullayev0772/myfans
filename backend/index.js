const bodyParser = require('body-parser');
const express = require('express');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const fs = require('fs');

app.use(express.static('public'));
app.use(express.static('files'));

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload(
    {
        createParentPath:true,
        limits:{
            fileSize:2*1024*1024*1024
        }
    }
));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})



app.post('/files', async (req,res)=>{

    try {
        if(!req.files){
            res.send({
                msg:'no file',
                status:false
            })
        }
        else{

            let file = req.files.file;

            file.mv(`${__dirname}/database/upload/`+file.name);
            res.send({
                status: true,
                message: 'File is uploaded'
            });
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
});

var arr = [];
app.post('/text',(req,res)=>{
    let izoh = req.body.izoh;
    let deadline  = req.body.deadline;
    arr.push(izoh);
    arr.push(deadline);

})


app.get('/text',(req,res)=>{
    res.send(arr)
})



const PORT = process.env.URL || 5000;

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})