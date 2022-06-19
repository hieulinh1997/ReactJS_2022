import React from "react";
import Child from "../Child";
class Father extends React.Component {
    constructor(props) {
        super(props);
        this.childRef = React.createRef();
    }

    showTextInChild = () => {
        console.log(this.childRef.current.text);
        const txt = this.childRef.current.returnText();
        alert(txt);
    };

    increaseNumberInChild = () => {
        
        this.childRef.current.incrseaseNumber();
    };

    render() {
        return (
            <div className="App">
                <Child ref={this.childRef} />
                <button onClick={this.showTextInChild}>
                    Show Text in Child compoent
                </button>
                <p></p>
                <button onClick={this.increaseNumberInChild}>
                    Increase number in Child compoent
                </button>
            </div>
        );
    }
}

export default Father