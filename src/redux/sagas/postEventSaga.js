import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addEvent(action) {
    try {
        yield axios.post('/api/events', { event_name: action.payload.event_name, 
                                          event_location: action.payload.event_location, 
                                          event_date:action.payload.event_date});
        yield put({ type: 'GET_EVENTS'})
    } catch (err) {
        console.log(err)
    }
}

function* postEventSaga() {
    yield takeLatest('POST_EVENT', addEvent);
}

export default postEventSaga;