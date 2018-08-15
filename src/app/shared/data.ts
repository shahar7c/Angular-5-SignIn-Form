export interface Data {
    error:{
        code:number;
        description:string;
    }
    user:User;
}

export interface User{
    id: number;
    email: string;
    profile: {
        first_name:string;
        last_name:string;
    }
}
