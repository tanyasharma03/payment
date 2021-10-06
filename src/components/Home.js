import React from 'react'
import image from "../images/Card.png"
import { TextField } from '@material-ui/core'
import PersonIcon from '@mui/icons-material/Person';

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
                             <PersonIcon /><TextField id="standard-basic" className="input-box" label="Full Name" variant="standard" /><br/>
                             <TextField id="standard-basic" className="input-box" label="Email" variant="standard" /><br/>
                             <TextField id="standard-basic" className="input-box" label="Address" variant="standard" /><br/>
                             <TextField id="standard-basic" className="input-box" label="State" variant="standard" /><br/>
                             <TextField id="standard-basic" className="input-box" label="Country" variant="standard" />

                             </div>
                             
                         </div>
                     </div>
                 </div>
            </div>
        </>
    )
}

export default Home
