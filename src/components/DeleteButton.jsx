/* eslint-disable react/prop-types */
export function DeleteButton({id, method}){
  const API_URL = import.meta.env.VITE_API_URL

  const handleClick = async (e) => {
    const url = API_URL + '/' + id
    await fetch(url, {method: method})

    const element = e.target.closest('section')
    element.remove()
  }

  return(
    <button className='nt-card-close-btn' onClick={handleClick}>X</button>
  )
}

export default DeleteButton