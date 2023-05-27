import React from 'react'
import Select from 'react-select'

const Dropdown = ({options,setWeight}) => {

  const handleSelect = (selectedOption) => {
    if (selectedOption) {
      const { value, weight } = selectedOption;
      setWeight(weight);
    } else {
      setWeight(0);
    }
  };

  return (
    <>
    <Select options={options}
    className=' text-black placeholder:text-gray-400 border  border-gray-400 rounded-md m-4 p-2 w-full' 
    onChange={handleSelect}
    />
    
    </>
  )
}

export default Dropdown