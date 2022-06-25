import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
Index.propTypes = {

};

function Index(props) {
    const history = useHistory()

    useEffect(() => {
        alert(JSON.stringify(history.location))
    })
    return (
        <Content style={{ padding: '0 50px' }}>
            <div>
                index
            </div>
        </Content>
    );
}

export default Index;