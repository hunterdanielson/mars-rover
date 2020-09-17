import React, { useState } from 'react'
import marsInfo from './mars'

const App = () => {
  const [gridSize, setGridSize] = useState<string>('55')
  const [positionInput, setPositionInput] = useState<string>('')
  const [instructionsInput, setInstructionsInput] = useState<string>('')
  const [nasaInfo, setNasaInfo] = useState<Array<string>>([])
  const handleClick = () => {
    setNasaInfo(marsInfo(gridSize, positionInput, instructionsInput))
  }

  return (
    <div>
      <h1>Mars Rover</h1>

      <h3>Set grid size</h3>
      <input
        type='text'
        placeholder='55'
        onChange={(e: any) => setGridSize(e.target.value)}
      />
      <h3>Set Rover initial position and heading</h3>
      <input
        type='text'
        placeholder='00N'
        onChange={(e: any) => setPositionInput(e.target.value)}
      />
      <h3>Set rover instructions</h3>
      <input
        type='text'
        placeholder='LRMRM'
        onChange={(e: any) => setInstructionsInput(e.target.value)}
      />
      <h3>Send the data</h3>
      <button onClick={handleClick}>Confirm</button>
      <h3>New Rover Coordinates</h3>
      {
        nasaInfo.map(rover => <p key={rover}>{rover}</p>)
      }
    </div>
  )
}

export default App
