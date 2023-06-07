import { ISpecies } from '../helpers/interfaces/ISpecies';
import { get as axiosGet } from '../adapters/xhr';
import { API_SPECIES } from '../helpers/constants/api';

export const getSpecies = async (...speciesValues : Array<string>) : Promise<any> => {
    const species : Array<ISpecies> = [];

    try{
        for (const key in speciesValues) {
            const specie : number = Number(key) + 1;
            const response = await axiosGet(`${API_SPECIES}${specie}`);
            
            
            const newSpecie : ISpecies = {
                name: response.data.name,
                classification: response.data.classification,
                designation: response.data.designation,
                language: response.data.language,
                people: response.data.people,
            }

            species.push(newSpecie);
        }
    } catch (error) {
        console.error(error);
    }

    return species;
}