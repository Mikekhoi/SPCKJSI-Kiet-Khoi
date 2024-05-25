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

  document.getElementById(
    "amount"
  ).innerHTML = `View all ${productList.length} games`;

  const cartElements = document.querySelectorAll(".cart-btn");
  const detailBtns = document.querySelectorAll(".detail-btn");

  // Thêm sự kiện click vào nút detail
  detailBtns.forEach((btn, index) => {
    btn.onclick = () => {
      const product = productList[index];
      localStorage.setItem("productDetail", product.id);
      window.location.href = "./detail.html";
    };
  });

  // sự kiện thêm vào giỏ hàng
  cartElements.forEach((item, idx) => {
    item.onclick = () => {
      const findExistInCart = cartList.some(
        (item) => item.id === productList[idx].id
      );

      if (findExistInCart) {
        alert("Sản phẩm này đã được thêm từ trước!");
      } else {
        cartList.push(productList[idx]);
        localStorage.setItem("cart", JSON.stringify(cartList));
        alert("Thêm vào giỏ hàng thành công");
      }
    };
  });
});
