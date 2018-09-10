import React, {Component} from 'react'
import {connect} from 'react-redux';
import Layout from '../components/Layout/Layout';
import {login, logout} from "../components/Layout/LayoutAction";
import {Button} from 'antd';

const mapStateToProps = state => {
    return {
        isLogin: state.layout.isLogin,
    }
}

const mapDispatchToProps = dispatch => {

    return {
        login: () => login(dispatch, {isLogin: true}),
        logout: () => logout(dispatch, {isLogin: false}),
    }

}

class Index extends Component {
    render() {

        const {isLogin, login, logout} = this.props;

        return (
            <Layout>
                <Button onClick={login}>登录</Button>
                <Button onClick={logout}>退出</Button>
                <span>测试：{isLogin ? '成功' : '失败'}</span>
            </Layout>
        )
    }

}

export default connect(mapStateToProps,
    mapDispatchToProps)(Index)
