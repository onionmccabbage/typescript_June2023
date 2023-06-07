import { get as axiosGet } from '../adapters/xhr';
import { API_SPECIES } from '../helpers/constants/api';
export const getSpecies = async (...speciesValues) => {
    const species = [];
    try {
        for (const key in speciesValues) {
            const specie = Number(key) + 1;
            const response = await axiosGet(`${API_SPECIES}${specie}`);
            const newSpecie = {
                name: response.data.name,
                classification: response.data.classification,
                designation: response.data.designation,
                language: response.data.language,
                people: response.data.people,
            };
            species.push(newSpecie);
        }
    }
    catch (error) {
        console.error(error);
    }
    return species;
};
