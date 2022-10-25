import {useState} from 'react'

export default function TodoItem({ todo, todo: { id, title, isCompleted }, onDelete, onChange, changeTitle }) {
    
    const [isFlag, setIsFlag] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const handleDelete = () => {
        onDelete(id)
    }
    
    const handleChange = () => {
        onChange({...todo, isCompleted: !isCompleted})
    }

    const handleChangeTitle = (evt) => {
        setNewTitle(evt.target.value)
    }
    


    return(
        <div className="form-check">
           <input className='class="form-check-input"' type='checkbox' checked={isCompleted} onChange={handleChange} />

           { 
            isFlag ? 
              <>
                <input type='text' onChange={handleChangeTitle} value={newTitle} />
                <button className='btn btn-outline-secondary' onClick={() => setIsFlag(false)}>adding</button>
              </>
              :
              <>
                <span onClick={() => setIsFlag(true)}> {newTitle || title } </span>
                <button className='btn btn-outline-secondary' onClick={handleDelete}> X </button>
              </>
           }
            
        </div>
    )
}