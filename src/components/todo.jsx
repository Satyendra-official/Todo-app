import React, { useState } from "react";
import { Plus, Trash} from 'lucide-react';

const Todo = () => {

    const [text, setText] = useState("")
    const [tasks, setTasks] = useState([])


    const onInputChange = (event) => {
        setText(event.target.value)
        console.log(event.target.value);
    }

    const onEnter = (e) =>{
        if (e.key === 'Enter') {
            if(tasks.includes(text)) {
                alert("Task already exist.")
            }else if(text==""){
                alert("Invalid Input")
            } else {
                console.log(tasks);
                setText("");
                setTasks([...tasks, text]);
                
            }
          }
      
    }
    
    const onSubmit = () => {
        if(tasks.includes(text)) {
            alert("Task already exist.")
        }else if(text==""){
            alert("Invalid Input")
        } else {
            console.log(tasks);
            setText("");
            setTasks([...tasks, text]);
            
        }
        
        console.log(tasks);
    }

    const onDetele = (index) => {
        let remain =  tasks.filter((value, i) => i !== index)
        setTasks(remain)
    }
    
    return (
        <div>
            <div className="top-text">
                <h1>Please Manage Your Task Here</h1>

                <div>
                    
                        <div className="card">
                        <input placeholder="Eenter here" value={text} onKeyDown={onEnter} onChange={onInputChange} className="input-box"  type="text" />
                        <button onClick={onSubmit}  className="btn"><Plus className="icon"/></button>
                        <br /></div>
                        
                    
                    
                        {tasks.map((value, index) => {
                            return <div>
                                <p>{index +1 }. {value} <button onClick={()=>{
                                    onDetele(index)
                                }} 
                                className="del-icon"><Trash /></button></p>
                            </div>
                        })}
                    
                    
                </div>
                
            </div>


        </div>
    )
}

export default Todo;



// sunder todo application - title manage task, card, input, right me +, niche task no k sath p tag use kr k task likho or sath me delete icon, shadow, if(todos.includes(text) {alert(task h)}) else add kho jaye
// optional enter press krne se add ho jaye task onkeypress-> if (event.key == enter) onaddclick-return
// multiple handler ko ek me kese handle kre 