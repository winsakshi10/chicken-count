import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import DishOptions from '../utils/DishOptions'
import Dropdown from './Dropdown'
import Dropdown2 from './Dropdown2'

const frequencyOptions = [ 
    { label: 'Daily', value: "daily"  },
    { label: 'Weekly', value: "weekly"  },
    { label: 'Monthly', value: "monthly"  },
    { label: 'Yearly', value: "yearly" },
]

const timeOptions =[
    { label: 'Months', value: "months"},
    { label: 'Years', value: "years"}
]

// const Chickform = () => {
// const [name,setName] = useState("")
// const [type,setType] = useState("biryani")
// const [weight,setWeight] = useState(0)
// const [frequency,setFrequency] = useState(0)
// const [frequencyType,setFrequencyType] = useState("")
// const [timePeriod,setTimePeriod] = useState(0)
// const [timePeriodType,setTimePeriodType] = useState("")
// const [dishes, setDishes] = useState([]);
// const [totalValues, setTotalValues] = useState([]);

// const navigate = useNavigate()

// //handle change function 
// const handleChange = (e) => {
//     setName(e.target.value)
// }

// const handleChangeF =(e) =>{
//     setFrequency(e.target.value)
// }

// const handleChangeT =(e) =>{ 
//     setTimePeriod(e.target.value)
// }

// const handleAddDish = (e) => { 
//     e.preventDefault()

//     const conversionFactors = {
//         daily: {
//           years: 7 * 30 * 12,
//           months: 7 * 30,
//         },
//         weekly: {
//           years: 54,
//           months: 4.5,
//         },
//         monthly: {
//           years: 12,
//           months: 1,
//         },
//         yearly: {
//           years: 1,
//           months: 1 / 12,
//         },
//       };
      
//       let newTotal = 0;
      
//       if (conversionFactors.hasOwnProperty(frequencyType) && conversionFactors[frequencyType].hasOwnProperty(timePeriodType)) {
//         const conversionFactor = conversionFactors[frequencyType][timePeriodType];
//         newTotal = frequency * conversionFactor * timePeriod;
//       }

//       // Saving the Dish 
//       const dish = {
//         name,
//         type,
//         weight,
//         frequency,
//         frequencyType,
//         timePeriod,
//         timePeriodType,
//       };

//       setDishes((prevDishes) => [...prevDishes, dish]);
//       const totalValuePerDish = (newTotal * weight) / 1500;
//       setTotalValues((prevTotalValues) => [...prevTotalValues, totalValuePerDish]);

//       //Resetting the form 
//       setName("");
//       setType("biryani");
//       setWeight(0);
//       setFrequency(0);
//       setFrequencyType("");
//       setTimePeriod(0);
//       setTimePeriodType("");
// }
// const handleSubmit = (e) => {
//   e.preventDefault();

//   // handleAddDish();

//   navigate('/chicken-eaten',{state : { totalValues}})
// };


//   return (
//     <div className='flex justify-center items-center mx-auto '>
//         <form action="submit" className='bg-white m-10 mt-20 p-8' onSubmit={handleSubmit}>
//           <p className='font-sans text-black  text-xl font-semibold flex justify-center my-4'>Fill out the form below</p>
//           <div className='flex items-center my-5'>
//             <label htmlFor="name" className='text-md font-sans font-medium'>Name</label>
//             <input type="text"
//             placeholder="Name"
//             value={name}
//             name="name"
//             className=' text-black placeholder:text-gray-400 border  border-gray-400 rounded-md m-4 p-2 w-full'
//             onChange={handleChange}
//             />
//             </div>
//             <div className='flex items-center my-5'>
//             <label htmlFor="dish" className='text-md font-sans font-medium'>Select your Dish</label>
//             <Dropdown setType={setType} options = {DishOptions} setWeight={setWeight} />
//             </div>
            
//             <div className='flex items-center my-5'>
//             <label htmlFor="frequency" className='text-md font-sans font-medium'>How many times do you eat this Dish?</label>
//             <input type="number"
//             placeholder="Enter Frequency"
//             value={frequency}
//             name="Frequency"
//             className=' text-black placeholder:text-gray-400 border  border-gray-400 rounded-md m-4 p-2 w-full'
//             onChange={handleChangeF} />

//             <Dropdown2 setType={setFrequencyType} options = {frequencyOptions} />
//             </div>

//             <div className='flex items-center my-5'>
//             <label htmlFor="timePeriod" className='text-md font-sans font-medium'>Since how long you have been eating?</label>
//             <input type="number"
//             placeholder="Enter Time Period"
//             value={timePeriod}
//             name="Time Period"
//             className=' text-black placeholder:text-gray-400 border  border-gray-400 rounded-md m-4 p-2 w-full'
//             onChange={handleChangeT} />

//             <Dropdown2 setType={setTimePeriodType} options = {timeOptions} />
//             </div>
//             <div className='flex justify-center items-center gap-2'>
//             <button type="button" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md "
//             onClick={handleAddDish}
//             >Add another Dish</button> 
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md "
            
//             >Submit</button>
//             </div>
            
//         </form>
//     </div>
//   )
// }

// export default Chickform

const Chickform = () => {
  const [dishes, setDishes] = useState([
    {
      name: "",
      type: "",
      weight: 0,
      frequency: 0,
      frequencyType: "",
      timePeriod: 0,
      timePeriodType: "",
    },
  ]);
  const [totalValues, setTotalValues] = useState([]);

  const navigate = useNavigate();

  const handleChange = (index, field, value) => {
    setDishes((prevDishes) => {
      const newDishes = [...prevDishes];
      newDishes[index][field] = value;
  
      if (field === 'type') {
        newDishes[index].weight = DishOptions.find((option) => option.value === value)?.weight || 0;
      }
  
      return newDishes;
    });
    console.log(dishes)
  };

  const handleAddDish = (e) => {
    e.preventDefault();

    setDishes((prevDishes) => [
      ...prevDishes,
      {
        name: "",
        type: "biryani",
        weight: 0,
        frequency: 0,
        frequencyType: "",
        timePeriod: 0,
        timePeriodType: "",
      },
    ]);
  };

  useEffect(() => {
    if (totalValues.length > 0) {
      navigate("/chicken-eaten", { state: { totalValues } });
    }
  }, [navigate, totalValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const conversionFactors = {
      daily: {
        years: 7 * 30 * 12,
        months: 7 * 30,
      },
      weekly: {
        years: 54,
        months: 4.5,
      },
      monthly: {
        years: 12,
        months: 1,
      },
      yearly: {
        years: 1,
        months: 1 / 12,
      },
    };
  
    const newTotalValues = dishes.map((dish) => {
      let newTotal = 0;
      if (
        conversionFactors.hasOwnProperty(dish.frequencyType) &&
        conversionFactors[dish.frequencyType].hasOwnProperty(dish.timePeriodType)
      ) {
        const conversionFactor = conversionFactors[dish.frequencyType][dish.timePeriodType];
        newTotal = dish.frequency * conversionFactor * dish.timePeriod;
      }
  
      return (newTotal * dish.weight) / 1500;
    });
  
    setTotalValues(newTotalValues);
  
    navigate('/chicken-eaten', { state: { totalValues: newTotalValues } });
  };
  

  return (
    <div className="flex justify-center items-center mx-auto ">
      <form action="submit" className="bg-white m-10 mt-20 p-8" onSubmit={handleSubmit}>
        <p className="font-sans text-black  text-xl font-semibold flex justify-center my-4">
          Fill out the form below
        </p>

        {dishes.map((dish, index) => (
  <div key={index}>
    {index === 0 && (
      <div className="flex items-center my-5">
        <label htmlFor="name" className="text-md font-sans font-medium">
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          value={dish.name}
          name="name"
          className="text-black placeholder:text-gray-400 border border-gray-400 rounded-md m-4 p-2 w-full"
          onChange={(e) => handleChange(index, "name", e.target.value)}
        />
      </div>
    )}

    <div className="flex items-center my-5">
      <label htmlFor={`dish${index}`} className="text-md font-sans font-medium">
        Select your Dish
      </label>
      {/* <Dropdown setType={(value) => handleChange(index, "type", value)} options={DishOptions} /> */}
      <Dropdown
                options={DishOptions}
                setWeight={(weight) => handleChange(index, 'weight', weight)}
              />
    </div>

    <div className="flex items-center my-5">
      <label htmlFor={`frequency${index}`} className="text-md font-sans font-medium">
        How many times do you eat this Dish?
      </label>
      <input
        type="number"
        placeholder="Enter Frequency"
        value={dish.frequency}
        name={`frequency${index}`}
        className="text-black placeholder:text-gray-400 border border-gray-400 rounded-md m-4 p-2 w-full"
        onChange={(e) => handleChange(index, "frequency", e.target.value)}
      />

      <Dropdown2 setType={(value) => handleChange(index, "frequencyType", value)} options={frequencyOptions} />
    </div>

    <div className="flex items-center my-5">
      <label htmlFor={`timePeriod${index}`} className="text-md font-sans font-medium">
        Since how long have you been eating this Dish?
      </label>
      <input
        type="number"
        placeholder="Enter Time Period"
        value={dish.timePeriod}
        name={`timePeriod${index}`}
        className="text-black placeholder:text-gray-400 border border-gray-400 rounded-md m-4 p-2 w-full"
        onChange={(e) => handleChange(index, "timePeriod", e.target.value)}
      />

      <Dropdown2 setType={(value) => handleChange(index, "timePeriodType", value)} options={timeOptions} />
    </div>
  </div>
))}


        <div className="flex justify-center items-center gap-2">
          <button
            type="button"
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md "
            onClick={handleAddDish}
          >
            Add another Dish
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chickform;
