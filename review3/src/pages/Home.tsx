import React from 'react';
import Loader from '../components/Loader';
import Species from '../components/Species';
import { TAppState } from '../helpers/types/TAppState';

const Home = ({ isLoaded, species }: TAppState): JSX.Element => {
    if (!isLoaded) {
        return <Loader />;
    }

    return <Species species={species} />;
};

export default Home;
