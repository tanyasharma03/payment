import { BrowserRouter, Switch, Route } from "react-router-dom";
import Payment from "./payment/payuMoney";
import Response from "./payment/response";
// import './bootstrap.min.css';

export default function App(){
    return(
        <BrowserRouter>
          <Switch>
              <Route exact path='/'><Payment /></Route>
              <Route path='/response'><Response/></Route>
          </Switch>
        </BrowserRouter>
    )
}
