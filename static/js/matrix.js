function genMatrix(){
  //(base skeleton by Boujjou Achraf)
  var c = document.getElementById("c");
  var ctx = c.getContext("2d");

  var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789诶比西迪伊艾弗吉艾尺艾杰开艾勒艾马艾娜哦屁吉吾艾儿艾一，@#$%^&*()*&^%+-/~{[|`]}".split("");;
  var font_size = 12;
  var columns = c.width/font_size; //number of columns
  var rows = c.height/font_size;
  var columns_old = columns;
  //an array of drops - one per column
  var drops = [];
  //x coordinate
  for(var x = 0; x < columns; x++)
      drops[x] = Math.floor((Math.random()*rows)+1);//random starting place within screen rows

  //draw the characters
  function drawmatrix()
  {
      if(!isScrolledIntoView(c)) {return;} //lazy render
      
      if (c.height != window.innerHeight || c.width != window.innerWidth){ //adjust dynamically if width or height has changed
        c.height = window.innerHeight;
        c.width = window.innerWidth;

        columns = c.width/font_size;
        rows = c.height/font_size;
        if (columns > columns_old){
          drops=[]
          for(var x = 0; x < columns; x++)
            drops[x] = Math.floor((Math.random()*rows+1));
        }
        columns_old=columns
      }

      //Black BG for the canvas
      //translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 90%, 50%)';//multi color saturated text
      ctx.font = font_size + "px arial";

      for(var i = 0; i < columns; i++)
      {
          var text = matrix[Math.floor(Math.random()*matrix.length)];
          //x = i*font_size, y = value of drops[i]*font_size
          ctx.fillText(text, i*font_size, drops[i]*font_size);

          //sending the drop back to the top randomly after it has crossed the screen
          //adding a randomness to the reset to make the drops scattered on the Y axis
          if(drops[i]*font_size > c.height && Math.random() > 0.977)
              drops[i] = 0;

          //incrementing Y coordinate
          drops[i]+=1;
      }
  }

  setInterval(drawmatrix, 75);
}

genMatrix()