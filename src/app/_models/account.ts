import { Role } from './role';

export class Account {
    [x: string]: any;
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    jwtToken?: string;
}