import { Origin } from "../classes/origin";
import { IOrigin } from "./iorigin";

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: IOrigin;
    location: object; 
    image: string;
    episode: [];
    url: string;
    created: string;
}

