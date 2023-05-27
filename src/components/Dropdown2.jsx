import React from 'react'
import Select from 'react-select'

const Dropdown2 = ({setType,options}) => {

    const handlechange = (selectedOption) => {
        setType(selectedOption.value)
       
     }

  return (
    <>
    <Select options={options}
   
    onChange = {handlechange}
    />
    
    </>
  )
}

export default Dropdown2