import React, { useState } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainSidebar from './components/MainSidebar/MainSidebar';
import MainHeader from './components/MainHeader/MainHeader';
import MainBody from './components/MainBody/MainBody';
import { Global } from '@emotion/react'; // Global 전역 셋팅
import { reset } from './styles/global';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
    
    return (
        <>
            <Global styles={reset}/> 
            <MainLayout>
                <MainHeader />
                <MainBody />
                <MainSidebar />
            </MainLayout>
        </>
    );
}

export default App;