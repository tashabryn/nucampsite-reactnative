import { Button } from 'reactstrap';
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText } from 'reactstrap';

class Background extends Component {
    render() {
        return (
            <Card>
                <CardImg src="images/catbackground.jpg" alt="cat" />
                <CardImgOverlay>
                    <CardText>We're dedicated to saving homeless cats and kittens
                    and placing them in loving furever homes.<br></br>
                    <Button id="reservebutton">Reserve Your Visit</Button>
                    </CardText>
                </CardImgOverlay>
            </Card>
        );
    }
}

export default Background; 



