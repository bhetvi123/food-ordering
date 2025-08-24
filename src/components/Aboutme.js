import User from "./user";
import Userclass from "./Userclass";
import userContext from "../utils/userContext";

let Aboutme = () => {
     console.log("parent function");//learn for componentDidMount
    return(
        <div>
        <h1 className="contact">Hetvi Barot</h1>
         <div className="contact">loggedin User
            <userContext.Consumer>
                {({loggedInUser})=><h1> {loggedInUser}</h1>}
            </userContext.Consumer>
         </div>
        <User name={"don"}/>
        <Userclass name={"hero"}/>
        </div>

    );
}; 
export default Aboutme;