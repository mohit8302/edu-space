export interface IUser {
    id: string;
    email: string;
    username: string;
}

export interface LoginResponse {
    access_token: string;
    refresh_token?: string;
    user?: IUser;
}

export interface SignupRequest {
    email: string;
    password: string;
    username: string;
}

