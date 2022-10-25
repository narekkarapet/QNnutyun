import Todoitem from "./TodoItem"


export default function TodoList({ todos, onChange }) {

    
    return(
        <div>
            {
              todos.map((todo) => {
                 return  <Todoitem key={todo.id} onChange={onChange}  todo={todo} />
              })
            }
        </div>
    )
}