import React from "react";
import "./Notification.css"

class Notification extends React.Component{
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return(
            <div className={"wrapper1"}>
                <span className={"messageText"}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;