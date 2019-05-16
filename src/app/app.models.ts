export interface IGroup {
    id: number;
    name: string;
    description: string;
    data_creation: Date;
}

export interface IParticipant {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    group: number;
}
