const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');


const app = express();

app.use(express.static(__dirname + '/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

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

app.post('/response',(req,res)=>{
    var key = req.body.key;
	var salt = req.body.salt;
	var txnid = req.body.txnid;
	var amount = req.body.amount;
	var productinfo = req.body.productinfo;
	var firstname = req.body.firstname;
	var email = req.body.email;
	var udf5 = req.body.udf5;
	var resphash = req.body.hash;

    res.render(__dirname + '/success.html', {key: key,txnid: txnid,amount: amount, productinfo: productinfo, 
        firstname: firstname, email: email,resphash: resphash});
})

app.post('/getRresponse', (req,res) =>{
     res.send(req.body);
})

app.listen(port, function(){
    console.log('App running on port 3200')
})