import { useState } from "react"


export default function Todoitem({ todo, onChange }) {

    const [isFlag, setIsFlag] = useState(true)
    const [dane, setDane] = useState(false)
    
    const clazz = dane ? 'red' : 'green'
   
   return (
    <div>
        {isFlag && <div> 
            <input
                 onChange={e => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }} 
                 type='checkbox' 
                 checked={todo.isCompleted}
             />
             
            <span className={clazz} onClick={() => setDane(!dane)}> {todo.text} </span>


        
            <button onClick={() => setIsFlag(!isFlag)}>X</button>
        </div>}
    </div>
   )

}