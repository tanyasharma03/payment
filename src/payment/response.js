import React,{useState, useEffect} from "react"
import { Container, Col, Row} from 'react-bootstrap'
// import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'


export default function Response(){
    const [txnid, setTxnId] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('');
  
    useEffect(() =>{
      Axios.get('https://localhost:3200/getResponse').then(res =>{
        setTxnId(res.data.txnid);
        setAmount(res.data.amount);
        setStatus(res.data.status);
      });
    },[txnid, amount,status]
    );
  
    return(
      <Container>
        <Row>
          <Col>TxnId</Col>
          <Col>{txnid}</Col>
        </Row>
        <Row>
          <Col>Amount</Col>
          <Col>{amount}</Col>
        </Row>
        <Row>
          <Col>Status</Col>
          <Col>{status}</Col>
        </Row>
      </Container>
    )
  }