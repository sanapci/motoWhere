import { Role } from "../enums/role";

export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: Role;
    registrationDate: Date;
}
