const user2 = {
  id: 25,
  name: "John",
  isLoggedIn: false,
  role: "user",
  password: "123abc",
};

let _user = document.querySelector("#user");

_user.innerHTML = user2.isLoggedIn && `<h1> Welcome ${user2.name}! </h1>`;
