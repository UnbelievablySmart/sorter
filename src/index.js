class Sorter {
  constructor() {
    this.array = [];
    this._length = 0;
    this.compareFunction = (x, y) => x - y;
  }
  
  add(element) {
    this.array.push(element);
    this._length++;
  }
  
  at(index) {
    return this.array[index];
  }
  
  get length() {
    return this._length;
  }
  
  toArray() {
    return this.array;
  }
  
  sort(indices) {
    let i = 0;
    const temp = [];

    for (i = 0; i < indices.length; i++) {
      temp.push(this.array[indices[i]]);
    }
      
    temp.sort(this.compareFunction);
      
    indices.sort((x, y) => x - y);

    for (i = 0; i < indices.length; i++) {
      this.array[indices[i]] = temp[i];
    }
      
  }
  
  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}
  
module.exports = Sorter;