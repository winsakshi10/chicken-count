import { useState } from 'react'
import { BrowserRouter,Routes, Route, Link, useLocation} from 'react-router-dom'
import './App.css'
import FirstSection from './components/FirstSection'
import Header from './components/Header'
import Chickform from './components/Chickform'
import Home from './components/Home'
import Form from './components/Form'
import ChickenEaten from './components/ChickenEaten'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
    <Header />
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/quiz" element={<Form />} />
      <Route path ="/chicken-eaten" element={<ChickenEaten />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
