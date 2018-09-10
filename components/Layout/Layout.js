import React from 'react';
import Head from 'next/head';
import './Layout.scss';
import Link from 'next/link';

const Layout = ({children}) => (
    <div className="layout">
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <title>Next-DEMO</title>
            <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <div className="content">
            <Link href="/">
                <a>首页</a>
            </Link>
            <Link href="/about">
                <a>关于我们</a>
            </Link>
            <br/>
            {children}
        </div>
    </div>
);
export default Layout;