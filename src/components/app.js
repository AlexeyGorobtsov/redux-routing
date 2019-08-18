import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

import {Header} from "./header";
import { Routes } from '../containers/routes';
import {theme} from '../components/theme';

const Wrapper = styled.div`
text-align: center;
`;

export const App = () => (
    <ThemeProvider theme={theme}>
        <Wrapper>
            <Header/>
            <Routes/>
        </Wrapper>
    </ThemeProvider>
);
