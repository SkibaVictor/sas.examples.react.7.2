import React from 'react';
import NewsItem from '../newsItem/newsItem';
import { orderAscActionCreator, orderDescActionCreator } from '../../store/store';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.sortNewsAsc = this.sortNewsAsc.bind(this);
    this.sortNewsDesc = this.sortNewsDesc.bind(this);
  }
  sortNewsAsc() {
    this.props.dispatch(orderAscActionCreator());
  }
  sortNewsDesc() {
    this.props.dispatch(orderDescActionCreator());
  }
  render() {
    return (
      <div className="mt-3">
        <h3>Fresh news
          <button className="btn bt-sm btn-primary ml-2 mr-2" 
          onClick={this.sortNewsAsc}>Sort asc</button>
          <button className="btn bt-sm btn-primary" 
          onClick={this.sortNewsDesc}>Sort desc</button>
        </h3><em>{this.props.orderMessage}</em>
        <div className="list-group">
          {this.props.news.map((value) => {
              return <NewsItem title={value.title} 
              content={value.content} 
              likes={value.likes} 
              key={value.id} />})
          }
        </div>
      </div>)
  }
}

export default News;

