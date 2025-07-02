import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/list'
import GetTables from './components/getTables/getTables'
import GetTable from './components/getTable'
import DigitalClock from './components/DigitalClock'

function App() {
  const [selectedTable, setSelectedTable] = useState(null)

  return (
    <>

      <GetTables onSelectTable={setSelectedTable} />
      <GetTable selectedTable={selectedTable} />
      <DigitalClock />
    </>
  )
}

export default App
