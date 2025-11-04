import React, {useState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "../ex1/Greeting";

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogInClick = ()=>{
        setIsLoggedIn(true)
    }

    const handleLogOutClick = ()=>{
        setIsLoggedIn(false)
    }

    let btn;

    if(isLoggedIn){
        btn = <LogoutButton onClick={handleLogOutClick}/>
    }else{
        btn = <LoginButton onClick={handleLogInClick}/>
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    );
}

export default LoginControl;