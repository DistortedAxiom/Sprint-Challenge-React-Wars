import React, {useState, useEffect} from 'react';
import '../App.css';
import {Jumbotron, Button, Collapse} from 'reactstrap';

const CharacterCard = props => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    console.log(props.data);

    return (
        <Jumbotron>
            <div className="char-container">
                <h2 className="char-name">
                    {props.data.name}
                </h2>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' , marginTop: '1rem'}}>Character Information</Button>
                <Collapse isOpen={isOpen}>>
                <div className="char-info">
                <h4 className="char-bday">
                    Birth: {props.data.birth_year}
                </h4>
                <h4 className="char-hair">
                    Hair: {props.data.hair_color}
                </h4>
                <h4 className="char-height">
                    Height: {props.data.height}
                </h4>
                <h4 className="char-mass">
                    Weight: {props.data.mass}
                </h4>
                </div>
                </Collapse>
            </div>
        </Jumbotron>
    )
}

export default CharacterCard;
