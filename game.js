function GameOfLife(width,height) {
 this.width = width;
 this.height = height;
 this.running = false;
}

GameOfLife.prototype.createAndShowBoard = function () {
 // create <table> element
 var goltable = document.createElement("tbody");
 
 // build Table HTML
 var tablehtml = '';
 for (var h=0; h<this.height; h++) {
   tablehtml += "<tr id='row+" + h + "'>";
   for (var w=0; w<this.width; w++) {
     tablehtml += "<td data-status='dead' id='" + w + "-" + h + "'></td>";
   }
   tablehtml += "</tr>";
 }
 goltable.innerHTML = tablehtml;
 
 // add table to the #board element
 var board = document.getElementById('board');
 board.appendChild(goltable);
 
 // once html elements are added to the page, attach events to them
 this.setupBoardEvents();
};

GameOfLife.prototype.setupBoardEvents = function() {
 
 var onCellClick = function (e) {
   // coordinates of cell, in case you need them
   var coord_array = this.id.split('-');
   var coord_hash = {x: coord_array[0], y: coord_array[1]};
   
   // how to set the style of the cell when it's clicked
   if (this.getAttribute('data-status') == 'dead') {
     this.className = "alive";
     this.setAttribute('data-status', 'alive');
   } else {
     this.className = "dead";
     this.setAttribute('data-status', 'dead');
   }
 };
 

 var cells = document.getElementsByTagName("TD");
 for (var i=0; i<cells.length; i++) {
   cells[i].onclick = onCellClick;
 }

 document.getElementById('step').onclick = this.step.bind(this);
 document.getElementById('autoplay').onclick = this.enableAutoPlay.bind(this);
 document.getElementById('clear').onclick = this.clear.bind(this);
 document.getElementById('reset').onclick = this.reset.bind(this);
 // var cell00 = document.getElementById('0-0');
 // cell00.onclick = onCellClick;
};

GameOfLife.prototype.step = function () {
  console.log("step function called");
 var cells = document.getElementsByTagName("TD");
 var toChange = [ ]; //should the status change or not
 var somethingChanged = false;
 for (var i=0; i<cells.length; i++) {
    var aliveNeighbors = this.getNeighborStatus(cells[i].id);
    if (cells[i].getAttribute('data-status') == 'alive') {
      if (aliveNeighbors < 2 || aliveNeighbors > 3) {
         toChange.push(true);
         somethingChanged = true;
       }
       else {
        toChange.push(false);
       }
    }
    else {
      if (aliveNeighbors === 3) {
         toChange.push(true)
         somethingChanged = true;
      }
      else {
        toChange.push(false);
      }
    }
}

  if (!somethingChanged) {
      interval = clearInterval(interval);
  }

  for (var i=0; i<cells.length; i++) {
    if (toChange[i]) {
      if (cells[i].getAttribute('data-status') == 'dead') {
        cells[i].className = "alive";
        cells[i].setAttribute('data-status', 'alive');
      } 
      else {
        cells[i].className = "dead";
        cells[i].setAttribute('data-status', 'dead');
      }
    }
  }

}

GameOfLife.prototype.reset

GameOfLife.prototype.clear = function() {
  document.getElementById("autoplay").innerHTML = "Play";
  if (this.running) {
      interval = clearInterval(interval);
  }
  var cells = document.getElementsByTagName("TD");
  for (var i=0; i<cells.length; i++) {
    cells[i].className = "dead";
    cells[i].setAttribute('data-status', 'dead');
  }

}
 

GameOfLife.prototype.getNeighborStatus = function(cellId) {
 var coord_array = cellId.split('-');
 var xCoord = Number(coord_array[0]);
 var yCoord = Number(coord_array[1]);
 //var neighbors = [ ];
 var aliveNeighbors = 0;

 for (var i=xCoord-1; i<=xCoord+1; i++) {
   for (var j=yCoord-1; j<=yCoord+1; j++) {
     if (i<0 || j<0 || i>= this.height ||
        j>=this.width ||(i===xCoord && j===yCoord) ) {
       continue;
     }
   var currElement = document.getElementById(i + "-" + j);
   if (currElement.getAttribute('data-status') == 'alive') {
     aliveNeighbors++;
   } 
   } 
 }
 return aliveNeighbors;
}


GameOfLife.prototype.enableAutoPlay = function () {
  // var interval;
  if (!this.running) {
    console.log('should start')
    this.running = true;
    interval = setInterval(this.step.bind(this), 1000);
    document.getElementById("autoplay").innerHTML = "Pause";
  } else {
    console.log("should stop");
    this.running = false;
    document.getElementById("autoplay").innerHTML = "Play";
    interval = clearInterval(interval);
  } 
};

var gol = new GameOfLife(20,20);
gol.createAndShowBoard();
// console.log(gol.getNeighborStatus("19-19"));
