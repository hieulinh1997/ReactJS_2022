import React, { Component } from "react";
import PropsTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { Form, Button } from "antd";
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // console.log(this.props.myProp);
    }
    handleClick = () => {
        this.props.history.push({
            pathname: "/photos/index",
            state: "linh2"
        });
    };
    render() {
        return (
            <div>
                <Form>
                    <h2>Class Component</h2>
                    <Form.Item label="history">
                        <Button onClick={this.handleClick}>
                            Click to navigate about page with history
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

ClassComponent.propTypes = {
    myProp: PropsTypes.string
}
export default withRouter(ClassComponent);
