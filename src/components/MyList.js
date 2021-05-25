
import React from 'react';
import '../App.css';
import ListItems from './ListItems';

class MyList extends React.Component {
  render() {

    let todoTasks = this.props.taskList.map((item, index) => (
      <ListItems doThis={item} key={'todo' + index} />
    ))
    return (
      <div id="maindiv">
        <h1 id="tasklist"> Things I should stop procrastinating:</h1>
        <ul>
          {todoTasks}
        </ul>
      </div>
    )
  }
}


export default MyList