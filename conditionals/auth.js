const user = {
  id: 25,
  name: "John",
  isLoggedIn: false,
  role: "admin",
  password: "123abc",
};

let container = document.querySelector(".container");

if (user.isLoggedIn === true) {
  container.innerHTML = `
        <div class="logo-box">Logo here</div>
        <a href="" class="login-btn">Logout ${user.name}</a>
    `;
} else {
  container.innerHTML = `
        <div class="logo-box">Logo here</div>
        <a href="" class="login-btn">Login</a>
    `;
}

// converting to ternary
user.isLoggedIn === true
  ? (container.innerHTML = `
        <div class="logo-box">Logo here</div>
        <a href="" class="login-btn">Logout ${user.name}</a>
    `)
  : (container.innerHTML = `
        <div class="logo-box">Logo here</div>
        <a href="" class="login-btn">Login</a>
    `);
