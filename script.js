'use strict';
const name = ["front","back","top","bottom","left","right"];
const srcArray = [`<iframe width="560" height="315" src="https://www.youtube.com/embed/YYlYW3i9HxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`];


document.onreadystatechange = function(){
    if(document.readyState === "complete"){
        let main = document.querySelector("main");

        let _cube = new cube({returnCube: false, smoothSizeChange: true, transitionDuration: "8s"})
        main.append(_cube.cube);

        document.querySelectorAll(".cube > *").forEach(function(element){
          //rondomColor(element);
          element.innerHTML = srcArray[ 
            Math.floor(Math.random() * srcArray.length)
           ];//"_______" + element.className;
          let iframe = document.createElement("iframe");
          iframe.style.height = "100%";
          iframe.style.width = "100%";
          iframe.src = srcArray[ 
            Math.floor(Math.random() * srcArray.length)
           ];
          //element.append(iframe);


        });


        let h = document.getElementById("h");
        h.onkeyup = function(){
          _cube._height(this.value + "px");
        }
        _cube._height(h.value + "px");
        
        let w = document.getElementById("w");
        w.onkeyup = function(){
          _cube._width(this.value + "px");
        }
        _cube._width(w.value + "px");

        let d = document.getElementById("d");
        d.onkeyup = function(){
          _cube._depth(this.value + "px");
        }
        _cube._depth(d.value + "px");
        

        let x = document.getElementById("x");
        x.onkeyup = function(){
          X = 0;
          rotateX = " rotateX( " + this.value+ "deg ) ";
          _cube.cube.style.transform = rotateX + rotateY + rotateZ;
        }

        let y = document.getElementById("y");
        y.onkeyup = function(){
          Y = 0;
          rotateY = " rotateY( " + this.value + "deg ) ";
          _cube.cube.style.transform = rotateX + rotateY + rotateZ;
        }
        let z = document.getElementById("z");
        z.onkeyup = function(){
          Z = 0;
          rotateZ = " rotateZ( " + this.value + "deg ) ";
          _cube.cube.style.transform = rotateX + rotateY + rotateZ;
        }


        rotateX = " rotateX( " + X + "deg ) ";
        rotateY = " rotateX( " + Y + "deg ) ";
        rotateZ = " rotateX( " + Z + "deg ) ";
        
        _cube.cube.style.transform = rotateX + rotateY + rotateZ;



        document.getElementById("bX").onclick = function(){
          ++X;
          rotateX = " rotateX( " + X*90+ "deg ) ";
          _cube.cube.style.transform = rotateX + rotateY + rotateZ;
        }
        document.getElementById("bY").onclick = function(){
          ++Y;
          rotateY = " rotateY( " + Y*90+ "deg ) ";
          _cube.cube.style.transform = rotateX + rotateY + rotateZ;
        }
        document.getElementById("bZ").onclick = function(){
          ++Z;
          rotateZ = " rotateZ( " + Z*90+ "deg ) ";
          _cube.cube.style.transform = rotateX + rotateY + rotateZ;
        }
    }
}

var X = 0, Y = 0, Z = 0;

var rotateX = "0deg";
var rotateY = "0deg";
var rotateZ = "0deg";

function rondomColor(element){
  element.style.backgroundColor = getRandomColor();
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}