import { useState } from 'react'
import Hero from './Hero.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    
<div className="components">
  <Hero />

</div>
  )
}

export default App
