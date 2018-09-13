class Sorter {
    constructor() {
      this.mas = [];
      this._length = 0;
      this.compareFunction = function(x,y){return x-y;};
    }
  
    add(element) {
      this.mas.push(element);
      this._length++;
    }
  
    at(index) {
      return this.mas[index];
    }
  
    get length() {
      return this._length;
    }
  
    toArray() {
      return this.mas;
    }
  
    sort(indices) {
      
      var i=0;
      var tmp = [];
      for(i=0; i<indices.length; i++){
        tmp.push(this.mas[indices[i]]);
      }
      
      tmp.sort(this.compareFunction);
      
      indices.sort(function(x,y){return x-y});
      for(i=0; i<indices.length; i++){
        this.mas[indices[i]] = tmp[i];
      }
      
    }
  
    setComparator(compareFunction) {
      this.compareFunction = compareFunction;
    }
  }
  
  module.exports = Sorter;