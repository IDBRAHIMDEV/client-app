export interface Client {
    id?: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address?: string;
    balance: number;
    userId?: string;
}
