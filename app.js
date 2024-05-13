const wrapper = document.querySelector(".sliderWrapper");
const Items = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];

let chooseProd = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductprice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

Items.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the chosen product
    chooseProd = products[index];

    //change text of current products
    currentProductTitle.textContent = chooseProd.title;
    currentProductprice.textContent = "$" + chooseProd.price;
    currentProductImg.src = chooseProd.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chooseProd.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chooseProd.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productBtn = document.querySelector(".productBtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productBtn.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
