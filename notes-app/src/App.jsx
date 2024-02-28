import { useFetch } from "./customHooks/useFetch.js"
import NoteComponent from "./components/NoteComponent.jsx"
import './static/App.css'
import { useState } from "react"
import NewNoteComponent from "./components/NewNoteComponent.jsx"

export function App(){
  let API_URL = import.meta.env.VITE_API_URL

  const [filterState, setFilterState] = useState('UNARCHIVED')

  const handleClick = () => {
    if(filterState === 'UNARCHIVED'){
      setFilterState('ARCHIVED')
    }else{
      setFilterState('UNARCHIVED')
    }
  }

  if(filterState === 'UNARCHIVED'){
    API_URL += '?archived=UNARCHIVED'
  }

  if(filterState === 'ARCHIVED'){
    API_URL += '?archived=ARCHIVED'
  }

  const {data} = useFetch(API_URL)

  return(
    <>  
      <div>
        {
          filterState === 'ARCHIVED'
          ? <button className="btn-archived btn" onClick={handleClick}>UNARCHIVED</button>
          : <button className="btn-unarchived btn" onClick={handleClick}>ARCHIVED</button>
        }
      </div>
      { data?.map((data) => {
          return (
            <NoteComponent
            key={ data.id }
            data = {data}
            />
          )
        }
      )}
      <NewNoteComponent />
    </>
  )
}

export default App
