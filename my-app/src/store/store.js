const ORDER_ASC = "ORDER_ASC";
const ORDER_DESC = "ORDER_DESC";
const ADD_NEWS = "ADD_NEWS";
const UPDATE_NEWS_DATA = "UPDATE_NEWS_DATA";
let store = {
    _state: {
        news: [
            { id: 1, title: "First news", content: "First item content", likes: 2 },
            { id: 2, title: "Second news", content: "Second item content", likes: 4 },
            { id: 3, title: "Third news", content: "Third item content", likes: 223 },
            { id: 4, title: "Fourth news", content: "Fourth item content", likes: 12 }
        ],
        orderMessage: "Not ordered",
        newsAddData: {
            title : "",
            content : ""
        }
    },
    _notifySubscriber() {
        console.log("Nobody subsribed")
    },
    _orderAsc() {
        this._state.news.sort((a, b) => (a.likes > b.likes) ? 1 : -1);
        this._state.orderMessage = "Ordered ascending";
        this._notifySubscriber();
    },
    _orderDesc() {
        this._state.news.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
        this._state.orderMessage = "Ordered descending";
        this._notifySubscriber();
    },
    _addNews(){
        var id = Math.max.apply(Math,
            this._state.news.map(function (item) { return item.id; }));
        id += 1;
        this._state.news.push({
            id : id,
            title : this._state.newsAddData.title,
            content : this._state.newsAddData.content,
            likes : 0
        });
        this._state.newsAddData.title = "";
        this._state.newsAddData.content = "";
        this._notifySubscriber();
    },
    _updateNewsData(title, content){
        this._state.newsAddData.title = title;
        this._state.newsAddData.content = content;
        this._notifySubscriber();
    },
    dispatch(action) {
        console.log("dispatcher was called!");
        if (action.type === ORDER_ASC) {
            this._orderAsc();
        }
        else if (action.type === ORDER_DESC) {
            this._orderDesc();
        }
        else if (action.type === ADD_NEWS) {
            this._addNews();
        }
        else if (action.type === UPDATE_NEWS_DATA){
            this._updateNewsData(action.title, action.content);
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._notifySubscriber = observer;
    }
}

export function orderAscActionCreator() {
    return { type: ORDER_ASC }
}
export function orderDescActionCreator() {
    return { type: ORDER_DESC }
}
export function addNewsActionCreator() {
    return { type: ADD_NEWS }
}
export function updateNewsDataActionCreator(title, content) {
    return {
        type: UPDATE_NEWS_DATA,
        title: title,
        content: content
    }
}

window.store = store;
export default store;

