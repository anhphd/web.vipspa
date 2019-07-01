import { IUser } from '../Interfaces/IUser';

export class User implements IUser {
    id: string = "";
    name: string = "";
    password: string = "";
    accessToken: string = "";
}