const DOMNodeCollection = require("./dom_node_collection");

window.$l = function(arg) {
  let nodelist;
  let array = [];
  let dnc;
  
  if (typeof arg === "string") {
    //html element case
    if(arg[0] === "<") {
      let htmlEl = document.createElement(arg.slice(1, arg.length-1));
      array.push(htmlEl);
      dnc = new DOMNodeCollection(array);
    } else {
      //selector case
      nodelist = this.Array.from(this.document.querySelectorAll(arg));
      dnc = new DOMNodeCollection (nodelist);
    }
  }
  return dnc;
};

window.$l = $l;