let item = document.querySelector("#item");
let ul = document.querySelector("#itemList");

item.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    let itemValue = event.target.value;
    createLi(ul, itemValue);
    event.target.value = "";
  }
});

function createLi(ul, name) {
  let li = document.createElement("li");
  li.className = "list-group-item d-flex";
  li.innerHTML = name;

  let closeIcon = document.createElement("span");
  closeIcon.className = "btn btn-sm btn-danger ms-auto";
  closeIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';

  closeIcon.addEventListener("click", function () {
    ul.removeChild(li);
  });
  li.appendChild(closeIcon);

  ul.appendChild(li);
}

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// AJAX XMLHttpRequest System
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  //   console.log(xhr.response);
};
xhr.open("GET", BASE_URL);
xhr.send();

// AJAX fetch API System
fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    let tbody = document.querySelector("#tbody");
    data.forEach((user) => {
      // createTDElement(user, tbody);
    });
  });

// AJAX axios system
window.onload = function () {
  let tbody = document.querySelector("#tbody");
  axios
    .get(BASE_URL)
    .then((res) => {
      res.data.forEach((users) => {
        createTDElement(users, tbody);
      });
    })
    .catch();
};

// Create td element function
function createTDElement(data, parentElement) {
  const TR = document.createElement("tr");

  const tdID = document.createElement("td");
  tdID.innerHTML = data.id;
  TR.appendChild(tdID);

  const tdName = document.createElement("td");
  tdName.innerHTML = data.name;
  TR.appendChild(tdName);

  const tdUsername = document.createElement("td");
  tdUsername.innerHTML = data.username;
  TR.appendChild(tdUsername);

  const tdEmail = document.createElement("td");
  tdEmail.innerHTML = data.email;
  TR.appendChild(tdEmail);
  parentElement.appendChild(TR);
}
