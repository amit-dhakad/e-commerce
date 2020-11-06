import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.util';
import { FETCH_COLLECTIONS_START } from '../types';
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');

    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
