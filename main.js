var mouseevent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;

canvas.addEventListener("mousedoun",mymousedown);

function mymousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;

  mouseevent="mouseDown";
}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseevent=="mouseDoun")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("last postion of x and y = ");
        console.log("x= " + last_position_of_x + " , y ="+ last_position_of_y);
      ctx.moveTo(last_position_of_x,last_position_of_y);


      console.log("current postion of x and y = ");
        console.log("x= " + current_position_of_mouse_x + " , y ="+ current_position_of_mouse_y);
      ctx.moveTo(current_position_of_mouse_x,current_position_of_mouse_y);
      ctx.strroke();
    }
    last_position_of_x =current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;

}

canvas.addEventListener("mouseup",mymouseup);
 
function mymouseup(e){
   
mouseevent="mouseUP";
}

canvas.addEventListener("mouseleave",mymouseleave);
 
function mymouseleave(e){
   
mouseevent="mouseleave";
}

function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

}
