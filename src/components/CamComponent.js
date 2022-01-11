import react, { Component } from "react";
import { Button } from 'reactstrap';

export default class CamForm extends Component {
    render() {
        return(
            <div>
                <div class="container-fluid bg-light text-dark p-5">
                    <div class="container bg-light p-5">
                        <h1 className="display-5">Take a photo and upload it!</h1>
                        <hr className="my-2" />
                        <p className="lead">
                        <Button color="primary">Try yourself</Button>
                        </p>
                    </div>
                </div>
            </div>
        );
    };
}