'use strict';



class cube{
    constructor(parameters){
      this.parameters = objectDefaultValue(parameters, CUBE_DEFAULT_PARAMETERS);

      this.makeCube();
      this.geometrySetup();
      this.transitionDuration = this.parameters.transitionDuration;
      this.smoothSizeChange = this.parameters.smoothSizeChange;
      if(this.smoothSizeChange){
        this.toggleSmoothSizeChange();
      }

      this._depth(this.parameters.depth);
      this._width(this.parameters.width);
      this._height(this.parameters.height);

      if(this.parameters.returnCube)
        return this.cube;
    }



    makeCube(){
      this.cube = document.createElement("div");
      this.cube.className = "cube";

      
      this.faceNames = ["front","back","top","bottom","left","right"];
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
        this[faceName].style.transformOrigin = "0 0";

        CUBE_GEOEMETRY_STYLE[faceName].forEach(function(styleArray){
          this[faceName].style[styleArray[0]] = styleArray[1];
          if(styleArray[0] === "transform"){
            this[faceName]._defaultTranformValue = " " + styleArray[1] + " ";
          }
        }.bind(this));

      }.bind(this));

      

    }
    _depth(size){
      if(_sizeIsValid(size)){
        this.depth = size;
        this.cube.style.transformOrigin = "50% 50% calc(-1*"+this.depth+"/2)";
        
        this.back._depthTransformValue = " translateZ(" +this.depth+") ";

        this.top.style.height = this.depth;
        this.top._depthTransformValue = " translateY(calc(-1*" +this.depth+")) ";
        
        this.bottom.style.height = this.depth;
        this.bottom._depthTransformValue = "  ";

        this.left.style.width = this.depth;
        this.left._depthTransformValue = " translateX(calc(-1*" +this.depth+")) ";
        
        this.right.style.width = this.depth;
        this.right._depthTransformValue = " translateX(calc(0*" +this.depth+")) ";

        this.applySizeChange();
        return;
      }
      console.warn("SIZE is not valid");
    }


    _width(size){
      if(_sizeIsValid(size)){
        this.width = size;        
        this.cube.style.width = this.width;
        
        return;
      }
      console.warn("SIZE is not valid");
    }


    _height(size){
      if(_sizeIsValid(size)){
        this.height = size;
        this.cube.style.height = this.height;
        
        return;
      }
      console.warn("SIZE is not valid");
    }

    applySizeChange(){

      this.back.style.transform = this.back._defaultTranformValue + 
      this.back._depthTransformValue;

      this.left.style.transform = this.left._defaultTranformValue + 
      this.left._depthTransformValue;
      
      this.right.style.transform = this.right._defaultTranformValue + 
      this.right._depthTransformValue;

      this.top.style.transform = this.top._defaultTranformValue + 
      this.top._depthTransformValue;
      
      this.bottom.style.transform = this.bottom._defaultTranformValue + 
      this.bottom._depthTransformValue;
    }
    
    toggleSmoothSizeChange(){

      this.cube.style.transitionProperty = this.smoothSizeChange ? "width, height, transform" : "";

      this.faceNames.forEach(function(faceName){

        this[faceName].style.transitionProperty = this.smoothSizeChange ? "width, height, transform" : "";
      }.bind(this));

      this.smoothSizeChange = !this.smoothSizeChange;
    }

    set transitionDuration(transitionDuration){
      this.cube.style.transitionDuration = transitionDuration;

      this.faceNames.forEach(function(faceName){

        this[faceName].style.transitionDuration = transitionDuration;
      }.bind(this));
    }
}

const CUBE_GEOEMETRY_STYLE = {
  front : [["width","100%"],["height","100%"]],
  back : [["width","100%"],["height","100%"],["transform"," rotateY(180deg) translateX(-100%)"]],

  top : [["width","100%"],["transform"," rotateX(90deg) "]],
  bottom : [["top","100%"],["width","100%"],["transform"," rotateX(-90deg) "]],

  left : [["height","100%"],["transform"," rotateY(-90deg) "]],
  right : [["left","100%"],["height","100%"],["transform"," rotateY(90deg) "]],
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
    smoothSizeChange: true,
    transitionDuration: "1s",

}
Object.freeze(CUBE_DEFAULT_PARAMETERS);

function _sizeIsValid(size){

  return true;
}