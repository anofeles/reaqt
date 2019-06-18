import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost,addMedages,onPostCheange} from './JSON/data';

export let rerenderEntireTree = (State) =>{
    ReactDOM.render(<App State={State} onPostCheange={onPostCheange} addPost={addPost} addMedages={addMedages} />, document.getElementById('root'));
};

