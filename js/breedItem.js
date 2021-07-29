// constructor function for breedItem
// for image and its content

function BreedItem(containerEl, breedData) {
  this.outerDiv = document.createElement("div");

  this.image = document.createElement("img");
  this.image.src = breedData.image.url;
  this.image.height = 50;
  this.outerDiv.append(this.image);

  this.title = document.createElement("div");
  this.title.innerText = breedData.name;
  this.outerDiv.append(this.title);

  this.subtitle = document.createElement("div");
  this.subtitle.innerText = breedData.temperament;
  this.outerDiv.append(this.subtitle);

  this.subtitle2 = document.createElement("div");
  this.subtitle2.innerText = breedData.life_span;
  this.outerDiv.append(this.subtitle2);

  containerEl.append(this.outerDiv);
}
