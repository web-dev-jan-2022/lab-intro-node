class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] > item) {
        this.items.splice(i - 1, 0, item);
      }
    }
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
