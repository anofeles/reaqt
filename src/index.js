import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import State, {addPost,addMedages,onPostCheange,subscrioe} from './JSON/data';


import './index.css';
import App from './App';


export let rerenderEntireTree = () =>{
    ReactDOM.render(<App State={State} onPostCheange={onPostCheange} addPost={addPost} addMedages={addMedages} />, document.getElementById('root'));
};

rerenderEntireTree();

subscrioe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
