import {createStore} from 'redux'
import {hotColdReducer} from './reducers';

export default createStore(hotColdReducer);
