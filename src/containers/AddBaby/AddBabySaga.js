import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {UPLOADBUTTON_CLICKED} from './AddBabyActions';
import Api from 'app/lib/api'
import URL from 'app/lib/url'
function* uploadImage(action) {
 //console.log("action",action.payload);
 try {
     const user = yield call(Api.makeImageUpload, 'POST',URL.ADD_BABY_DETAIL,{},action.payload.formData);
     console.log("user",user);
  } catch (e) {
     console.log("error",e);
  }
}

export function* AddBabySaga() {
  yield takeLatest(UPLOADBUTTON_CLICKED, uploadImage);
}
