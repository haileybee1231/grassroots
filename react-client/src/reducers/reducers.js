import data from '../../src/testdata.js';
import $ from 'jquery';

const mainReducer = (state = data, action) => { // reducers are dispatched here
  switch(action.type) { // if their action type matches a case,
    case 'LOGIN': {
      return {
        ...state,
        currentUser: action.payload.username
      }
      };
    case 'LOGOUT': {
      return {
        ...state,
        currentUser: null
      }
    };
    
    case 'SIGNUP': {
      return state
    };

    case 'FETCH-RACES': {
      return state
    };

    case 'CREATE-EVENT':
      return {
        ...state,
        events: [...state.events]
      }

    case 'FETCH-EVENTS':
      console.log(action.payload)
      return {
        ...state,
        events: [...state.events, ...action.payload.newEvents]
      }

    case 'SET-USER':
      return {
        ...state,
        selectedUser: action.payload.selectedUser
      }
    case 'SAVE_POLLING_INFO':
      return Object.assign({}, state, {
        pollingInfo: action.payload.results
      })
    default: return state;
  }
}


export default mainReducer;