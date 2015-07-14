## A Javascript implementation of [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life). ##

<img src="https://lh3.googleusercontent.com/-WbAhWRl-JGo/VaVkTXXmmEI/AAAAAAAAArM/PWLFhunCFa0/s0/gameoflife.tiff" height="300">

This version was created using vanilla Javascript, HTML, and CSS. 

The Game of Life was developed by John Conway in 1970 as a pseudo-simulation of life. It is a simple model which can be used to model complex behavior and is a universal Turing machine.

The game starts with an initial state (you can input one by clicking on cells or generate a random start by clicking the Random button). You can then press Play to automatically generate next states or go through each step manually with the Step button. 

Each state is generated with one of the following rules:

 1. Any live cell with two or three live neighbors lives on to the next
    generation. 
 2. Any live cell with fewer than two live neighbors dies, Any live cell with more than three live neighbors dies, as if by overcrowding. 
 3. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 
Check out the Game of Life at http://seemaullal.github.io/gameoflife/.

