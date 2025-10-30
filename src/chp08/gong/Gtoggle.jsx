import React from "react";
import toggle from "../Toggle";

class Gtoggle extends React.Component{

    constructor(props) {
        super(props);
        this.state ={toggled:false}
    }



    render() {
        return(
            <div>
                <button onClick={()=>this.setState(prevState =>({
                    toggled: !prevState.toggled
                }))}>{this.state.toggled ? "on" : "off"}</button>
            </div>
        )
    }
}

export default Gtoggle;