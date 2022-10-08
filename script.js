const nav = document.querySelector(".nav");
const outterContainer = document.querySelector(".outterContainer");
const containerProd = document.querySelector(".containerProd");
const cart = document.querySelector(".cart");
const body = document.querySelector(".body");
const exe = document.querySelector(".exe");
const topTittle = document.querySelector(".topTittle");
const priceCart = document.querySelector(".priceCart");
const picCarts1 = document.querySelector(".picCarts1");
const picCarts2 = document.querySelector(".picCarts2");
const picCarts3 = document.querySelector(".picCarts3");
const picCarts4 = document.querySelector(".picCarts4");
const countBagTop = document.querySelector(".countBagTop");
const finalBill = document.querySelector(".finalBill");

const products = [
  {
    id: 0,
    img: "img/birdenCalça.jpeg",
    imgSmall1: "img/birdenSmallPic1.jpeg",
    imgSmall2: "img/birdenSmallPic2.jpeg",
    imgSmall3: "img/birdenSmallPic3.jpeg",
    imgSmall4: "img/birdenSmallPic4.png",
    price: 340,
    title: "Calça Cargo Trail black",
  },
  {
    id: 1,
    img: "img/birdenCalça05.jpeg",
    imgSmall1: "img/birdenSmallPic1.jpeg",
    imgSmall2: "img/birdenSmallPic3.jpeg ",
    imgSmall3: "img/birdenSmallPic2.jpeg",
    imgSmall4: "img/birdenSmallPic4.png",
    price: 220,
    title: "Calça Cargo Chino black",
  },
  {
    id: 2,
    img: "img/birdenCalça02.jpeg",
    imgSmall1: "img/birdenSmallPic3.jpeg",
    imgSmall2: "img/birdenSmallPic2.jpeg",
    imgSmall3: "img/birdenSmallPic1.jpeg ",
    imgSmall4: "img/birdenSmallPic4.png",
    price: 120,
    title: "Calça Cargo Sand black",
  },
  {
    id: 3,
    img: "img/birdenCalça03.jpeg",
    imgSmall1: "img/birdenSmallPic1.jpeg",
    imgSmall2: "img/birdenSmallPic2.jpeg",
    imgSmall3: "img/birdenSmallPic3.jpeg",
    imgSmall4: "img/birdenSmallPic4.png",
    price: 540,
    title: "Calça Cargo Lavanda black",
  },
  {
    id: 4,
    img: "img/birdenCalça04.jpeg",
    imgSmall1: "img/birdenSmallPic1.jpeg",
    imgSmall2: "img/birdenSmallPic2.jpeg",
    imgSmall3: "img/birdenSmallPic3.jpeg",
    imgSmall4: "img/birdenSmallPic4.png",
    price: 340,
    title: "Calça Cargo Rishea black",
  },
  {
    id: 5,
    img: "img/birdenCalça05.jpeg",
    imgSmall1: "img/birdenSmallPic1.jpeg",
    imgSmall2: "img/birdenSmallPic2.jpeg",
    imgSmall3: "img/birdenSmallPic3.jpeg",
    imgSmall4: "img/birdenSmallPic4.png",
    price: 640,
    title: "Calça Cargo Trail black",
  },
  {
    id: 6,
    img: "img/birdenCalça.jpeg",
    imgSmall1: "img/birdenSmallPic1.jpeg",
    imgSmall2: "img/birdenSmallPic2.jpeg",
    imgSmall3: "img/birdenSmallPic3.jpeg",
    imgSmall4: "img/birdenSmallPic4.png",
    price: 320,
    title: "Calça Cargo Chino black",
  },
  {
    id: 7,
    img: "img/birdenCalça01.jpeg",
    imgSmall1: "img/birdenSmallPic1.jpeg",
    imgSmall2: "img/birdenSmallPic2.jpeg",
    imgSmall3: "img/birdenSmallPic3.jpeg",
    imgSmall4: "img/birdenSmallPic4.png",
    price: 650,
    title: "Calça Cargo Riacho black",
  },
  {
    id: 8,
    img: "img/birdenCalça02.jpeg",
    imgSmall1: "img/birdenSmallPic4.png ",
    imgSmall2: "img/birdenSmallPic2.jpeg",
    imgSmall3: "img/birdenSmallPic3.jpeg",
    imgSmall4: "img/birdenSmallPic1.jpeg",
    price: 290,
    title: "Calça Cargo Texa black",
  },
];

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (scrolled > 1) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// ---------------------rendering--------------------------

products.forEach((prod) => {
  outterContainer.innerHTML += `
  <div class="containerProd" onclick='handleDetail(${prod.id})'>
  <img src="${prod.img}" alt="">
  <div class="title">${prod.title}</div>
  <div class="price">R$ ${prod.price},00</div>
  <div class="parcelas">ou 5x de 77,88</div>
</div>
`;
});

let arraycart = [];

function handleDetail(iD) {
  MainPic.innerHTML = `<img src="${products[iD].img}">`;
  picCarts1.src = products[iD].imgSmall1;
  picCarts2.src = products[iD].imgSmall2;
  picCarts3.src = products[iD].imgSmall3;
  picCarts4.src = products[iD].imgSmall4;
  topTittle.innerHTML = products[iD].title;
  priceCart.innerHTML = `$ ${products[iD].price},00`;
  finalBill.innerHTML = `$ ${products[iD].price * quantity}`;

  cart.classList.add("cartShow");
  body.classList.add("darkLayer");

  if (arraycart.some((prod) => prod.id === iD)) {
    console.log("Ja tem");
  } else {
    const item = products.find((product) => product.id === iD);
    arraycart.push({ ...item });
  }
  console.log(arraycart);
}

// function totalPrice() {
//   let bill;
//   arraycart.forEach((item) => {
//     bill += item.price * item.quantity;
//   });
//   finalBill.innerHTML = `$ ${bill}`;
//   console.log(bill);
// }
//show and remove cart
exe.addEventListener("click", () => {
  cart.classList.remove("cartShow");
  body.classList.remove("darkLayer");
});

//count products
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const qtd = document.querySelector(".qtd");

var quantity = 0;

plus.addEventListener("click", () => {
  quantity++;
  qtd.innerHTML = quantity;
  countBagTop.innerHTML = quantity;
  finalBill.innerHTML = quantity * arraycart.price;
});

minus.addEventListener("click", () => {
  if (quantity > 0) {
    let qtd = arraycart.quantity--;
    qtd.innerHTML = quantity;
    countBagTop.innerHTML = qtd;
  } else {
    return;
  }
});

// ---------------------change pic inside cart------------------

const picsList = document.querySelectorAll(".columSmallPic img");
const MainPic = document.querySelector(".MainPic");
const MainInnerPic = document.querySelectorAll(".MainInnerPic");
const tamanho = document.querySelector(".tamanho");
const sizes = document.querySelector(".sizes");
const optionSize = document.querySelectorAll(".optionSize");

picsList.forEach((pic) => {
  pic.addEventListener("click", (i) => {
    picPath = i.target.src;
    picFinal = picPath
      .split("00")
      .slice(1)
      .toString()
      .split("")
      .slice(1)
      .join("");

    MainPic.innerHTML = `<img src="${picFinal}">`;
    console.log(picFinal);
    console.log(picPath);
  });
});
// ------------------Sizes Cart--------------------
tamanho.addEventListener("click", () => {
  sizes.classList.toggle("toggleSizes");
});

optionSize.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    const label = opt.querySelector("label").innerHTML;
    console.log(label);
    tamanho.innerHTML = label;
  });
});
