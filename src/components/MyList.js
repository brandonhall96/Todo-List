
import React from 'react';
import '../App.css';
import ListItems from './ListItems';

class MyList extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Things I should stop procrastinating:</h1>
        <ListItems doThis = "Buy Ice Cream" />
        <ul>
          
        </ul>
      </div>
    )
  }
}

export default MyList