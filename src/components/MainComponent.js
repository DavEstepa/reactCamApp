import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import CamForm from "./CamComponent";
import { Routes, Route } from 'react-router-dom';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import ListImages from "./ImagesComponent";

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            database: getDatabase(),
            image64: '',
            data: {},
            user: ''
        };

        this.sendImageToFirebase = this.sendImageToFirebase.bind(this);
        this.setImage64 = this.setImage64.bind(this);
        this.signIn = this.signIn.bind(this);
        this.exit = this.exit.bind(this);
    };
    
    exit(){
        const auth = getAuth();
        signOut(auth).then(() => {
          this.setState({user: ''});
          console.log('salido');
        }).catch((error) => {
          // An error happened.
        });
    }

    signIn(email, password){
        console.log('dentro signIn');
        signInWithEmailAndPassword(getAuth(), email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.setState({user: user.email});
          console.log(user.email);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }

    componentDidMount(){
        onValue(ref(this.state.database, 'images/'), (snapshot) => {
          const dataDB = snapshot.val();
          this.setState({data: dataDB});
        });
    }

    sendImageToFirebase(nameImage, legend, date){
        const createImage = (value1, value2, value3, value4) => ({imageName: value1,legend: value2, image64: value3, dateISOstr: value4});
        set(ref(this.state.database, 'images/image' + nameImage + Date.now().toLocaleString()), 
        createImage(nameImage, legend, this.state.image64, date));
        this.setState({image64: ''});
    };

    setImage64(newImage64){
        this.setState({image64: newImage64});
    }

    render(){
        const CamFormDerived = () => {
            return(
                <CamForm image64={this.state.image64} sendImageToFirebase = {this.sendImageToFirebase} setImage64= {this.setImage64}/>
            );
        };
        const ImagesDerived = () => {
            return(
                <ListImages data={this.state.data}/>
            );
        };
        return(
            <>
                <Header user={this.state.user} signIn={this.signIn} exit={this.exit}/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/camform" element={<CamFormDerived />} />
                    <Route exact path="/images" element={<ImagesDerived />}/>
                </Routes>
            </>
        );
    };
};

export default Main;