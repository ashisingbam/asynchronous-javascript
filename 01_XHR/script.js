const image = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log("got the data");
  //     console.log(json);
  //     image.src = json.message;
  //   });
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.responseType = "json";
  // xhr.addEventListener("load", () => {
  //   console.log(xhr.response);
  //   image.src = xhr.response.message;
  // });
  xhr.onload = () => {
    console.log(xhr.response);
    image.src = xhr.response.message;
  }
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});
