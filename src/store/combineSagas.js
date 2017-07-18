import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {AddBabySaga} from 'app/containers/AddBaby/AddBabySaga'

export default function*  rootSaga() {
  yield  [

    fork(AddBabySaga)

]

}
