'use strict';


document.onreadystatechange = function(){
    if(document.readyState === "complete"){
        let main = document.querySelector("main");

        main.append(new cube());
    }
}