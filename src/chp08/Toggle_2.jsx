import React from "react";

class Toggle_2 extends React.Component{
    constructor(props) {
        super(props);

        this.state = {isToggleOn: true}

    }
//     Event Handler를 함수로 정의
    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return(
            <div align="center" style={{margin: 200}}>
                {/*생성자에서 this키워드를 사용하기 위한 binding을 생략하려면*/}
                <button onClick={()=>this.handleClick()}>
                    Bind 생략 {this.state.isToggleOn ? "On" : "Off"}
                </button>
            </div>

        );
    }
}

export default Toggle_2;


