// XMLHttpRequest (ancien)

function reqListener() {
  // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

// -------
// FETCH (va chercher)
// -------

// FETCH ECRITURE THEORIQUE

// fetch("lien", "objets d'options")
//   .then((response) => {
//     // console.log(response)
//   })
//   .catch((err) => console.log(err));

fetch("data.txt").then((res) => res.text());
// .then((data) => console.log(data));

fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
