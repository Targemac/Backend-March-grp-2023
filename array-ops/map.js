// create an array of users
const users_DB = [
  {
    id: 1,
    name: "John",
    age: 21,
    status: "online",
    photo: "user1.jpg",
  },
  {
    id: 2,
    name: "ofega",
    age: 20,
    status: "offline",
    photo: "user2.jpg",
  },
  {
    id: 3,
    name: "Mary",
    age: 10,
    status: "online",
    photo: "user3.jpg",
  },
];

let wrapper = document.querySelector(".wrapper");
let links = "";

users_DB.map((user, index, array) => {
  links =
    links +
    ` <a href="/profile/${user.id}">
        <img src="./img/${user.photo}" alt="${user.name}">
    </a>
    `;
});

let container = `
            <div class="container">
                <h1>friends online</h1>
            ${links}
            </div>
`;

wrapper.innerHTML = container;
