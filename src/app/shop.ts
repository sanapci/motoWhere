import { Address } from "./address";

export interface Shop {
    id: number;
    name: string;
    address: Address;
    phone: string;
    coord: [number,number];
}
