import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* uploadImage(action) {
   try {
      const user = yield call(Api.makeImageUpload, 'POST',URL.ADD_BABY_DETAIL,{},action.payload.formData);
    //  yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    console.log(user);
   } catch (e) {
    //  yield put({type: "USER_FETCH_FAILED", message: e.message});
    alert(e)
   }
}


function* AddBabySaga() {
  yield takeLatest("ADDBABY_UPLOAD", uploadImage);
}

export default AddBabySaga;
