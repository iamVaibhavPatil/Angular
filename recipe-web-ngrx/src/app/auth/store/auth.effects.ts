import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import * as firebase from 'firebase';
import * as AuthActions from '../store/auth.actions';

@Injectable()
export class AuthEffects {

    @Effect()
    authSignUp = this.actions$.ofType(AuthActions.DO_SIGNUP)
        .pipe(
            map((action: AuthActions.DoSignUp) => {
                return action.payload;
            }),
            switchMap((authData: {username: string, password: string}) => {
                return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
            }),
            switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken());
            }),
            mergeMap((token: string) => {
                return [
                    {
                        type: AuthActions.SIGNEDUP
                    },
                    {
                        type: AuthActions.SET_TOKEN,
                        payload: token
                    }
                ];
            })
        );

    @Effect()
    authSignIn = this.actions$.ofType(AuthActions.DO_SIGNIN)
        .pipe(
            map((action: AuthActions.DoSignIn) => {
                return action.payload;
            }),
            switchMap((authData: { username: string, password: string}) => {
                return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
            }),
            switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken());
            }),
            mergeMap((token: string) => {
                this.router.navigate(['/']);
                return [
                    {
                        type: AuthActions.SIGNEDIN
                    },
                    {
                        type: AuthActions.SET_TOKEN,
                        payload: token
                    }
                ];
            })
        );

    @Effect({dispatch: false})
    authLogOut = this.actions$.ofType(AuthActions.LOGOUT)
        .pipe(
            tap(() => {
                this.router.navigate(['/']);
            })
        );

    constructor(private actions$: Actions,
                private router: Router) {}
}
