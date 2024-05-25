import {
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "./index.js";

const collectionRef = collection(db, "products");

// Lấy dữ liệu từ Database Firestore theo thời gian thực
onSnapshot(collectionRef, (data) => {
  const productList = [];

  data.docs.forEach((doc) => {
    productList.push({ ...doc.data(), id: doc.id });
  });

  document.querySelector("#game-list").innerHTML = "";

  productList.forEach((prod) => {
    document.querySelector("#game-list").innerHTML += `
          <div class="col-lg-2 col-md-3 col-sm-6 mt-4" >
            <div>
              <img src="${prod.image}" alt="">
              <h4 class="game-title">${prod.name}</h4>
            </div>
         </div>
        `;
  });
});

// đưa ra navbar theo thông tin đã đăng nhập hay chưa
const renderNavbar = () => {
  // kiểm tra hiện tại đã có current user hay chưa
  const currentUser =
    localStorage.getItem("currentUser") === "null"
      ? null
      : localStorage.getItem("currentUser");

  document.getElementById("auth-link").innerHTML = currentUser
    ? `
    <p class="hello ml-3">${currentUser}</p>
    <button class="btn btn-danger" id="logout-btn" style="margin-left: 20px">Log out</button>
  `
    : `<a href="signin.html" class="navbar-item navbar-button">SIGN IN</a>
    <a href="signup.html" class="navbar-item navbar-button">REGISTER</a>`;
};

renderNavbar();

document.getElementById("logout-btn").onclick = () => {
  localStorage.setItem("currentUser", null);
  alert("Log out sucessfully");
  renderNavbar();
};
