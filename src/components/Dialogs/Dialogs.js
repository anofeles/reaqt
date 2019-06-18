import React , {Component} from 'react'
import classes from './Dialogs.module.css'
import DdialogItem from "./DdialogItem/DdialogItem";
import Meddages from "./Meddages/Meddages";


class Dialogs extends Component{
    constructor(props) {
        super(props);
        this.state = { newPostText:props.newPostText, onPostCheange:props.onPostCheange, Dualog: props.userDualog, Mesages: props.userMesages, addMedages: props.addMedages };
    }

    render()
    {
        const userDualog = this.state.Dualog;
        const userMesages = this.state.Mesages;
        let newPostElemnt = React.createRef();
        let addPost = () => {
            let text = this.state.newPostText;
            if(text != ""){
                this.state.addMedages()
            }
        };
        let onPostCheange = () => {
            let text = newPostElemnt.current.value;
            this.state.onPostCheange(text)
        };
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>
                    {userDualog.map(el => (<DdialogItem key={el.id} data_id={el.id} data_name={el.name}/>))}
                </div>
                <div className={classes.messages}>
                    {userMesages.map(el => (<Meddages key={el.id} name={el.name} />))}
                    <div className={classes.post}>
                        <div>
                            <textarea onChange={onPostCheange} ref={newPostElemnt} value={this.state.newPostText}/>
                        </div>
                        <div>
                            <button onClick={addPost}>Add</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Dialogs;
