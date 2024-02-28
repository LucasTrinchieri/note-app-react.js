/* eslint-disable react/prop-types */

export function SaveButton({id, method, body}){

  const API_URL = id ? import.meta.env.VITE_API_URL + '/' + id : import.meta.env.VITE_API_URL
  
  const handleSave = async () => {
    await fetch(API_URL, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  return(
    <button className='nt-save-botton btn' onClick={handleSave}>
        Save
    </button>
  )
}

export default SaveButton