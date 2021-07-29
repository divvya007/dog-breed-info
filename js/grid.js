// constructor function for grid
function Grid(containerEl) {
  this.gridEl = document.createElement("div");
  containerEl.append(this.gridEl);
}

Grid.prototype = {
  populate: function (dogBreed) {
    console.log(this.gridEl, this);
    this.breed = dogBreed.map((dogData) => {
      console.log(this.gridEl, this);
      return new BreedItem(this.gridEl, dogData);
    });
  },
};
