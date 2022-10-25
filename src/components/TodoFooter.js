
export default function Footer({ todos, clearCompleted }) {
    const completedSize = todos.filter(todo => todo.isCompleted).length
    const todoLangth = todos.length

    return(
        <div>
            <span>  {completedSize} / {todoLangth} completed </span>

            <button className='btn btn-info' onClick={clearCompleted}>clear completed</button>
        </div>
    )
}