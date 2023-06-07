import React, { Component } from 'react';
import { TAppState } from './helpers/types/TAppState';
import { getSpecies } from './services/getSpecies';
import { ISpecies } from './helpers/interfaces/ISpecies';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import _404 from './components/Errors/404';
import People from './pages/People';

export default class App extends Component<{}, TAppState> {
    state = {
        isLoaded: false,
        species: [
            {
                name: '',
                classification: '',
                designation: '',
                language: '',
                people: [],
            },
        ],
    };

    componentDidMount(): void {
        const speciesPromise: Promise<any> = getSpecies('Human', 'Droid', 'wookie');

        speciesPromise.then((species: Array<ISpecies>) => {
            const isLoaded = true;
            this.setState({ isLoaded, species });
        });
    }

    render(): JSX.Element {
        const { isLoaded, species } = this.state;

        return (
            <Routes>
                <Route path="/" element={<Home isLoaded={isLoaded} species={species} />} />
                <Route path="/species/:specieId" element={<People species={species} />} />
                <Route path="*" element={<_404 />} />
            </Routes>
        );
    }
}
