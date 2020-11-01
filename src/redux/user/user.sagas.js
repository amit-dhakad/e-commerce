import { all, call, takeLatest } from 'redux-saga/effects';
import { auth, googleProvider } from '../../firebase/firebase.util';
import { GOOGLE_SIGN_IN_START } from '../types';

export function* signInWithGoogle() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
    console.log('userRef: ', userRef);
  } catch (error) {}
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
