import React,{Component} from 'react';
import {connect} from 'react-redux';
import Layout from '../../components/Layout/Layout';


const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => {

    return {}

}

class Index extends Component {

    render() {

        return (
            <Layout login="login"><span>Layout</span></Layout>
        )

    }

}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)

export default App
