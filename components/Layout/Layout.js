import React from 'react';
import Head from 'next/head';
import './Layout.scss';

const Layout = ({login,children}) => (
    <div className="layout">
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <title>Next-DEMO</title>
            <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <div className="content">
            <p>{login}</p>
            {children}
        </div>
    </div>
);
export default Layout;