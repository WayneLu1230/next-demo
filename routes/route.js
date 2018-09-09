import React from 'react';
import Link from 'next/link';
import About from '../components/About';
import Contact from '../components/Contact';

const Route = () => {
    return (
        <div>
           <Link href="/about">
               about
          </Link>
            <p></p>
            <Link href="/contact">
                contact
            </Link>
        </div>
    )
}

export default Route;



