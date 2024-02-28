/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../static/Note.css'
import SaveButton from './SaveButton'
import DeleteButton from './DeleteButton'

export function NoteComponent({ data }){

  const [title, setTitle] = useState(data ? data.title : '')
  const [text, setText] = useState(data ? data.text : '')
  const [categories, setCategories] = useState(data ? data.categories : '')
  const [state, setState] = useState(data ? data.state : 'UNARCHIVED')

  const handleChange = (e) => {
    switch (e.target.className.split(' ')[0]){
      case "nt-card-title":
        setTitle(e.target.value)
        break
      case "nt-card-text":
        setText(e.target.value)
        break
      case "nt-card-categories":
        setCategories(e.target.value)
        break
    }
  }

  const handleClick = () => {
    state === 'UNARCHIVED' ? setState('ARCHIVED') : setState('UNARCHIVED')
  }

  const newData = data ? data : {}
  newData.title = title
  newData.text = text
  newData.categories = categories
  newData.state = state
  
  return(
    <section className="nt-card">
      <header className="nt-card-header border-bottom">
        <input className="nt-card-title text bold" 
          placeholder='Title'
          defaultValue={ data ? title : ''}
          onChange={handleChange}
          >
        </input>
        <DeleteButton id={data ? data.id : ''} method={'DELETE'}/>
      </header>
      <textarea className="nt-card-text text border-bottom"
        placeholder='Text'
        defaultValue={ data ? text : ''}
        onChange={handleChange}
      >
      </textarea>
      <footer className="nt-card-footer">
        <input className="nt-card-categories text" 
          placeholder='#categories'
          defaultValue={ data ? categories : ''}
          onChange={handleChange}
          />
        <div className='nt-card-footer-btn'>
          { data
          ? <SaveButton id={data.id} method='PATCH' body={newData}/>
          : <SaveButton method='POST' body={newData}/> 
        }
        { state === 'UNARCHIVED'
          ? <button className='btn-archive btn' onClick={handleClick}>Archive</button>
          : <button className='btn-archive btn' onClick={handleClick}>Unarchive</button>
        }
        </div>
      </footer>
    </section>
  )
}

export default NoteComponent