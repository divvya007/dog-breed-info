let hideStaticPage = document.getElementById("static-page");
hideStaticPage.style.display = "none";

const imageToOtherPage = new Spinner(
  document.getElementById("showSpinner"),
  "./../images/loading.gif"
);
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

      // dog audio
      let dogAudioContainer = document.getElementById("dogAudioDiv");
      let soundEffect = document.createElement("AUDIO");
      soundEffect.id = "play-sound";

      let sourceTag = document.createElement("source");
      let arrayOfLink = [
        "./../dog-audio/dog3.mp3",
        "./../dog-audio/lubark.mp3",
        "./../dog-audio/pup1.mp3",
        "./../dog-audio/bark.mp3",
        "./../dog-audio/dSHAKE.mp3",
        "./../dog-audio/pup4.mp3",
        "./../dog-audio/pupwhimper.mp3",
      ];
      function generateRandomLink() {
        let min = 0;
        let max = arrayOfLink.length - 1;
        let i = Math.floor(Math.random() * (max - min) + min);
        console.log(i);
        console.log(arrayOfLink[i]);

        return arrayOfLink[i];
      }
      generateRandomLink(0, 8);
      console.log(sourceTag);

      sourceTag.setAttribute("src", generateRandomLink());

      // sourceTag.setAttribute("src", "generateRandomLink");

      sourceTag.setAttribute("type", "audio/mpeg");
      soundEffect.append(sourceTag);
      console.log(sourceTag);

      dogAudioContainer.append(soundEffect);
      dogAudioContainer.style.display = "none";
      console.log(soundEffect);

      document.getElementById("name").innerText = breedName[0].name;
      if (breedName[0].origin === undefined) {
        document.getElementById("hide-div").style.display = "none";
      } else {
        document.getElementById("origin").innerText = breedName[0].origin;
      }
      document.getElementById("bred-for").innerText = breedName[0].bred_for;
      document.getElementById("temperament").innerText =
        breedName[0].temperament;
      document.getElementById("life-span").innerText = breedName[0].life_span;

      document.getElementById("image").src =
        "https://cdn2.thedogapi.com/images/" +
        breedName[0].reference_image_id +
        ".jpg";
    });
  // onclick image
  document.getElementById("image").addEventListener("click", function () {
    document.getElementById("play-sound").play();
  });
})();
// document.getElementById("image-click").addEventListener("click", function () {
//   alert("hello dog");
// });
