import React from 'react';
import Header from './header/Header';
import Banner from './home/Banner';

export default function Layout() {
    return (
        <>
            <div id="main">
                <Header />
                <Banner />
            </div>
        </>
    )
}
