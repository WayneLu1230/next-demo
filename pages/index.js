import React,{Component} from 'react'
import Link from 'next/link'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import Route from '../routes/route';
// import App from '../containers/App/Index'

import {connect} from 'react-redux';
import Layout from '../components/Layout/Layout';

class Index extends Component {

    static getInitialProps ({ reduxStore, req }) {
        console.log(reduxStore)

        return {}
    }

    render() {
        return (
            <Layout login="login"><span>Layout</span></Layout>
        )
    }

}

export default connect()(Index)

//
// let store = createStore((state,action) => state)
// class Home extends Component{
//   render(){
//     return (
//         <Provider store={store}>
//             <Route/>
//         </Provider>
//     )
//   }
//
// }
//
// export default Home


// import React, { Fragment } from 'react';
// import { Button } from 'antd';
// import Link from 'next/link';
// import Head from 'next/head';
// import './index.scss'
//
// const Home = () => (
//     <Fragment>
//         <Head>
//             <meta name='viewport' content='width=device-width, initial-scale=1' />
//             <meta charSet='utf-8' />
//             <title>Next-Antd-Scafflod</title>
//             <link rel='stylesheet' href='/_next/static/style.css' />
//         </Head>
//         <Fragment>
//             <h1>我是Next的首页</h1>
//             <Link href='/userList'>
//                 <Button type='primary'>用户列表页</Button>
//             </Link>
//             <p className="test">hahah</p>
//         </Fragment>
//     </Fragment>
// );
// export default Home;
