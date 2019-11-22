class DOMNodeCollection {

  constructor (array) {
    this.array = array;
  }
  html(string) {
    if(string) {
      this.array.forEach(function(el) {
        el.innerHTML = string;
      });
    } else {
      return this.array[0].innerHTML;
    }
  }

  empty() {
    this.array.forEach(function(el) {
      el.innerHTML = "";
    });
  }

  append(arg) {
    if (typeof arg === "string"){
        this.array.forEach(el =>{
          el.innerHTML += arg;
      });
    }else if (arg instanceof DOMNodeCollection){
      arg.array.forEach(argDomNode => {
        this.array.forEach(thisDomNode => {
          thisDomNode.appendChild(argDomNode);
        }); 
      });
    }
  }

  attr(key, value) {
    if (value){
      this.array.forEach(function(thisDomNode) {
        thisDomNode.attributes[key] = value;
      });
    } else {
      return this.array[0].attributes[key];
    }
  }

  addClass(arg) {
    this.array.forEach(function(thisDomNode) {
        thisDomNode.classList.add(arg);
    });
  }

  removeClass(arg) {
    this.array.forEach(function(thisDomNode) {
      thisDomNode.classList.remove(arg);
    });
  }

  children (){
    this.array.myEach(thisDomnode =>{
      
    })

  }
}

module.exports = DOMNodeCollection;