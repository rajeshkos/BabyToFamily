import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {UPLOADBUTTON_CLICKED} from './AddBabyActions';
export const ADD_BABY_CHECKING='ADD_BABY_CHECKING';
export const ADDBABY_ADDED='ADDBABY_ADDED';
export const ADDBABY_FAILED='ADDBABY_FAILED';
import Api from 'app/lib/api'
import URL from 'app/lib/url'
function* uploadImage(action) {
 //console.log("action",action.payload);
 try {
      yield put({type:ADD_BABY_CHECKING})
     const user = yield call(Api.makeImageUpload, 'POST',URL.ADD_BABY_DETAIL,{},action.payload.formData);
    // console.log("user",user);
      yield put({type:ADDBABY_ADDED})
  } catch (e) {
    // console.log("error",e);
     yield put({type:ADDBABY_FAILED,payload:e})
  }
}

export function* AddBabySaga() {
  yield takeLatest(UPLOADBUTTON_CLICKED, uploadImage);
}
