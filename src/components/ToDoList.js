import TodoItem from "./todoItem"

export default function TodoList({ todos, onChange, onDelete, changeTitle, title }) {


    return (
       <div>
          {todos.map(todo => {
            return <div key={todo.id}>
                       <TodoItem  todo={todo} 
                                  changeTitle={changeTitle}
                                  onDelete={onDelete}
                                  onChange={onChange} />
                    </div>
          })}
       </div>
    )
}