import React, { Component } from 'react';
import { getSpecies } from './services/getSpecies';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import _404 from './components/Errors/404';
import People from './pages/People';
export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
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
    }
    componentDidMount() {
        const speciesPromise = getSpecies('Human', 'Droid', 'wookie');
        speciesPromise.then((species) => {
            const isLoaded = true;
            this.setState({ isLoaded, species });
        });
    }
    render() {
        const { isLoaded, species } = this.state;
        return (<Routes>
                <Route path="/" element={<Home isLoaded={isLoaded} species={species}/>}/>
                <Route path="/species/:specieId" element={<People species={species}/>}/>
                <Route path="*" element={<_404 />}/>
            </Routes>);
    }
}
