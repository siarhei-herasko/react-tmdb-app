import React from 'react';

import {LayoutProps} from './layout.types';

import Container from './components/container';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const Layout = ({children}: LayoutProps) => {
    return (
        <Container>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </Container>
    );
};

export default Layout;
