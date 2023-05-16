const user = {
  id: 25,
  name: "John",
  isLoggedIn: false,
  role: "user",
  password: "123abc",
};

let container = document.querySelector(".container");

// if (user.password === "123abc" && user.role === "admin") {
//   container.innerHTML = `
//         <div class="logo-box">Logo here</div>
//         <div>
//             You are loggedIn as an Admin &nbsp;
//             <a href="" class="login-btn">Logout ${user.name}</a>
//         </div>

//     `;
// } else {
//   container.innerHTML = `
//         <div class="logo-box">Logo here</div>
//         <a href="" class="login-btn">Login</a>
//     `;
// }

// converting to ternary
user.password === "123abc" && user.role === "admin"
  ? (container.innerHTML = `
       <div class="logo-box">Logo here</div>
        <div>
            You are loggedIn as an Admin &nbsp;
            <a href="" class="login-btn">Logout ${user.name}</a>
        </div>
    `)
  : (container.innerHTML = `
        <div class="logo-box">Logo here</div>
        <a href="" class="login-btn">Login</a>
    `);
