import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, Button, Modal, 
    ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

class Background extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleVisit = this.handleVisit.bind(this);
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleVisit(event) {
        alert(`Fullname: ${this.fullname.value} E-Mail: ${this.email.value} NumGuests: ${this.numGuests.checked}
            Date: ${this.date.value} Time: ${this.time.value}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <Card>
                <CardImg src="images/catbackground.jpg" alt="cat" />
                <CardImgOverlay>
                    <CardText id="reservecardtext">We're dedicated to saving homeless cats and kittens
                    and placing them in loving furever homes.<br></br>
                    <Button id="reservebutton" onClick={this.toggleModal}>Reserve Your Visit</Button>
                        <Modal isOpen ={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Reserve Your Visit</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={this.handleVisit}>
                                    <FormGroup>
                                        <Label>
                                        Complete and submit the below information to spend an hour with our adoptable kitties!<br></br><br></br>
                                        Each 1-hour visit is $10 per person.<br></br>
                                        
                                        <br></br>Upon Arrival:<br></br>
                                        Please arrive 5 minutes prior to your scheduled appointment to ensure sufficient time for check in. We start promptly. (<strong>Late arrivals will not be admitted, WITHOUT a refund.</strong>)<br></br>

                                        <br></br>After check in, head into the kitty area for an hour of joy, watching and playing with our furry friends!<br></br>
                                        </Label>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="fullname">Full Name</Label>
                                        <Input type="text" id="fullname" name="fullname"
                                            innerRef={input => this.fullname = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">E-Mail Address</Label>
                                        <Input type="email" id="email" name="email"
                                            innerRef={input => this.email = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="numGuests">Number of Guests</Label>
                                        <Input type="select" name="numGuests" id="numGuests"
                                            innerRef={input => this.numGuests = input} >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="date">Schedule Date</Label>
                                        <Input type="date" id="date" name="date" placeholder="mm/dd/yyyy"
                                            innerRef={input => this.date = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="time">Schedule Time</Label>
                                        <Input type="select" name="time" id="time"
                                            innerRef={input => this.time = input} >
                                            <option>10:00AM</option>
                                            <option>11:00AM</option>
                                            <option>12:00PM</option>
                                            <option>1:00PM</option>
                                            <option>2:00PM</option>
                                            <option>3:00PM</option>
                                            <option>4:00PM</option>
                                        </Input>
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="secondary">Cancel</Button>{' '}
                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </CardText>
                </CardImgOverlay>
            </Card>
        );
    }
}

export default Background; 



