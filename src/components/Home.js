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

    return (
        <>
            <div className="container">
                 <h1>PayU</h1>
                 <div className="info">
                     <div className="row">
                         <div className="col-lg-6 order-lg-1 order-1">
                            <img src={image} alt="pic" />
                         </div>
                         <div className="col-lg-6 order-lg-2 order-2">
                             <h2>Payment Information</h2>

                             
                             <div className="details">

                             <i class="zmdi zmdi-account icons"></i>
                             <TextField id="standard-basic" className="input-box" type="text" value={user.fname} onChange={getUserData} name="fname" label="Full Name" variant="standard" />
                             <br/>

                             <i class="zmdi zmdi-email icons"></i>
                             <TextField id="standard-basic" className="input-box" value={user.email} onChange={getUserData} type="email" name="email"  label="Email" variant="standard" />
                             <br/>

                             <i class="zmdi zmdi-home icons"></i>
                             <TextField id="standard-basic" className="input-box" value={user.address} onChange={getUserData} type="text"  name="address" label="Address" variant="standard" />
                             <br/>

                             <i class="zmdi zmdi-pin icons"></i>
                             <TextField id="standard-basic" className="input-box"  value={user.state} onChange={getUserData} type="text"  name="state" label="State" variant="standard" />
                             <br/>

                             <i class="zmdi zmdi-flag icons"></i>
                             <TextField id="standard-basic" className="input-box" value={user.country} onChange={getUserData} type="text"  name="country" label="Country" variant="standard" />
                             <br/>

                             <button className="btn btn-primary btn-pay">Pay Now</button>
                             </div>
                             
                         </div>
                     </div>
                 </div>
            </div>
        </>
    )
}

export default Home
