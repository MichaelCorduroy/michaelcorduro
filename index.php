<!DOCTYPE html>
<html lang="en">





<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>michaelcorduroy</title>

    <link rel="icon" type="image/x-icon" href="/res/sully.png">
    <style>
        body {
          
            display: flex;
            flex-direction: row;
            align-items: stretch;
        }
        #dropdown-text{
            position: absolute;
            margin: 30px 100px;
        }
        #colorPalette {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 60px 0px;
        }
        #colorPicker{
            position: absolute;
            margin: 20px 0px;
            width: 35px;
            height: 35px;
        }
        #plsDraw{
          animation: grow-shrink 1s ease-in-out alternate infinite !important;
        }

        @keyframes grow-shrink {
          from { transform: scale(1.0); } /* Start at normal size */
          to { transform: scale(1.1); } /* Grow to 110% size */
        }
        #toggleDrawingMode{
            position: absolute;
            margin: 700px 400x;
        }
        .colorSquare {
            width: 30px;
            height: 30px;
            cursor: pointer;
            border: 1px solid #000;
            margin-bottom: 5px;
        }
        canvas {
          display: block;
            position: absolute;
            margin: 0px 74px;
            border: 1px solid #000;
        }

        #content {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px;
        }

        #gallery {
            position: absolute;
            text-align: center;
            width: 125px;
            height: 150px;
            z-index: 1;
            margin: 400px 600px;
        } 

        #games{
            position: absolute;
            text-align: center;
            width: 125px;
            z-index: 1;
            height: 150px;
            margin: 250px 200px;
        }
        #mydiv {
        position: absolute;
        top: 40%;
        left: 25%;
        z-index: 9;
        width: 300px;
        height: 200px;
        background-color: #f1f1f1;
        text-align: center;
        border: 1px solid #d3d3d3;
        text-align: center;
    }
        #mydivheader {
            position: absolute;
            padding: 10px;
            width:290px;
            cursor: move;
            z-index: 10;
            background-color: #2196F3;
            color: #fff;
            opacity: 0;
            }
    #deathwindow {
        position: absolute;
        top: 17%;
        left: 50%;
        z-index: 9;
        width: 300px;
        height: 200px;
        background-color: #f1f1f1;
        text-align: center;
        border: 1px solid #d3d3d3;
        text-align: center;
    }

   
    #deathwindowheader {
    position: absolute;
    padding: 10px;
    width:330px;
    height:40px;
    cursor: move;
    z-index: 10;
    background-color: #2196F3;
    color: #fff;
    opacity: 0;
    }


    #machineDisplay{
    position: absolute;
    top: 35%;
    left: 2%;
    width: 110%;
    height: 247px;  /* Allow height to adjust based on video */
    object-fit: cover;  /* Stretch to fill container, maintaining aspect ratio */
}



    #med-frame{
    position: absolute;
    top: -10%;
    left: -18%;
    width: 520px;
    height: 325px;
    transform: scale(0.75);
    }

    
    #forgetterwindow{
        position: absolute;
        top: 15%;
        left: 15%;
        z-index: 8;
        width: 500px;
        height: 300px;
        
    }

    #forgetterwindowheader{
    position: absolute;
    padding: 10px;
    width:550px;
    height:20px;
    cursor: move;
    z-index: 8;
    opacity: 0;
    }


    #icespicewindow {
        position: absolute;
        top: 55%;
        left: 55%;
        z-index: 8;
        width: 300px;
        height: 200px;
        background-color: #f1f1f1;
        text-align: center;
        border: 1px solid #d3d3d3;
        text-align: center;
    }

    #spiceDisplay{
    position: absolute;
    top: 8%;
    left: 1%;
    height: 226px;
    width: 345px;
    
     /* Allow height to adjust based on video */
    object-fit: cover;  /* Stretch to fill container, maintaining aspect ratio */
}

  



    </style>
</head>
<body>

    <img id="plsDraw" src= "pleasedraw.png" style="height: 60px; position: absolute; left: 3%; top: 1.5%;">
    <div class = "window" id="mydiv" title="Guided Meditation: The Game">
        <div id="mydivheader"  onclick="moveToTop(this.parentElement)">Click here to move</div>
        <img src="res/medbord.jpeg" style="height: 270px;">
        <iframe  id = "med-frame" src="astral-meditation.html" title="Astral Meditation"></iframe> 
      </div>


      <div class = "window" id ="deathwindow" title="Robotic Series: Deathbot">
        <div id="deathwindowheader" onclick="moveToTop(this.parentElement)">Click here to move</div>
        <img src="deathback.png" style="height: 350px;">
        <video onclick="window.location = 'deathbot.html'"  width = "100%" id = "machineDisplay" src="res/deathbot.mov"  controls="false" autoplay muted loop></video>
      </div>

      <div class = "window" id = "forgetterwindow" title="Need help remembering?" style="position: absolute;">
        <div id = "forgetterwindowheader" style="background-color: blueviolet; position: absolute;">Crick here to move</div>
        <img src = "forgetter.png" style="height: 300px;">
      </div>


      <div class = "window" id = "icespicewindow" title="Ice Spice Racing" style="position: absolute;">
        <div id = "icespicewindowheader" onclick="moveToTop(this.parentElement)" style="background-color: blueviolet; opacity: 0%; position: absolute; width: 350px; ">Crick here to move</div>
        <img src = "res/icespiceback.png" style="height: 250px; width: 350px;">
        <video width="100%" id = spiceDisplay src = "res/spice.mp4" controls = "false" autoplay muted loop></video>
      </div>


    <h1 id="dropdown-text" style="font-family: Arial; font-size: 70px;" onclick="meep()">michaelcorduroy.com</h1>
    <div id="colorPalette"></div>
    
    <div id="games">
        <a href="games.html" class="overlay">
            <img src="smile/gamecon.png" style="height: 100px;">
        </a>
        <a href="games.html" style="font-family: Courier New;">games</a>
    </div>
<br>
    <div id="gallery" class="overlay">
        <a href="gallery.html">
            <img src="smile/galcon.png" style="height: 100px;">
        </a>
        <a href="gallery.html" style="font-family: Courier New;">gallery</a>
    </div>
<script>
      
  const colors = ['#000000', '#808080', '#C0C0C0', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFA500', '#FFC0CB', '#800080', '#008080', '#008000', '#FFD700', '#A52A2A', '#4B0082'];

  const iframe = document.getElementById("med-frame");
//Check if content overflows the iframe height
if (iframe.contentDocument.body.scrollHeight > iframe.clientHeight) {
  /*
  // Option 1: Adjust iframe height to fit content
  iframe.style.height = iframe.contentDocument.body.scrollHeight + "px";
  */
  // Option 2: Disable scrolling (not recommended)
  iframe.contentWindow.document.body.style.overflow = "hidden";
}

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("deathwindow"));
dragElement(document.getElementById("forgetterwindow"));
dragElement(document.getElementById("icespicewindow"));

//no video controls
let machineDisplay = document.getElementById("machineDisplay");
machineDisplay.controls = false;

let spiceDisplay = document.getElementById("spiceDisplay");
spiceDisplay.controls = false;
spiceDisplay.playbackRate = 2.0;


//please draw thing idk
let plsDraw = document.getElementById("plsDraw");


//onclick window move to front
const windows = document.querySelectorAll('.window');

// Add click event listener to each div
function moveToTop(clickedWindow) {
  // Set the z-index of the clicked window to a high value (e.g., 100)
  clickedWindow.style.zIndex = 50;

  // (Optional) Loop through all other window elements and set their z-index to a lower value (e.g., 1)
  var allWindows = document.querySelectorAll(".window");
  for (var i = 0; i < allWindows.length; i++) {
    if (allWindows[i] !== clickedWindow) {
      allWindows[i].style.zIndex = 2;
    }
  }
}
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//random position icons

  var games = document.getElementById("games");
  var  gallery = document.getElementById("gallery");
  var shambles = [games, gallery];


 




  //colors and paint mechanics

colors.forEach(color => {
    const colorSquare = document.createElement('div');
    colorSquare.className = 'colorSquare';
    colorSquare.style.backgroundColor = color;
    colorSquare.addEventListener('click', () => setColor(color));
    colorPalette.appendChild(colorSquare);
});

colorPicker.addEventListener('input', (e) => setColor(e.target.value));

function setColor(color) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    colorPicker.value = color;
}
    </script>
    <canvas id="canvas" width="1350" height="800"></canvas>
    <input type="color" id="colorPicker">
  
    <script>
        const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorPalette = document.getElementById('colorPalette');
const colorPicker = document.getElementById('colorPicker');
let drawing = false;



  function drawIcons() {
    for (let i = 0; i < shambles.length; i++) {
      var icon = shambles[i];
      var x = Math.random() * (300) + 100;
      var y = Math.random() * (100) + 100 
      icon.style.left = x + 'px';
      icon.style.top = y + 'px';
  }
}

drawIcons();






canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

colorPicker.addEventListener('input', (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
      if(plsDraw.style.display != "none"){
        plsDraw.style.display = "none";
      }
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
});

    </script>


   
</body>
</html>






