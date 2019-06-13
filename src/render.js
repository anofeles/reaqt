import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './JSON/data';

export let rerenderEntireTree = (State) =>{
    ReactDOM.render(<App State={State} addPost={addPost} />, document.getElementById('root'));
};

