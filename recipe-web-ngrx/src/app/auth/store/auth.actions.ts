import { Action } from '@ngrx/store';

export const DO_SIGNUP = 'DO_SIGNUP';
export const DO_SIGNIN = 'DO_SIGNIN';
export const SIGNEDUP = 'SIGNEDUP';
export const SIGNEDIN = 'SIGNEDIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class DoSignUp implements Action {
    readonly type = DO_SIGNUP;
    constructor(public payload: {username: string, password: string}) {}
}

export class DoSignIn implements Action {
    readonly type = DO_SIGNIN;
    constructor(public payload: {username: string, password: string}) {}
}

export class SignedUp implements Action {
    readonly type = SIGNEDUP;
}

export class SignedIn implements Action {
    readonly type = SIGNEDIN;
}

export class LogOut implements Action {
    readonly type = LOGOUT;
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor (public payload: string) {}
}

export type AuthActions = DoSignUp | DoSignIn | SignedUp | SignedIn | LogOut | SetToken;
