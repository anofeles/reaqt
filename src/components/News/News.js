import React,{Component} from 'react'
import classes from './News.module.css'
import axios from "axios";


class News extends Component{
    state = {
        imageURL: '',
        Jsonlink: ''
    };

    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                this.setState({ imageURL: response.data.message });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { imageURL } = this.state;
        return (
            <div>
                <img src={imageURL} />
            </div>
        );
    }
}

export default News;
