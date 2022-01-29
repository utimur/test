import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./HelloWorld";
import Users from "./Users";

export const HELLO_WORLD_ROUTE = 'hello'
export const USERS_ROUTE = 'users'

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={HELLO_WORLD_ROUTE} exact element={<HelloWorld />} />
                <Route path={USERS_ROUTE} exact element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
