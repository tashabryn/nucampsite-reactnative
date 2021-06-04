import React, { Component }  from 'react';
import { Button, Card, CardImg, CardText, CardDeck, CardBody, CardTitle } from 'reactstrap';

class Kitties extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <br></br>
                        <h2 className="text-center" id="text">Meet The Kitties!</h2>
                            <br></br>
                        <CardDeck>
                            <Card>
                                <CardImg id="kitties" src="images/cat1.jpg" alt="cat image" />
                                    <CardBody className="d-flex flex-column">
                                        <CardTitle>Cashew</CardTitle>
                                            <CardText>
                                            Cashew is beautiful inside and out! Cashew is quite affectionate, so much 
                                            so that she'll head butt your hands to encourage you to pet her silky fur. And if you're looking for an expert 
                                            biscuit maker, look no further! Cashew loves to be near people, though she does not often choose to sit on laps. 
                                            She also enjoys playing with toys and having many scratching posts to keep up with her manicure!
                                            </CardText>
                                        <Button className="mt-auto" id="buttonadopt">Adopt Cashew</Button>
                                    </CardBody>
                            </Card>
                            <Card>
                                <CardImg id="kitties" src="images/cat2.jpg" />
                                    <CardBody className="d-flex flex-column">
                                        <CardTitle>Sundae</CardTitle>
                                            <CardText>
                                            Sundae is a sweet independent cat who likes to get cheek rubs and pets, but most definitely on 
                                            her terms. She and her feline roommates recently had their lives turned upside down when their owner fell ill 
                                            and could no longer care for them. However, you need only to sit with her for a bit to see her sweet nature. 
                                            Sundae loves to chase wand toys and is very fast.
                                            </CardText>
                                        <Button className="mt-auto" id="buttonadopt">Adopt Sundae</Button>
                                    </CardBody>
                            </Card>
                            <Card>
                                <CardImg id="kitties" src="images/cat3.jpg" />
                                    <CardBody className="d-flex flex-column">
                                        <CardTitle>Cooper</CardTitle>
                                            <CardText>
                                            Cooper is very friendly and one of his favorite hobbies might be following you around the house. 
                                            He is very mellow and prefers to be in your company, purring and getting snuggles and nudges, rather than running 
                                            around for long active play sessions. During the day, he lounges by sunny windows to bask in the light and watch 
                                            birds fly by. 
                                            </CardText>
                                        <Button className="mt-auto" id="buttonadopt">Adopt Cooper</Button>
                                    </CardBody>
                            </Card>
                        </CardDeck>
                        <CardDeck>
                            <Card>
                                <CardImg id="kitties" src="images/cat4.jpg" />
                                    <CardBody className="d-flex flex-column">
                                        <CardTitle>Rose</CardTitle>
                                            <CardText>
                                            Once Rose has had ample to get to know you, she enjoys your company and frequently follows her 
                                            person around. Rose is easily startled by sudden movement. She needs a quiet home with no small children to help 
                                            her feel relaxed and secure. She is a very curious and is a bright hunter who will chase a wand toy for quite a while.
                                            </CardText>
                                        <Button className="mt-auto" id="buttonadopt">Adopt Rose</Button>
                                    </CardBody>
                            </Card>
                            <Card>
                                <CardImg id="kitties" src="images/cat5.jpg" />
                                    <CardBody className="d-flex flex-column">
                                        <CardTitle>Daisy</CardTitle>
                                            <CardText>
                                            Daisy is a gorgeous girl with a more than beautiful heart. Beyond being a stunner she is sweet 
                                            and interested in people. If you want a gentle companion who will stay near you once she acclimates, this is the 
                                            cat for you. Iris struggles a bit with change and needs plenty of time to acclimate to a new space.
                                            </CardText>
                                        <Button className="mt-auto" id="buttonadopt">Adopt Daisy</Button>
                                    </CardBody>
                            </Card>
                            <Card>
                                <CardImg id="kitties" src="images/cat6.jpg" />
                                    <CardBody className="d-flex flex-column">
                                        <CardTitle>Max</CardTitle>
                                            <CardText>
                                            Max is king of cuddles and loves his treats. In the daytime he prefers napping but if you entice 
                                            him, he will play for you. When he is excited and happy, he will move his tail and roll his body to show you his 
                                            belly and purring out loud. His hidden talent is catching toys!
                                            </CardText>
                                        <Button className="mt-auto" id="buttonadopt">Adopt Max</Button>
                                    </CardBody>
                            </Card>
                        </CardDeck>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Kitties;