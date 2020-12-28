import React, {useState} from 'react';
import ToDoLists from './ToDo'
const App =() =>{
    const[list,setList] = useState();
    const[item,setitem] = useState([]);
    
    const inputEvent = (event) =>{
        setList(event.target.value);
    }
    const deleteItem = (id) =>{
       setitem((oldItems) =>{
           return oldItems.filter((arr,index) =>{
               return index !==id;
           })
       })
    }
     const theList = () =>{
        if(list === ""){
            alert("Please Input Somethings")
        }
        else{
        setitem((oldItems) =>{
            return [...oldItems,list]
        })
        setList("");
    }
    }

     return (
        <React.Fragment>
            <div className = "main_div">
             <div className = "center_div">
            <br></br>
            <h1>ToDo List</h1>
            <br></br>

            <input type="text" placeholder="Add To Do Item" 
             onChange={inputEvent}
             value={list}
             ></input>
            <button onClick={theList}> + </button>

            <ol>
              {item.map((cur, index) =>{
                 return <ToDoLists key={index} 
                 text={cur} id={index}
                 onSelect={deleteItem}
                 
                 />
                      
                  
              } )}
            </ol>
            </div>
            </div>
        </React.Fragment>
    )
  

}
export default App;
