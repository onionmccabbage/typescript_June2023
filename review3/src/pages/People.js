import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const People = ({ species }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [specieName, setSpecieName] = useState('');
    const [people, setPeople] = useState('');
    const params = useParams();
    useEffect(() => {
        const specie = species.find(({ name }) => name === params.specieId);
        setSpecieName(specie?.name);
        setPeople(specie?.people ? specie?.people[0] : undefined);
        if (people) {
            setIsLoaded(true);
        }
    }, [species]);
    return <div>{specieName ? specieName : 'Nema imena'}</div>;
};
export default People;
