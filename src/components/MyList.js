
// import React, { Component } from 'react';
// import '../App.css';
// import ListItems from './ListItems';
// import '../index';

// class MyList extends React.Component {
//   // state = {
//   //   allTask: [...this.props.toDos.allTask]
//   // }

//   constructor (props) {
//     super()
//     this.state = {
//       allTask: props.toDos.allTask
//     }
//   }

// clearAllList = () => {
  
//   this.setState({
//     allTask: []
//   })
// }

// newTaskAdd = (e) => {
//   e.preventDefault()
//   this.setState({
//     newTask: [newTaskCopy]
//   })
// }





//   render() {

    

//     <form>
//     <input type="text"
//      placeholder="Type an item here"
//      onChange={(e) => this.newTaskAdd(e)}
//      value={this.state.newTask}
//     />
//     <button onClick={(e) => this.addItem(e)}>Add it!</button>
//   </form>

//     let everyTaskToDo = this.state.allTask.map((task, idx) => {
//       return <li key={idx}>{task}</li>
//   })
//   //   let newTasks = this.state.allTask.map((task, idx) => {
//   //     return <li key={idx}>{task}</li>
//   // })


//     return (
//       <div id="maindiv">
//         <h1 id="tasklist"> Things I should stop procrastinating:</h1>
//         <button onClick={this.newTaskAdd}>Add Task</button>
//         <ul>
//           {everyTaskToDo}
//         </ul>
//         <button onClick={this.clearAllList}>Clear Tasks</button>
//       </div>
//     )
//   }
// }


// export default MyList

import React, {Component} from 'react';
import '../App.css';

class MyList extends Component {
  state = {
    allTask: this.props.toDos.allTask

  }

  clearAllTasks = () => {
    this.setState({
      allTask: []
    })
  }

  newTaskCreate = (e) => {
    this.setState({
      newTask: e.target.value
    }) 
  }


  addNewTask = (e) => {
    e.preventDefault();
     // stops the form from re-rendering
    
    let addedTask = this.state.allTask
    // create new variable that holds an instance of toDoItemArray
    addedTask.push(this.state.newTask);
    // pushes the instance of newitem into addedItem
    this.setState({
      allTask: addedTask,
      // sets value of 'toDoItemArray' to 'addedItem'
      newTask: '',
      // set 'newItem' back of an empty string.
  })
  }






  render() {
    let allMyTasks = this.state.allTask.map((task, idx) => {
      return <li key={idx}>{task}</li>
  })

    return(
      <div className="App">
      <header>
        <h1 id='listnameh1'>Things i need todo</h1>
        <form id='additemform'>
          <input type="text"
          placeholder="Type an item here"
          onChange={(e) => this.newTaskCreate(e)}
          value={this.newTask}
          />
          <button onClick={(e) => this.addNewTask(e)}>Add it!</button>
      </form>
  
        <ul>
        {allMyTasks}
        </ul>
        <button onClick={this.clearAllTasks}>Clear Tasks</button>
         
      

      </header>
    </div>



    );
  }
}

export default MyList;





