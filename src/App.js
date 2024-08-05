import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import React, {useState} from 'react';

function App() {
  const onDelete =(todo)=>{
    console.log("I am ondelete",todo);
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const[todos , setTodos]=useState( [
    {
      sno : 1,
      title : "Go to the market.",
      desc : "You need to go to the market to get this job done."
    },
    {
      sno : 2,
      title : "Go to the mall.",
      desc : "You need to go to the mall to get this job done."
    },
    {
      sno : 3,
      title : "Go to the ghat.",
      desc : "You need to go to the ghat to get this job done."
    }
  ]);
  return (
    <>
    <Header title = "My Todo List" searchBar={false}/>
    <AddTodo/>
    <Todos todos = {todos} onDelete={onDelete}/>
    <Footer/>
</>
  );
}

export default App;
