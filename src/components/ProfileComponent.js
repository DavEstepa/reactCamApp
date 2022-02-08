import React, { Component } from 'react';
import {Dropdown, DropdownItem, DropdownToggle, 
    DropdownMenu, Modal, ModalBody, ModalHeader, 
    Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

export default class Profile extends Component {
    constructor(props){
        super(props);
		this.state = {
			isModalOpen: false,
            isDropOpen: false
		};
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleDrop = this.toggleDrop.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
	toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }
    toggleDrop() {
        this.setState({
            isDropOpen: !this.state.isDropOpen
        });
    }
    changeColor(){
        console.log('asd');
    }
    handleLogin(event){
        console.log('botonIngresar');
        this.props.signIn(this.mail.value, this.password.value);
        this.toggleModal();
        event.preventDefault();
    }
    render(){
        const RenderUser = () => {
            return(
                    <Dropdown isOpen={this.state.isDropOpen} toggle={this.toggleDrop}>
                        <DropdownToggle caret>
                        {this.props.user}
                        </DropdownToggle>
                        <DropdownMenu
                        >
                        <DropdownItem header>
                                Menu
                        </DropdownItem>
                        <DropdownItem>
                            <Link to='/images' className="userOpt">
                                Gallery <span className="fa fa-list fa-lg"></span>
                            </Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to='/camform' className="userOpt">
                                Take a photo <span className="fa fa-camera fa-lg"></span>
                            </Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={this.props.exit}>
                            Logout
                        </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
            );
        };
        const RenderButtonIn = () => {
            return(
                <>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email"
                                    innerRef={(input) => this.mail = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Button outline onClick={this.toggleModal} className="nav-link"><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                </>
            );
        };
        return(
            this.props.user?<RenderUser/>:<RenderButtonIn/>
        );
    }

}