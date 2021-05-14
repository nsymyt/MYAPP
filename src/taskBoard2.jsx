import React, { useState } from 'react';

const TaskBoard2 = () => {
  const [taskList, setTaskList] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = e =>{
    const newValue = e.target.value;
    setValue(newValue);
    setValue(e.target.value);
  }

  const addTask = () =>{
    const newTask = [...taskList, value];
    setTaskList(newTask);
    setValue("")
  }

  return(
    <div>
      <div>
        <h1>タスクリスト</h1>
        <input type="text" value={value} onChange={e => handleChange(e)}/>
        <button onClick={addTask}>追加</button>  
        {/* <p>{this.state.value}</p> */}
      </div>  
      <div>
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>  
      </div> 
    </div>
  )
}

// class taskBoard2 extends React.Component{
//   constructor() {
//     super()
//     this.state ={
//       taskList: [],
//       value: "",
//     }
//   }
//   handleChange(e) {
//     this.setState({value: e.target.value})
//   }

//   addTask(){
//     this.setState({
//       taskList: this.state.taskList.concat(this.state.value)
//     })
//   }
//   render() {
//     return(
//       <div>
//         <div>
//           <h1>タスクリスト</h1>
//           <input type="text" value={this.state.value} onChange={e => this.handleChange(e)}/>
//           <button onClick={() => this.addTask()}>追加</button>  
//           {/* <p>{this.state.value}</p> */}
//         </div>  
//         <div>
//           <ul>
//             {this.state.taskList.map((task, index) => (
//               <li key={index}>{task}</li>
//             ))}
//           </ul>  
//         </div> 
//       </div>
//     )
//   }
// }

export default TaskBoard2;