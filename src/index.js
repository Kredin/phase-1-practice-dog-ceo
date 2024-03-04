console.log("%c HI", "color: firebrick");
let dogBreedNames = [];

addEventListener("DOMContentLoaded", initialise());

function initialise() {
  retrieveImgs();
  retrieveBreeds();
}

function retrieveImgs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((res) => res.json())
    .then((img) => addImg(img));
}

function addImg(img) {
  const dogContainer = document.querySelector("#dog-image-container");
  for (let i = 0; i < img.message.length; i++) {
    console.log(img.message[i]);
    let dogImg = document.createElement("img");
    dogImg.setAttribute("src", img.message[i]);
    dogImg.setAttribute("alt", "Dog Picture");
    dogContainer.appendChild(dogImg);
  }
}

function retrieveBreeds() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((res) => res.json())
    .then((dogData) => addBreeds(dogData));
}

function addBreeds(dogData) {
  dogBreedNames = Object.keys(dogData.message);
  console.log(dogBreedNames);
  const breedsContainer = document.querySelector("#dog-breeds");
  for (item in dogData.message) {
    let breed = document.createElement("li");
    breed.textContent = item;
    breed.addEventListener("click", () => {
      breed.style.color = "red";
    });
    breedsContainer.appendChild(breed);
  }
}

function log() {
  console.log("changed");
  const choice = document.getElementById("dropdown").value;
  const breedsContainer = document.querySelector("#dog-breeds");

  breedsContainer.innerHTML = "";

  dogBreedNames
    .filter((breed) => breed.startsWith(choice))
    .forEach((breedName) => {
      let breed = document.createElement("li");
      breed.textContent = breedName;
      breed.addEventListener("click", () => {
        breed.style.color = "red";
      });
      breedsContainer.appendChild(breed);
    });

  // for (item in filteredDogs) {
  //   let breed = document.createElement("li");
  //   breed.textContent = item;
  //   breed.addEventListener("click", () => {
  //     breed.style.color = "red";
  //   });
  //   breedsContainer.appendChild(breed);
  // }

  console.log(choice);
  console.log(dogBreedNames);
}

function filterBreeds() {
  console.log(dogBreedNames);
}
