import { IOrigin } from "../interfaces/iorigin";

export class Character implements IOrigin{
    id!: number;
    name!: string;
    status!: string;
    species!: string;
    type!: string;
    gender!: string;
    origin!: IOrigin;
    location!: object; 
    image!: string;
    episode!: [];
    url!: string;
    created!: string;
}
