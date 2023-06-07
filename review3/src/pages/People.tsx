import React, { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { ISpecies } from '../helpers/interfaces/ISpecies';
import { TSpeciesProp } from '../helpers/types/TSpeciesProp';

const People = ({ species }: TSpeciesProp): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [specieName, setSpecieName] = useState<string | undefined>('');
    const [people, setPeople] = useState<string | undefined>('');

    const params: Params<string> = useParams();

    useEffect(() => {
        const specie: ISpecies | undefined = species.find(({ name }) => name === params.specieId);
        setSpecieName(specie?.name);
        setPeople(specie?.people ? specie?.people[0] : undefined);
        if (people) {
            setIsLoaded(true);
        }
    }, [species]);

    return <div>{specieName ? specieName : 'Nema imena'}</div>;
};

export default People;
