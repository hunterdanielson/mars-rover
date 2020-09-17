import marsInfo from './mars'

describe('mars function tests', () => {
  it('will take a grid size, rover position and heading, and instructions then return new position', () => {
    const gridSize = '55'
    const roverPosition = '12N'
    const instructions = 'LMLMLMLMM'
    const newPosition = marsInfo(gridSize, roverPosition, instructions)
    expect(newPosition).toStrictEqual(['13N'])
  })

  it('will take a grid size, multiple rover position and heading, and multiple instructions then return new positions', () => {
    const gridSize = '55'
    const roverPosition = '12N'
    const instructions = 'LMLMLMLMM'
    const rover2Position = '33E'
    const rover2Instructions = 'MMRMMRMRRM'
    const newPosition = marsInfo(gridSize, roverPosition, instructions, rover2Position, rover2Instructions)
    expect(newPosition).toStrictEqual(['13N', '51E'])
  })
})


