import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store /*, {addPost,addMedages,onPostCheange,subscrioe}*/ from './JSON/data';
import './index.css';
import App from './App';


export let rerenderEntireTree = () =>{
    ReactDOM.render(<App
        State={store.GetState()}
        onPostCheange={store.onPostCheange.bind(store)}
        addPost={store.addPost.bind(store)}
        addMedages={store.addMedages.bind(store)}
    />, document.getElementById('root'));
};

rerenderEntireTree();

store.subscrioe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
