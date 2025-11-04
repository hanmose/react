import React, {useState} from "react";
import Toolbar from "./Toolbar";
import './toolbar.css';

function LandingPage(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <h2>소플과 함께하는 재미 있는 리액트 공부</h2>
        </div>
    );
}

export default LandingPage;