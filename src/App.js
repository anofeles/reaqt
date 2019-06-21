import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Header from "./components/Header/Header";


function App(props) {

    let SomeComponent = () => <Dialogs
        onPostCheange={props.onPostCheange}
        newPostText={props.State.profilePage.newPostText}
        addMedages={props.addMedages}
        userDualog={props.State.userDualog}
        userMesages={props.State.userMesages}/>;

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/Profile'} render={()=> <Profile
                        onPostCheange={props.onPostCheange}
                        newPostText={props.State.profilePage.newPostText}
                        profilePage={props.State.profilePage}
                        addPost={props.addPost}/>}/>
                    <Route path={'/Messages'} component={SomeComponent}/>
                    <Route path={'/News'} component={()=><News/>}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
