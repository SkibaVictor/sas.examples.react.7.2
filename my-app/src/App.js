import React from 'react';
import News from './components/news/news.jsx';

function App(props) {
  return (
    <div className="App">
      <section className="container">
        <div className="row">
          <div className="col-12" id="clock_id">
            <News news={props.data.news} 
            orderMessage={props.data.orderMessage}
            orderAsc={props.orderAsc} 
            orderDesc={props.orderDesc}/>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;

