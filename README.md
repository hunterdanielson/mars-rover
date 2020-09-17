Mars Rovers Coding Challenge

The problem statement
```
NASA intends to land robotic rovers on Mars to explore a particularly curious-looking plateau. The rovers must navigate this rectangular plateau in a way so that their on board cameras can get a complete image of the surrounding terrain to send back to Earth. A simple two-dimensional coordinate grid is mapped to the plateau to aid in rover navigation. Each point on the grid is represented by a pair of numbers X Y which correspond to the number of points East or North, respectively, from the origin. The origin of the grid is represented by 0 0 which corresponds to the southwest corner of the plateau. 0 1 is the point directly north of 0 0, 1 1 is the point immediately east of 0 1, etc. A rover’s current position and heading are represented by a triple X Y Z consisting of its current grid position X Y plus a letter Zcorresponding to one of the four cardinal compass points, N E S W. For example, 0 0 N indicates that the rover is in the very southwest corner of the plateau, facing north.NASA remotely controls rovers via instructions consisting of strings of letters. Possible instruction letters are L, R, and M. L and R instruct the rover to turn 90 degrees left or right, respectively (without moving from its current spot), while M instructs the rover to move forward one grid point along its current heading.Your task is write an application that takes the test input (instructions from NASA) and provides the expected output (the feedback from the rovers to NASA).  Each rover will move in series, i.e. the next rover will not start moving until the one preceding it finishes. 
```

My design was to create a function that has at least three parameters, all parameters are strings, and in order would be: 

- grid size
- rover 1 initial position 
- rover 1 instructions
  
Then it could take in more rover positions and instructions and would continue in the sequence:
- rover 2 initial position
- rover 2 instructions
- rover 3 intial position
- rover 3 instructions
- ....

I assumed that should a rover try to move outside its grid zone, for example if its position is 00S and the instruction is M or grid size is 5x5 and rover position is 55N and instruction is M, then the rover simply would not move and continue to the next command, almost like it was running into a wall

I also assumed that a grid size, rover position, and rover instructions would all be given correctly, meaning as strings and proper formating/capitalization for the respective parameter

Another assumption made is that the output is a series of strings in an array

The application should run with a simple **npm install**, and I wrote tests for the main functionality which can be run with **npm test**
