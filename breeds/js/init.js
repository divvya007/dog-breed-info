let hideStaticPage = document.getElementById("static-page");
// hideStaticPage.remove();
hideStaticPage.style.display = "none";
const imageToOtherPage = new Spinner(document.getElementById("showSpinner"));
imageToOtherPage.show();

(function () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  console.log(urlSearchParams);
  const params = Object.fromEntries(urlSearchParams.entries());
  console.log(params);
  fetch("https://api.thedogapi.com/v1/breeds/search?q=" + params.breed)
    .then((response) => response.json())
    .then((breedName) => {
      imageToOtherPage.hide();
      hideStaticPage.style.display = "block";
      console.log(breedName);
      document.getElementById("name").innerText = breedName[0].name;
      document.getElementById("origin").innerText = breedName[0].origin;
      document.getElementById("bred-for").innerText = breedName[0].bred_for;
      document.getElementById("temperament").innerText =
        breedName[0].temperament;
      document.getElementById("life-span").innerText = breedName[0].life_span;
      document.getElementById("image").src =
        "https://cdn2.thedogapi.com/images/" +
        breedName[0].reference_image_id +
        ".jpg";
    });
})();
