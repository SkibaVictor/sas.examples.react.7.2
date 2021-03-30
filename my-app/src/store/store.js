let store = {
    _state: {
        news: [
            { id: 1, title: "First news", content: "First item content", likes: 2 },
            { id: 2, title: "Second news", content: "Second item content", likes: 4 },
            { id: 3, title: "Third news", content: "Third item content", likes: 223 },
            { id: 4, title: "Fourth news", content: "Fourth item content", likes: 12 }
        ],
        orderMessage: "Not ordered"
    },
    orderAsc() {
        this._state.news.sort((a, b) => (a.likes > b.likes) ? 1 : -1);
        this._state.orderMessage = "Ordered ascending";
        this.notifySubscriber();
    },
    orderDesc() {
        this._state.news.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
        this._state.orderMessage = "Ordered descending";
        this.notifySubscriber();
    },
    getState() {
        return this._state;
    },
    notifySubscriber() { console.log("Nobody subsribed") },
    subscribe(observer) {
        this.notifySubscriber = observer;
    }
}
window.store = store;
export default store;

