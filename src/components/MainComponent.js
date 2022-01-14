import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import CamForm from "./CamComponent";
import { Routes, Route } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            database: getDatabase(),
            image64: '',
            count: 0
        };
        console.log(this.state.count);
        this.sendImageToFirebase = this.sendImageToFirebase.bind(this);
        this.setImage64 = this.setImage64.bind(this);
        this.setCount = this.setCount.bind(this);
    };

    sendImageToFirebase(nameImage, legend){
        const createImage = (value1, value2, value3) => ({imageName: value1,legend: value2, image64: value3});
        set(ref(this.state.database, 'images/image' + this.state.count.toString()), 
        createImage(nameImage, legend, this.state.image64));
        this.setState({image64: ''});
    };

    setImage64(newImage64){
        this.setState({image64: newImage64});
    }

    setCount(){
        this.setState({count: this.state.count + 1});
        console.log(this.state.count);
    }
    render(){
        const CamFormDerived = () => {
            return(
                <CamForm setCount={this.setCount} image64={this.state.image64} sendImageToFirebase = {this.sendImageToFirebase} setImage64= {this.setImage64}/>
            );
        };
        return(
            <>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/camform" element={<CamFormDerived />} />
                </Routes>
            </>
        );
    };
};

export default Main;