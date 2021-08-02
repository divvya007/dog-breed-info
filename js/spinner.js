function Spinner(containerEl, path) {
  this.image = document.createElement("img");
  this.image.src = path;
  this.image.className = "loading-image";
  this.imgInsideContainer = containerEl;
  this.imgInsideContainer.className = "spinner";
  //   this.imgInsideContainer.append(this.image);
}

Spinner.prototype = {
  show: function () {
    this.imgInsideContainer.append(this.image);
  },
  hide: function () {
    return this.imgInsideContainer.remove();
  },
};
