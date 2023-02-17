function card() {
  var data = [
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg",
      heading: "Breakfast",
    },
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dcfbb9e09be616e71d818_menu-main-dishes-restaurante-x-template.svg",
      heading: "Main Dishes",
    },
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dcfb5dd3ca61a6dd0ae1c_menu-drinks-restaurante-x-template.svg",
      heading: "Drinks",
    },
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dcfafe6321c66cb474f97_menu-desserts-restaurante-x-template.svg",
      heading: "Desserts",
    },
  ];

  var str = " ";
  data.forEach(function (value) {
    str += `<div class="cards">
        <img src="${value.img}" alt="">
        <h1>${value.heading}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, nemo.</p>
        <a href="">Explore Menu</a>
    </div>`;
  });

  document.querySelector(".card").innerHTML = str;
}
function cardBrowser() {
  var cardData = [
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dca333c0bd679a77bec56_classic-burger-restaurante-x-template-p-500.jpeg",
      price: "$ 10.99 USD",
      header: "Classic Burger",
    },
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dc9ba43f4163d5f7b436e_chocolate-milkshake-restaurante-x-template-p-500.jpeg",
      price: "$ 6.99 USD",
      header: "Chocolate Milkshake",
    },
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dc9aac480169bcc819e69_classic-fries-restaurante-x-template-p-500.jpeg",
      price: "$ 5.99 USD",
      header: "Classic Fries",
    },
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dc56043f416c4db7b3322_pancakes-restaurante-x-template-p-500.jpeg",
      price: "$ 8.99 USD",
      header: "Pancakes",
    },
  ];
  var clutter = " ";
  cardData.forEach(function (elem) {
    clutter += `<div class="browse-cards">

        <div id="upper-card">
            <div id="price">
                <a href="">${elem.price}</a>
            </div>
            <img src="${elem.img}" alt="">
            
        </div>
        <div id="card-details">
            <h1>${elem.header}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, distinctio.</p>
        </div>
    </div>`;
  });
  document.querySelector("#browse-card").innerHTML = clutter;
}

function cardBrowserLower() {
  var dataBase = [
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dc50743f41639377b2fd8_ice-cream-restaurante-x-template-p-500.jpeg",
      prize: "$ 3.99 USD",
      headers: "Ice Cream",
    },
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dc4d28ae55806547e5dba_chicken-burger-restaurante-x-template-p-500.jpeg",
      prize: "$ 9.99 USD",
      headers: "Chicken Burger",
    },
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dc4908009251d2f5ac06b_egg-toast-restaurante-x-template-p-500.jpeg",
      prize: "$ 6.99 USD",
      headers: "Egg toast",
    },
    {
      img: "https://atri-apps.github.io/restaurant_website/app-assets/616dc4908009251d2f5ac06b_egg-toast-restaurante-x-template-p-500.jpeg",
      prize: "$ 1.99 USD",
      headers: "Regular Soda",
    },
  ];
  var str = "";
  dataBase.forEach(function (elem) {
    str += `<div class="btm-cards">
    <div id="btm-upper">
    <div id="prize">
    <a href="">${elem.prize}</a>
  </div>
      <img src="${elem.img}" alt="" />
     
    </div>
    <div id="btm-lower">
      <h1>${elem.headers}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Minus, distinctio.
      </p>
    </div>
  </div>`;
  });
  document.querySelector("#btm-section").innerHTML = str
}
card();
cardBrowser();
cardBrowserLower()
