let store = {
    _State: {
        profilePage: {
            post: [
                {id: 1, name: "post123", LikeCounts: 11},
                {id: 2, name: "post1", LikeCounts: 15}
            ],
            newPostText: "Add Text"
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
    },
    _callSubscriber() {
        console.log('start')
    },
    addPost() {
        let newPost = {
            id: 5,
            name: this._State.profilePage.newPostText,
            LikeCounts: 0
        };
        this._State.profilePage.post.push(newPost);
        this._State.profilePage.newPostText = '';
        this._callSubscriber();
    },
    onPostCheange(postMessages) {
        this._State.profilePage.newPostText = postMessages;
        this._callSubscriber();
    },
    addMedages() {
        let newPost = {
            id: 6,
            name: this._State.profilePage.newPostText
        };
        this._State.userMesages.push(newPost);
        this._State.profilePage.newPostText = '';
        this._callSubscriber();
    },
    GetState() {
        return this._State
    },
    subscrioe(observer) {
        this._callSubscriber = observer; // pattertn observer (nabludatel)
    }
};
// let rerenderEntireTree = () => {
//     console.log('start')
// }
// let State = {
//     profilePage: {
//         post: [
//             {id: 1, name: "post123", LikeCounts: 11},
//             {id: 2, name: "post1", LikeCounts: 15}
//         ],
//         newPostText: "Add Text"
//     },
//     userDualog: [
//         {id: 1, name: "kakha"},
//         {id: 2, name: "cira"},
//         {id: 3, name: "gabie"},
//         {id: 4, name: "mari"},
//         {id: 5, name: "ruso"}
//     ],
//     userMesages: [
//         {id: 1, name: "hi"},
//         {id: 2, name: "dfgdfs"},
//         {id: 3, name: "gaasdfsadbie"},
//         {id: 4, name: "maasdfasdri"},
//         {id: 5, name: "trhgfhvdbcxv"}
//     ]
// };
// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         name: State.profilePage.newPostText,
//         LikeCounts: 0
//     };
//     State.profilePage.post.push(newPost);
//     State.profilePage.newPostText = '';
//     rerenderEntireTree();
// };
// export const onPostCheange = (postMessages) => {
//     State.profilePage.newPostText = postMessages;
//     rerenderEntireTree();
// };
// export const addMedages = () => {
//     let newPost = {
//         id: 6,
//         name: State.profilePage.newPostText
//     };
//     State.userMesages.push(newPost);
//     State.profilePage.newPostText = '';
//     rerenderEntireTree();
// };
// export const subscrioe = (observer) => {
//     rerenderEntireTree = observer; // pattertn observer (nabludatel)
// }
export default store;
window.state = store;
