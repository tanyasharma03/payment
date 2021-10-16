import React,{useState, useEffect} from "react"
import { Container, Col, Row, Form, FormLabel, FormControl, Button} from 'react-bootstrap'
// import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'

// import Home1 from "./components/Home";
// import Navbar from "./components/Navbar"

// function App(){
//   return (
//     <BrowserRouter>
//          <Navbar/>
//         <Switch>
//           <Route path="/" exact><Payment /></Route>
//           <Route path="/response "><Response /></Route>

//         </Switch>
//     </BrowserRouter>   
//   );
// }

export default function Payment(){
  const [baseURL] = useState('https://sandboxsecure.payu.in/_payment');
  const [title] = useState('React Js Redirect Checkout');
  const [key,setKey] = useState('F2VkxKMp');
  const [salt] = useState('riAmnpfqiU');
  const [txnid, setTxnId] = useState('ORD916')
  const [amount, setAmount] = useState('');
  const [firstname,setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('9711805104');
  const [udf5] = useState('BOLT_KIT_NODE_JS');
  const [productinfo, setProductInfo] = useState('');
  const [surl] = useState('http://localhost:3200/response');
  const [furl] = useState('http://localhost:3200/response');
  const [serviceProvider] = useState('payu_paisa');
  const [hash,setHash] = useState('4b0aa4747a000ccda22ced61734d8171a29202cc3f71d6215cf23cfd41221e2c3ac4cdb44da82583bd6674b4d5c1a9cb826a7667912eebb2de28ff08d956da05');


  const calcHash = (e) =>{
    let name= e.target.name;
    let value = e.target.value;

    if(name === 'key'){
      setKey(value);
    }
    if(name === 'txnid'){
      setTxnId(value);
    }
    if(name === 'amount'){
      setAmount(value);
    }
    if(name === 'firstname'){
      setFirstName(value);
    }
    if(name === 'email'){
      setEmail(value);
    }
    if(name === 'phone'){
      setPhone(value);
    }
    if(name === 'productinfo'){
      setProductInfo(value);
    }
  }

  useEffect(() =>{
    Axios.post('https://localhost:3200/hash', 
    {key,txnid,amount,productinfo,firstname,email,udf5,salt}).then(res =>{
      setHash(res.data.hash);
    });
  }, [key,txnid,amount,productinfo,firstname,email,salt,udf5]);


  return(
    <Container>
      <Form action={baseURL} method='post'>
        <Row>
          <Col sm><h4>{title}</h4></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>Key</FormLabel></Col>
          <Col sm><FormControl type="text" name="key" value={key} onChange={calcHash}></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>Txn Id</FormLabel></Col>
          <Col sm><FormControl type="" name="txnid" value={txnid} onChange={calcHash}></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>Amount</FormLabel></Col>
          <Col sm><FormControl type="text" name="amount" value={amount} onChange={calcHash}></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>First Name</FormLabel></Col>
          <Col sm><FormControl type="text" name="firstname" value={firstname} onChange={calcHash}></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>Email</FormLabel></Col>
          <Col sm><FormControl type="text" name="email" value={email} onChange={calcHash}></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>Phone</FormLabel></Col>
          <Col sm><FormControl type="text" name="phone" value={phone} onChange={calcHash}></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>Product Info</FormLabel></Col>
          <Col sm><FormControl type="text" name="productinfo" value={productinfo} onChange={calcHash}></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>SURL</FormLabel></Col>
          <Col sm><FormControl type="text" name="surl" value={surl} readOnly></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>FURL</FormLabel></Col>
          <Col sm><FormControl type="text" name="furl" value={furl} readOnly></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>Service Provider</FormLabel></Col>
          <Col sm><FormControl type="text" name="service_provider" value={serviceProvider} readOnly></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>UDF</FormLabel></Col>
          <Col sm><FormControl type="text" name="udf5" value='BOLT_KIT_NODE_JS' readOnly></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><FormLabel>Hash</FormLabel></Col>
          <Col sm><FormControl type="" name="hash" value='4b0aa4747a000ccda22ced61734d8171a29202cc3f71d6215cf23cfd41221e2c3ac4cdb44da82583bd6674b4d5c1a9cb826a7667912eebb2de28ff08d956da05' readOnly></FormControl></Col>
        </Row>
        <Row className="pt-sm-2">
          <Col sm><Button type="submit">Pay</Button></Col>
        </Row>
      </Form>
    </Container>
  )
}


// export function Response(){
//   const [txnid, setTxnId] = useState('');
//   const [amount, setAmount] = useState('');
//   const [status, setStatus] = useState('');

//   useEffect(() =>{
//     Axios.get('https://localhost:3200/getResponse').then(res =>{
//       setTxnId(res.data.txnid);
//       setAmount(res.data.amount);
//       setStatus(res.data.status);
//     });
//   },[txnid, amount,status]
//   );

//   return(
//     <Container>
//       <Row>
//         <Col>TxnId</Col>
//         <Col>{txnid}</Col>
//       </Row>
//       <Row>
//         <Col>Amount</Col>
//         <Col>{amount}</Col>
//       </Row>
//       <Row>
//         <Col>Status</Col>
//         <Col>{status}</Col>
//       </Row>
//     </Container>
//   )
// }


// import React,{useState, useEffect} from "react"
// import { Container, Col, Row, Form, FormLabel, FormControl, Button} from 'react-bootstrap'
// // import './styles.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Axios from 'axios'

// import Home1 from "./components/Home";
// import Navbar from "./components/Navbar"

// function App(){
//   return (
//     <BrowserRouter>
//          <Navbar/>
//         <Switch>
//           <Route path="/" exact><Payment /></Route>
//           <Route path="/response "><Response /></Route>

//         </Switch>
//     </BrowserRouter>   
//   );
// }

// export default function Payment(){
//   const [baseURL] = useState('https://sandboxsecure.payu.in/_payment');
//   const [title] = useState('React Js Redirect Checkout');
//   const [key,setKey] = useState('F2VkxKMp');
//   const [salt] = useState('riAmnpfqiU');
//   const [txnid, setTxnId] = useState('ORD916');
//   const [amount, setAmount] = useState('6.00');
//   const [firstname,setFirstName] = useState('Ayush');
//   const [email, setEmail] = useState('ayush.jain09@gmail.com');
//   const [phone, setPhone] = useState('9711805104');
//   const [udf5] = useState('BOLT_KIT_NODE_JS')
//   const [productinfo, setProductInfo] = useState('');
//   const [surl] = useState('http://localhost:3200/response');
//   const [furl] = useState('http://localhost:3200/response');
//   const [serviceProvider] = useState('payu_paisa');
//   const [hash,setHash] = useState('4b0aa4747a000ccda22ced61734d8171a29202cc3f71d6215cf23cfd41221e2c3ac4cdb44da82583bd6674b4d5c1a9cb826a7667912eebb2de28ff08d956da05');


//   const calcHash = (e) =>{
//     let name= e.target.name;
//     let value = e.target.value;

//     if(name === 'key'){
//       setKey(value);
//     }
//     if(name === 'txnid'){
//       setTxnId(value);
//     }
//     if(name === 'amount'){
//       setAmount(value);
//     }
//     if(name === 'firstname'){
//       setFirstName(value);
//     }
//     if(name === 'email'){
//       setEmail(value);
//     }
//     if(name === 'phone'){
//       setPhone(value);
//     }
//     if(name === 'productinfo'){
//       setProductInfo(value);
//     }
//   }

//   useEffect(() =>{
//     Axios.post('https://localhost:3200/hash', 
//     {key,txnid,amount,productinfo,firstname,email,udf5,salt}).then(res =>{
//       setHash(res.data.hash);
//     });
//   }, [key,txnid,amount,productinfo,firstname,email,salt,udf5]);


//   return(
//     <Container>
//       <Form action={baseURL} method='post'>
//         <Row>
//           <Col sm><h4>{title}</h4></Col>
//         </Row>
//         <Row className="pt-sm-2">
//           <Col sm><FormLabel>Key</FormLabel></Col>
//           <Col sm><FormControl type="text" name="key" value={key} onChange={calcHash}></FormControl></Col>
//         </Row>
//         <Row className="pt-sm-2">
//           <Col sm><FormLabel>Txn Id</FormLabel></Col>
//           <Col sm><FormControl type="" name="txnid" value={txnid} onChange={calcHash}></FormControl></Col>
//         </Row>
//         <Row className="pt-sm-2">
//           <Col sm><FormLabel>Amount</FormLabel></Col>
//           <Col sm><FormControl type="text" name="amount" value={amount} onChange={calcHash}></FormControl></Col>
//         </Row>
//         <Row className="pt-sm-2">
//           <Col sm><FormLabel>First Name</FormLabel></Col>
//           <Col sm><FormControl type="text" name="firstname" value={firstname} onChange={calcHash}></FormControl></Col>
//         </Row>
//         <Row className="pt-sm-2">
//           <Col sm><FormLabel>Email</FormLabel></Col>
//           <Col sm><FormControl type="text" name="email" value={email} onChange={calcHash}></FormControl></Col>
//         </Row>
//         <Row className="pt-sm-2">
//           <Col sm><FormLabel>Phone</FormLabel></Col>
//           <Col sm><FormControl type="text" name="phone" value={phone} onChange={calcHash}></FormControl></Col>
//         </Row>
//         <Row className="pt-sm-2">
//           <Col sm><FormLabel>Product Info</FormLabel></Col>
//           <Col sm><FormControl type="text" name="productinfo" value={productinfo} onChange={calcHash}></FormControl></Col>
//         </Row>
//         <Row className="pt-sm-2">
//           <Col sm><FormLabel>SURL</FormLabel></Col>
//           <Col sm><FormControl type="text" name="surl" value={surl} readOnly></FormControl></Col>
//         </Row>
//         <Row className="pt-sm-2">
//           <Col sm><FormLabel>FURL</FormLabel></Col>
//           <Col sm><FormControl type="text" name="furl" value={furl} readOnly></FormControl></Col>
//         </Row>
//         <Row className="pt-sm-2">
//           <Col sm><FormLabel>Service Provider</FormLabel></Col>
//           <Col sm><FormControl type="text" name="service_provider" value={serviceProvider} readOnly></FormControl></Col>
//         </Row>
// 		<Row className="pt-sm-2">
//           <Col sm><FormLabel>Service Provider</FormLabel></Col>
//           <Col sm><FormControl type="text" name="udf5" value='BOLT_KIT_NODE_JS' readOnly></FormControl></Col>
//         </Row>
		
//         <Row className="pt-sm-2">
//           <Col sm><FormLabel>Hash</FormLabel></Col>
//           <Col sm><FormControl type="" name="hash" value='4b0aa4747a000ccda22ced61734d8171a29202cc3f71d6215cf23cfd41221e2c3ac4cdb44da82583bd6674b4d5c1a9cb826a7667912eebb2de28ff08d956da05' readOnly></FormControl></Col>
//         </Row>
//         <Row className="pt-sm-2">
//           <Col sm><Button type="submit">Pay</Button></Col>
//         </Row>
//       </Form>
//     </Container>
//   )
// }


// export function Response(){
//   const [txnid, setTxnId] = useState('');
//   const [amount, setAmount] = useState('');
//   const [status, setStatus] = useState('');

//   useEffect(() =>{
//     Axios.get('https://localhost:3200/getResponse').then(res =>{
//       setTxnId(res.data.txnid);
//       setAmount(res.data.amount);
//       setStatus(res.data.status);
//     });
//   },[txnid, amount,status]
//   );

//   return(
//     <Container>
//       <Row>
//         <Col>TxnId</Col>
//         <Col>{txnid}</Col>
//       </Row>
//       <Row>
//         <Col>Amount</Col>
//         <Col>{amount}</Col>
//       </Row>
//       <Row>
//         <Col>Status</Col>
//         <Col>{status}</Col>
//       </Row>
//     </Container>
//   )
// }
