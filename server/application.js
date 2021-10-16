const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');


const app = express();
const port = 3200;

let key='';
let salt = '';
let txnid = '';
let amount = '';
let status = '';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/',(req,res) =>{
    res.send('Welcome');
});

app.post('/hash', (req,res)=>{
    key = req.body.key;
    salt = req.body.salt;
    txnid = req.body.txnid;
    amount = req.body.amount;

    let prodinfo = req.body.prodinfo;
});

app.post('/getRresponse', (req,res) =>{
     res.send(req.body);
})

app.listen(port, function(){
    console.log('App running on port 3200')
})