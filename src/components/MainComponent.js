import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import CamForm from "./CamComponent";
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/camform" element={<CamForm/>} />
                </Routes>
            </>
        );
    };
};

export default Main;