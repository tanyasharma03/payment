import React,{useState} from 'react'
import image from "../images/Card.png"
import axios from 'axios'
import { TextField } from '@material-ui/core'

const Home1 = () => {

    console.log("Welcome to home page");
    const [user, setUser] = useState({
        fname:"",
        email:"",
        address:"",
        state:"",
        country:""
    });

    let name, value;
    const getUserData =(event) =>{
        name= event.target.name;
        value=  event.target.value;

        setUser({...user, [name] :value });
    }

    console.log("1234");
    const postData = async(event)=>{

        event.preventDefault();

        const {fname,email,address,state,country} = user;

        if( !fname || !email || !address || !state || !country){
            alert("Fill details properly")
        }else{
            const res = await fetch(
                "https://payment-e0619-default-rtdb.firebaseio.com/paymentForm.json",
                {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    fname,
                    email,
                    address,
                    state,
                    country
                }),
            }
            );
            if(res){
                setUser({
                    fname:"",
                    email:"",
                    address:"",
                    state:"",
                    country:""
                });
                alert("Data stored successfully");
            }
        }
        } ;

        const hash= 'c9a35e8e797ace036a944e7f4111ac36a01fe6919e10bb03e5f39fa2260b8d6f22306cf96f3f2189b154bbd73482669cfa7f2dce563f5ffcc89a8dbd69fdc39a';

        const getPayu = async() =>{
            console.log("Welcome to payu");

             if(hash){
                 const res = await axios.post('https://sandboxsecure.payu.in/_payment',
                 {
                    headers:{
                        "Content-Type":"application/json",
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        // "Access-Control-Allow-Origin":'http://localhost:3000/home',
                        // 'Origin': 'https://sandboxsecure.payu.in/_payment',
                        // 'Access-Control-Request-Method': 'POST',
                        // 'Access-Control-Request-Headers': 'Authorization, Content-Type'
                 },
                    data:JSON.stringify({
                        key:"F2VkxKMp",
                        amount:10,
                        txnid:"2300",
                        email:"tasu2612@gmail.com",
                        productinfo:"FeroOccasions",
                        firstname:"Tanya",
                        udf1:"Sharma",
                        udf2:"qwerty",
                        udf3:"9876543321",
                        udf4:"One Way",
                        udf5:"",
                 }),
                 
             })
        
    }}
    console.log("Data submitted");
    // if(hash){
    //         const resp = await axios({
    //           method: 'POST',
    //           url:'https://secure.payu.in/_payment',
    //           data:JSON.stringify({
    //               key:"F2VkxKMp",
    //               amount:10,
    //               txnid:"2300",
    //               email:"tasu2612@gmail.com",
    //               productinfo:"FeroOccasions",
    //               firstname:"tanya",
    //               udf1:"sharma",
    //               udf2:"qwerty",
    //               udf3:"9876453",
    //               udf4:"One Way",
    //               udf5:"Model",
    //               phone:"9876543321",
    //               surl:'http://staging.ferofly.com/Booking/FeroOccasions/BookingConfirmed',
    //               furl:'https://test.payumoney.com/mobileapp/payumoney/failure.php',
    //               service_provider:'payu_paisa',
    //               hash:"c9a35e8e797ace036a944e7f4111ac36a01fe6919e10bb03e5f39fa2260b8d6f22306cf96f3f2189b154bbd73482669cfa7f2dce563f5ffcc89a8dbd69fdc39a",
    //               merchantid:'7321925'
    //           }),
    //           headers:{
    //             'Content-type': 'application/x-www-form-urlencoded'
    //           }
    //         })
        


    return (
        <>
            <div className="container">
                 {/* <h1>PayU</h1> */}
                 <div className="info">
                     <div className="row">
                         <div className="col-lg-6 order-lg-1 order-1">
                            <img src={image} alt="pic" />
                         </div>
                         <div className="col-lg-6 order-lg-2 order-2">
                             <h2>Payment Information</h2>

                             <form method="POST">
                             <div className="details">
                         
                             <i class="zmdi zmdi-account icons"></i>
                             <TextField id="standard-basic" className="input-box" type="text" value={user.fname} onChange={getUserData} name="fname" label="Full Name" variant="standard" autoComplete="off" required />
                             <br/>

                             <i class="zmdi zmdi-email icons"></i>
                             <TextField id="standard-basic" className="input-box" value={user.email} onChange={getUserData} type="email" name="email"  label="Email" variant="standard" autoComplete="off" required />
                             <br/>

                             <i class="zmdi zmdi-home icons"></i>
                             <TextField id="standard-basic" className="input-box" value={user.address} onChange={getUserData} type="text"  name="address" label="Address" variant="standard" autoComplete="off" required/>
                             <br/>

                             <i class="zmdi zmdi-pin icons"></i>
                             <TextField id="standard-basic" className="input-box"  value={user.state} onChange={getUserData} type="text"  name="state" label="State" variant="standard" autoComplete="off" required/>
                             <br/>

                             <i class="zmdi zmdi-flag icons"></i>
                             <TextField id="standard-basic" className="input-box" value={user.country} onChange={getUserData} type="text"  name="country" label="Country" variant="standard" autoComplete="off" required/>
                             <br/>

                             {/* <button className="btn btn-primary btn-pay" onClick={postData}>Pay Now</button> */}

                             <button type="submit" className="btn btn-primary btn-pay" onClick={getPayu}>PayU Gateway</button>
                             
                             </div>
                             </form>
                         </div>
                     </div>
                 </div>
            </div>
        </>
    )
}

export default Home1
