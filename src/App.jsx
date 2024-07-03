import { useState } from 'react'

import './App.css'
import CovidData from './components/CovidData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><CovidData/></div>
    </>
  )
}

export default App
