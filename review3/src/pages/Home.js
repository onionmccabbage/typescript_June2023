import React from 'react';
import Loader from '../components/Loader';
import Species from '../components/Species';
const Home = ({ isLoaded, species }) => {
    if (!isLoaded) {
        return <Loader />;
    }
    return <Species species={species}/>;
};
export default Home;
