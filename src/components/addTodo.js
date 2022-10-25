
export default function AddTodo({ addTodo, title, changeTitle }) {
   

    const handleAddTodo = (evt) => {
        evt.preventDefault()
        addTodo()
    }
    
    const handleChangeTitle = (evt) => {
        changeTitle(evt.target.value)
    }

    const disabled = title.trim().length === 0 
    

    return(
        <form onSubmit={handleAddTodo}>
            <div>
            <input type='text' onChange={handleChangeTitle} value={title} placeholder='print text' />
            <button className='btn btn-info' disabled={disabled}>Add todo</button>
            </div>
        </form>
    )
}