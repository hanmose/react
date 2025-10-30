import React from "react";


class GNOTIFICATION extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>{this.props.msg}</h1>
            </div>
        )
    }
}

export default GNOTIFICATION;