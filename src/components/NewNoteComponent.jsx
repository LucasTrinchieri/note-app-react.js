import { useState } from 'react'
import '../static/NewNote.css'
import NoteComponent from "./NoteComponent.jsx"

export function NewNoteComponent(){
  const [isCreating, setIsCreating] = useState(false)
  const buttonHandler = () => {
      setIsCreating(!isCreating)
  }

  return(
    <>
      { isCreating ? <NoteComponent /> : <></>}
      <button onClick={buttonHandler} className="nt-new-note" >
        { isCreating ? '-' : '+' }
      </button>
    </>
  )
}

export default NewNoteComponent