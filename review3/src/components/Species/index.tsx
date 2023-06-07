import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TSpeciesProp } from '../../helpers/types/TSpeciesProp';
import SpecieCard from './SpecieCard';

const Species = ({ species }: TSpeciesProp): JSX.Element => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                {species &&
                    species.map((specie, index) => (
                        <Col xs={12} sm={4} key={index} className="mb-3">
                            <Link to={'/species/' + specie.name}>
                                <SpecieCard specie={specie} />
                            </Link>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
};

export default Species;
