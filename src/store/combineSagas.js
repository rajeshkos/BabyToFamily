import { call, put, takeEvery, takeLatest,fork } from 'redux-saga/effects'
import { AddBabySaga }  from '../containers/AddBaby/AddBabySaga'

const rootSaga = function * root () {

      yield [
        fork(AddBabySaga)
      ]



}
export default rootSaga;
