import React from "react"
import { useState } from "react"

export default function TodoForm({ onAdd }) {

   const [text, setText] = useState('')
   const disabled = text.length === 0 ? true : false


   const onSubmit = (e) => {
       e.preventDefault()
       onAdd(text)
       setText('')
   }
   


    return(
        <form onSubmit={onSubmit}>
         <input 
               type='text'
               value={text}
               onChange={(e)=> setText(e.target.value)}
          />
          <button  disabled={disabled}>add</button>

        </form>
    )
}