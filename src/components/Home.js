import React,{useState} from 'react'
import image from "../images/Card.png"
import { TextField } from '@material-ui/core'

const Home = () => {

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

                             <button className="btn btn-primary btn-pay" onClick={postData}>Pay Now</button>
                             {/* <div> <a style= "width: 135px; background-color: #1065b7; text-align: center; font-weight: 800; padding: 11px 0px; color: white; font-size: 12px; display: inline-block; text-decoration: none; " href='https://pmny.in/5Ijlq29CKxM7' > Pay Now </a> </div> */}
                             </div>
                             </form>
                         </div>
                     </div>
                 </div>
            </div>
        </>
    )
}

export default Home
