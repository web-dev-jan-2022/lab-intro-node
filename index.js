class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    //      1) should add a value while keeping the list sorted
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos < this.length + 1) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length > 0) {
      return this.items[this.items.length - 1];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0) {
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length > 0) {
      return this.items.reduce((a, b) => a + b);
    } else {
      return 0;
    }
  }

  avg() {
    // return this.items.sum() / this.lenght; this wouldn't work (of course not with the error case, but either for the number / length?):(
    if (this.length > 0) {
      return this.items.reduce((a, b) => a + b) / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
