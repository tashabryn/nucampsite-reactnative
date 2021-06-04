import { Button } from 'reactstrap';
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';


class Background extends Component {
    render() {
        return (
            <Card>
                <CardImg src="images/catbackground.jpg" alt="cat" />
                <CardImgOverlay>
                    <CardText id="reservecardtext">We're dedicated to saving homeless cats and kittens
                    and placing them in loving furever homes.<br></br>
                    <Button id="reservebutton">Reserve Your Visit</Button>
                    <Modal>
                        <ModalHeader>Reserve Your Visit</ModalHeader>
                        <ModalBody>
                            <LocalForm>
                                <div className="form-group">
                                    <Label>Details</Label>
                                    Complete and submit the below information to spend an hour with our adoptable kitties!<br>
                                        Each 1-hour visit is $10 per person.<br>
                                        
                                        <br>Upon Arrival:<br>
                                        Please arrive 5 minutes prior to your scheduled appointment to ensure sufficient time for check in. We start promptly. (<strong>Late arrivals will not be admitted, WITHOUT a refund.</strong>)<br>

                                        <br>After check in, head into the kitty area for an hour of joy, watching and playing with our furry friends!<br><br>
                                    </label>


                                    <Label>First Name</Label>

                            </LocalForm>
                        </ModalBody>

                    </Modal>



                    </CardText>
                </CardImgOverlay>
            </Card>
        );
    }
}

export default Background; 



