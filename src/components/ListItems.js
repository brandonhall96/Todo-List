import React, {Component} from 'react';
import '../App.css';
import MyList from './MyList';





class ListItems extends React.Component {
  render() {
    return (
      <div className="App">
        <li> {this.props.doThis} </li>
        </div>
      
    )
  }
}









export default ListItems;