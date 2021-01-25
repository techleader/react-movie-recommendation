import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import newsreducer from './reducer/newsreducer';



export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('states');
      if (serializedState === null) {
        return undefined;
      }
      console.log("This is initial state" )
      console.log(serializedState)
      
      return JSON.parse(serializedState);
    } catch (err) {
        console.log(err)
      return undefined;
    }
  }; 

const persistedState = loadState();
const store = createStore(newsreducer, persistedState);

store.subscribe(() =>{
    console.log("store updated", store.getState());
    const state= store.getState();
  
    if(state == null || state == undefined) {
        console.log("store not saved");
    } else{
        const serializedState = JSON.stringify(state);
        console.log("else store updated", store.getState());
            localStorage.setItem("states", serializedState);
    }
});
 

 render(<Provider store = {store}>
    <App />
 </Provider>, document.getElementById('root'));

 


serviceWorker.unregister();
