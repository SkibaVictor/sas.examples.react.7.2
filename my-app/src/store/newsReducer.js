const ORDER_ASC = "ORDER_ASC";
const ORDER_DESC = "ORDER_DESC";
const ADD_NEWS = "ADD_NEWS";
const UPDATE_NEWS_DATA = "UPDATE_NEWS_DATA";

const newsReducer = (state, action) => {
    console.log("reducer was called!");
    switch (action.type) {
        case ORDER_ASC:
            state.news.sort((a, b) => (a.likes > b.likes) ? 1 : -1);
            state.orderMessage = "Ordered ascending";
            break;
        case ORDER_DESC:
            state.news.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
            state.orderMessage = "Ordered descending";
            break;
        case ADD_NEWS:
            var id = Math.max.apply(Math,
                state.news.map(function (item) { return item.id; }));
            id += 1;
            state.news.push({
                id: id,
                title: state.newsAddData.title,
                content: state.newsAddData.content,
                likes: 0
            });
            state.newsAddData.title = "";
            state.newsAddData.content = "";
            break;
        case UPDATE_NEWS_DATA:
            state.newsAddData.title = action.title;
            state.newsAddData.content = action.content;
            break;
    }
    return state;
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
export default newsReducer;

