
export default function TodoFooter({ todos, clearIscompleted }) {

    const completedSize = todos.filter(elem => elem.isCompleted).length

    return (
     <div>
         <span> {completedSize} / {todos.length} completed </span>
         <button onClick={clearIscompleted}>clear completed</button>
     </div>
    )
 
 }