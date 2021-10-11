import React,{useState} from 'react'
import img from "../images/Signup.png"
import { TextField } from '@material-ui/core'

const Signup = () => {

    const [login, setLogin] = useState({
        email:"",
        password:""
    });

    let name, value;

    const loginUser =(e) =>{
        name= e.target.name;
        value=e.target.value;
        setLogin({...login ,[name]:value});
    }

    const handlesubmit =(e)=>{
       e.preventDefault();

       const {email,password} = login;

       if(!email || !password){
           alert("Enter proper credentials")
       }else{
           alert("Data entered successfully");
           setLogin({
               email:"",
               password:""
           })
       }
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-lg-2 order-1">
                       <img src={img} alt="login pic"/>
                    </div>
                    <div className="col-lg-6 order-lg-1 order-2">
                         <h2>Get Yourself Signed In</h2>
                             
                             <form method="POST">
                             <div className="details">
                             <i class="zmdi zmdi-email icons"></i>
                             <TextField id="standard-basic" className="input-box" value={login.email} onChange={loginUser} type="email" name="email"  label="Email" variant="standard" autoComplete="off" required />
                             <br/>
                             <i class="zmdi zmdi-eye icons"></i>
                             <TextField id="standard-basic" className="input-box" value={login.password} onChange={loginUser} type="password" name="password"  label="Password" variant="standard" autoComplete="off" required />
                             <br/>
                             <button type="submit" onClick={handlesubmit} className="btn btn-primary btn-pay">Sign Up</button>
                             </div>
                             </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
