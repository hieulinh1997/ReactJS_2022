import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select, Space, Button, Form } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import ClassComponent from '../../pages/ClassComponent';
History.propTypes = {

};

function History(props) {
    const history = useHistory();
    const handleHistory = () => {
        history.push({
            pathname: "/photos/index",
            state: "linh"
        });
    }

    return (
        <div className='row'>
            <div className='col-md-6'>
                <div style={{ border: '1px solid green', padding: '10px' }}>
                    <ClassComponent myProp="pass value to class component through prop "></ClassComponent>
                </div>
            </div>
            <div className='col-md-6'>
                <div style={{ border: '1px solid green', padding: '10px' }}>

                    <h2>Function Component</h2>
                    <Form>
                        <Form.Item label='history'>
                            <div className='text-left'>
                                <Button onClick={handleHistory}>history</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </div>
    );
}

export default History;