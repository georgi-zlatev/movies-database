export interface User {
    _id: string,
    likes: string
    email:string,
    username:string,
    password:string,
    created_at: string,
    updatedAt: string,
}

export interface UserForAuthentication {
    firstName: string;
    email: string;
    phoneNumber: string;
    password: string;
    id: string;
}