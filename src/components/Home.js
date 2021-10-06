import React from 'react'
import image from "../images/Card.png"
import { TextField } from '@material-ui/core'

const Home = () => {
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
                             <i class="zmdi zmdi-account icons"></i><TextField id="standard-basic" className="input-box" label="Full Name" variant="standard" /><br/>
                             <i class="zmdi zmdi-email icons"></i><TextField id="standard-basic" className="input-box" type="email" label="Email" variant="standard" /><br/>
                             <i class="zmdi zmdi-home icons"></i><TextField id="standard-basic" className="input-box" label="Address" variant="standard" /><br/>
                             <i class="zmdi zmdi-pin icons"></i><TextField id="standard-basic" className="input-box" label="State" variant="standard" /><br/>
                             <i class="zmdi zmdi-flag icons"></i><TextField id="standard-basic" className="input-box" label="Country" variant="standard" /><br/>
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
