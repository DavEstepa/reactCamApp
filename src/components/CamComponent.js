import { Component } from "react";
import { Button, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import Webcam from "react-webcam";

export default class CamForm extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(event){
        this.props.sendImageToFirebase(this.imagename.value, this.legend.value);

        alert("SENT TO FIREBASE!!!");
        this.setState({image64: ''})
        this.props.setCount();
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
        <div>
            <div className="container-fluid bg-light text-dark p-5">
                <div className="container bg-light p-5">
                    <Row>
                        <h1 className="display-5">SEND INFO TO FIREBASE</h1>
                    </Row>
                    <Row>
                        {this.props.image64 == '' ? <Webcam
                            forceScreenshotSourceSize = {true}
                            audio={false}
                            ref={this.setRef}
                            screenshotFormat="image/jpeg"
                        /> : <img src={this.props.image64} />}
                    </Row>
                    <Row>
                        <hr className="my-2" />
                        <p className="lead">
                        <Button color="primary" onClick={this.capture}>Capture</Button>
                        </p>
                    </Row>

                </div>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Label htmlFor="imagename">Image name</Label>
                        <Input type="text" id="imagename" name="imagename"
                            innerRef={(input) => this.imagename = input} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="legend">Legend</Label>
                        <Input type="text" id="legend" name="legend"
                            innerRef={(input) => this.legend = input}  />
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Send</Button>
                </Form>
            </div>
        </div>
      );
    }
}