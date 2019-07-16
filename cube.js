'use strict';



class cube{
    constructor(parameter){
        parameter = objectDefaultValue(parameter, CUBE_DEFAULT_PARAMETERS);
        this.cube = document.createElement("div");

        this.cube.className  = "cube face";
        this.faceFront = true;
        this.cube.faceFront = true;
        
        this.cube.innerHTML = `
        <div style="background-color: red" class="front"></div>
        <div style="background-color: pink" class="back"></div>
        <div style="background-color: blue" class="top"></div>
        <div style="background-color: yellowgreen" class="bottom"></div>
        <div style="background-color: magenta" class="left"></div>
        <div style="background-color: gold" class="rigth"></div>
        `;
        
        this.cube.onclick = this.cubeActivate.bind(this);

        _style(this.cube, parameter.style);
        
        if(parameter.returnCube)
            return this.cube;
    }


    cubeActivate(){
        this.faceFront = !this.faceFront;
        console.log(this.faceFront);
        this.cube.classList.toggle("face");
        this.cube.classList.toggle("back");
    }
}


function _style(cube, style){
    style.forEach(function(element){
        cube.style[element[0]] = element[1];
    });
}




function objectDefaultValue(objectToCheck, defaultObject){
    if(typeof defaultObject !== "object"){
      throw new Error("Invalid defaultObject argument");
    }
    if(typeof objectToCheck !== "object"){
      console.warn("argument objectToCheck is not an object. defaultObject wil be copied");
      objectToCheck = {};
    }
    
    let keyArray = Object.keys(defaultObject);
    keyArray.forEach(function(key){
      if(typeof objectToCheck[key] !== typeof defaultObject[key]){
        objectToCheck[key] = defaultObject[key];
      }
    });
    return objectToCheck;
  }

const CUBE_DEFAULT_PARAMETERS = {
    style : [["backgroundColor", "rgba(255,30,120,0.2)"],["borderRadius","inherit"]],
    //front : 
    width: "50px",
    height: "50px",
    depth: "50px",
    returnCube : true,
}
Object.freeze(CUBE_DEFAULT_PARAMETERS);

