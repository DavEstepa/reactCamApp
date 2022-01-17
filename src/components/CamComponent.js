import React, { Component } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input,
    Card, CardTitle, CardText } from 'reactstrap';
import Webcam from "react-webcam";

export default class CamForm extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(event){
        this.props.sendImageToFirebase(this.imagename.value, this.legend.value, new Date().toISOString());

        alert("SENT TO FIREBASE!!!");
        event.preventDefault();
    }
    setRef = webcam => {
      this.webcam = webcam;
    };
  
    capture = () => {
      this.props.setImage64(this.webcam.getScreenshot());
    };
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
  
      return (
        <div
        style={{
        backgroundColor: '#333',
        borderColor: '#333'
        }}>
            <Card
            body
            inverse
            style={{
            backgroundColor: '#333',
            borderColor: '#333'
            }}>
                <CardTitle tag="h5">
                    Send info to Firebase
                </CardTitle>
                <CardText>
                    With supporting text below as a natural lead-in to additional content.
                </CardText>
                <div className="container">
                    <Row>
                        <Col md={8}>
                            <Button block onClick={this.capture}>Capture</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            {this.props.image64 == '' ? <Webcam
                                forceScreenshotSourceSize = {true}
                                audio={false}
                                ref={this.setRef}
                                screenshotFormat="image/jpeg"
                            /> : <img src={this.props.image64} />}
                        </Col>
                        <Col md={4}>
                            <Form onSubmit={this.handleLogin} inline>
                                <FormGroup floating>
                                    
                                    <Input type="text" id="imagename" name="imagename"
                                        innerRef={(input) => this.imagename = input} 
                                        bsSize="sm"
                                        className="mb-3"
                                        placeholder="Image name"
                                        />
                                    <Label for="imagename" style={{color: '#333'}} size="sm">Image name</Label>
                                </FormGroup>
                                {' '}
                                <FormGroup floating>
                                    
                                    <Input type="textarea" id="legend" name="legend"
                                        innerRef={(input) => this.legend = input}  
                                        bsSize="sm"
                                        className="mb-3"
                                        placeholder="Image legend"
                                        />
                                    <Label for="legend" style={{color: '#333'}} size="sm">Legend</Label>
                                </FormGroup>
                                {' '}
                                <Button block type="submit" value="submit">Send to Firebase</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
      );
    }
}