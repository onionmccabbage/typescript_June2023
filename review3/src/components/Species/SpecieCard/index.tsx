import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { TSpecieProp } from '../../../helpers/types/TSpeciesProp';
import './index.scss';

const SpecieCard = ({ specie }: TSpecieProp): JSX.Element => {
    return (
        <Card>
            <Card.Header>
                <Card.Img
                    variant="top"
                    src={require('../../../assets/images/' + specie.name.toLowerCase() + '.jpeg')}
                />
                <Card.ImgOverlay>
                    <Card.Title>
                        <h2>{specie.name}</h2>
                    </Card.Title>
                </Card.ImgOverlay>
            </Card.Header>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <b>Classsification:</b> {specie.classification}
                </ListGroupItem>
                <ListGroupItem>
                    <b>Designation:</b> {specie.designation}
                </ListGroupItem>
                <ListGroupItem>
                    <b>Language:</b> {specie.language}
                </ListGroupItem>
            </ListGroup>
        </Card>
    );
};

export default SpecieCard;
