'use strict';



class cube{
    constructor(parameters){
      this.paramerters = objectDefaultValue(parameters, CUBE_DEFAULT_PARAMETERS);

      this.makeCube();
      this.geometrySetup();

      if(this.paramerters.returnCube)
        return this.cube;
    }



    makeCube(){
      this.cube = document.createElement("div");
      
      this.faceNames = ["front","back","top","bottom","left","rigth"];
      this.faceNames.forEach(function(faceName){
        this[faceName] = document.createElement("div");
        this[faceName].className =  "cube_" + faceName;
        this.cube.append(this[faceName]);
      }.bind(this));

    }
    geometrySetup(){
      this.cube.style.transformStyle = "preserve-3d";
      this.cube.style.position = "relative";
      this.cube.style.display = "block";
      this.cube.style.boxSizing = "border-box";
      this.cube.style.margin = "0";
      this.cube.style.padding = "0";

      this.faceNames.forEach(function(faceName){
        this[faceName].style.position = "absolute";
        this[faceName].style.top = "0";
        this[faceName].style.left = "0";
        this[faceName].style.display = "block";
        this[faceName].style.boxSizing = "border-box";
        this[faceName].style.margin = "0";
        this[faceName].style.padding = "0";
      }.bind(this));

      let cachName = ["front","back"];
      this.front.style.width = "100%";
      this.front.style.height = "100%";

      this.back.style.transform = "rotateY(180deg)";
      this.back.style.width = "100%";
      this.back.style.height = "100%";

      this.top.style.width = "100%";

      this.bottom.style.width = "100%";

    }
}

const FACE_STYLE = {
  front : [],
};


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
    width: "50px",
    height: "50px",
    depth: "50px",
    returnCube : true,
}
Object.freeze(CUBE_DEFAULT_PARAMETERS);

