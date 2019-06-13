import {rerenderEntireTree} from "../render";

let State = {
    profilePage: {
        post: [
            {id: 1, name: "post123", LikeCounts: 11},
            {id: 2, name: "post1", LikeCounts: 15}
        ]
    },
    userDualog: [
        {id: 1, name: "kakha"},
        {id: 2, name: "cira"},
        {id: 3, name: "gabie"},
        {id: 4, name: "mari"},
        {id: 5, name: "ruso"}
    ],
    userMesages: [
        {id: 1, name: "hi"},
        {id: 2, name: "dfgdfs"},
        {id: 3, name: "gaasdfsadbie"},
        {id: 4, name: "maasdfasdri"},
        {id: 5, name: "trhgfhvdbcxv"}
    ]
};


export let addPost = (postMessages) => {

    let newPost = {
        id: 5,
        name: postMessages,
        LikeCounts: 0
    };
    State.profilePage.post.push(newPost);
    rerenderEntireTree(State);
};


export default State;
