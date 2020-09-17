const marsInfo = (gridSize: string, startingPosition: string, instructions: string, ...args: Array<string>) => {
  let numberOfExtraRovers = args.length / 2;

  const maxX = Number(gridSize.split('')[0])
  const maxY = Number(gridSize.split('')[1])

  let result = []

  let currentPositionX = Number(startingPosition.split('')[0])
  let currentPositionY = Number(startingPosition.split('')[1])
  let heading = startingPosition.split('')[2]

  const possibleHeadings = ['N', 'W', 'S', 'E']
  let instructionsArray = instructions.split('')
  let directionIndex = possibleHeadings.indexOf(heading)
  for (let roverNumber = 0; roverNumber <= numberOfExtraRovers; roverNumber++) {
    for (let i = 0; i < instructionsArray.length; i++) {
      switch (instructionsArray[i]) {
        case 'R':
          directionIndex = (directionIndex + 4 - 1) % 4;
          break;
        case 'L':
          directionIndex = (directionIndex + 1) % 4;
          break;
        case 'M':
          if (directionIndex === 0) {
            if (currentPositionY < maxY) {
              currentPositionY++;
            }
          } else if (directionIndex === 1) {
            if (currentPositionX > 0) {
              currentPositionX--;
            }
          } else if (directionIndex === 2) {
            if (currentPositionY > 0) {
              currentPositionY--;
            }
          } else {
            if (currentPositionX < maxX) {
              currentPositionX++;
            }
          }
      }

      // on the last calculation of a instruction push a rovers info to result array
      // then set if there are more rovers set info to next rover info
      if (i === instructionsArray.length - 1) {
        const newHeading = possibleHeadings[directionIndex]
        result.push(`${currentPositionX}${currentPositionY}${newHeading}`)
        const nextRover = roverNumber * 2
        if (nextRover < numberOfExtraRovers) {
          currentPositionX = Number(args[nextRover]?.split('')[0])
          currentPositionY = Number(args[nextRover]?.split('')[1])
          heading = args[nextRover]?.split('')[2]
          directionIndex = possibleHeadings.indexOf(heading)
          instructionsArray = args[nextRover + 1]?.split('')

        }
        i++;
      }
    }
  }

  return result;
}

export default marsInfo;