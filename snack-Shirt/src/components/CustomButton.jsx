import React from 'react'
import state from '../store'


const CustomButton = ({type, title, customStyles, handleClick}) => {
    const generateStyle = (type) => {
        if(type === 'filled') {
            return {
                backgroundColor: snapshot.color,
                color: '#fff'
            }
        }   
    }
  return (
    <button className={`px-3 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}>
        {title}
      
    </button>
  )
}

export default CustomButton
