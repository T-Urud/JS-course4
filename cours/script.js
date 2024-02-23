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

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

// de base fetch est en method GET. GET => fourni moi les données
// On effectue une requête, APPORTE MOI DES DONNEES

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

// ----------------------------
// CRUD => Creat (POST), Read (GET), Update (PUT), Delete (DELETE)
// Acronyme des 4 fonctions de base pour agir sur des données stockées.

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "FromScratch",
    age: 42,
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/users", init2).then(() =>
    console.log("data envoye")
  );
});
