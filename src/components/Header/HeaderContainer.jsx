import React, {Component} from 'react'
import * as axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends Component {
    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials: true
        })
            .then(response =>{
                if(response.data.resultCode === 0){
                    let {userId, email, login} = response.data.data;
                    this.props.setAuthUserData(userId, email, login);
                }
            })
    }

    render() {
        return(
      <Header {...this.props} />
        );
    }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
