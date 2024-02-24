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

// ----------------
// Asynchrone (exectuter du code mais dire attend avant de le faire)
//  3 façons
// ----------------

setTimeout(() => {
  // console.log("tst");
}, 2000);

// Promise
// fetch("monlien").then((res) => res);

// Async/Await
async function fetchData() {
  // await fetch("monlien");
  // attend que le await soit executé avant de faire la suite.
  // Peut faire une cascade de await

  executeFonction();
}

const fetchData2 = async () => {
  await fetch("monlien");
  executeFonction();
};

// ----------------
// Le JSON
// ----------------

// Méthode .json() => méthode qui s'auto-résout en royant le Body de la requête

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // Stringify => convertit en JSON
    let settings = JSON.stringify(data);
    // Parse => transforme json en object JS
    // console.log(JSON.parse(settings));
  });

// ---------------
// Web API
// ---------------

// 1) CLIENT STORAGE
// a) Local Storage

// cookies peut contenir 4ko d'info (faible), local storage (10mo default) a une capacité de stockage +grande
// en local storage, info (click, déplacements souris...) reste sur ordi du client. PAS DE TRANSIT DE DONNEES

localStorage.data = "je stock la data";
// document.body.textContent = localStorage.data;

localStorage.removeItem("data");

const obj = {
  name: "julien",
  age: 24,
};

localStorage.user = JSON.stringify(obj);
// console.log(JSON.parse(localStorage.user));

// on ne peut pas passer objet ou tableau. Obligatoirement une chaîne de caracteres

// b) Session Storage
// stockage jusqu'à la fin de la session (fermeture de la page)

sessionStorage.dataSettings = "55px";

sessionStorage.clear();

// 2) Les cookies
// server --> navigator, stockés par navigator
// de base s'arrête à la fin de session

document.cookie = "username=dpr";

// bonne pratique (secure et samesite IMPORTANTS (évite hack))
document.cookie = "pseudo=FS;path=/; max-age=45000; secure; samesite";
