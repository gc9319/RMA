import { ICharacter } from "./i-character";

export interface IResponse {
    info: {
        count: number;
        pages: number;
        next: string; 
        prev: string;
    },
    results: ICharacter[];
}
