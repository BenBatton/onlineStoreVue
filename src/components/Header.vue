<template>
  <header class="header center">
    <div class="header__left">
      <a href="#" class="logo">
        <img class="logo__img" src="../assets/img/logo.png" alt="logo" />
        <span class="header__left_logoText">
          bran
          <span class="header__left_logoTextStyleD">d</span>
        </span>
      </a>
      <form action="get" class="header__form">
        <details class="drop__browse_menu">
          <summary class="browse_menu_style">Browse</summary>
          <div class="drop">
            <div class="drop__col">
              <h3 class="drop__h3">woman</h3>
              <ul class="drop__ul">
                <li>
                  <a href="catalog.html" class="drop__a">Dresses</a>
                </li>
                <li>
                  <a href="catalog.html" class="drop__a">Tops</a>
                </li>
                <li>
                  <a href="catalog.html" class="drop__a">Sweaters/Knits</a>
                </li>
                <li>
                  <a href="catalog.html" class="drop__a">Denim</a>
                </li>
                <li>
                  <a href="catalog.html" class="drop__a">Leggings/Pants</a>
                </li>
                <li>
                  <a href="catalog.html" class="drop__a">Skirts/Shorts</a>
                </li>
              </ul>
              <h3 class="drop__h3">woman</h3>
              <ul class="drop__ul">
                <li>
                  <a href="catalog.html" class="drop__a">Denim</a>
                </li>
                <li>
                  <a href="catalog.html" class="drop__a">Leggings/Pants</a>
                </li>
                <li>
                  <a href="catalog.html" class="drop__a">Skirts/Shorts</a>
                </li>
              </ul>
            </div>
          </div>
        </details>
        <input class="header__left_search" type="text" placeholder="Search for item..." required />
        <button class="header__left_imgBoxBtn">
          <img src="img/search.png" alt="search" />
        </button>
      </form>
    </div>
    <div class="header__right">
      <a href="shopping-cart.html">
        <img class="header__cart" src="img/cart.png" alt="cart" />
      </a>
      <details class="header__right_Btn_block">
        <summary class="header__right_BtnText">My Account</summary>
        <div class="basket_menu">
          <div class="basket_contents">
            <div class="basket_product">
              <a href="catalog.html">
                <img
                  class="product_img"
                  src="img/feturedItems/product_in_basket_1.png"
                  alt="photo product"
                />
              </a>
              <div class="basket_item_content">
                <h3 class="basket_product_name">Rebox Zane</h3>
                <img class="rating_img" src="img/feturedItems/rating.png" alt="pic" />
                <h4 class="basket_product_price">1 x $250</h4>
              </div>
            </div>
            <div class="basket_product">
              <a href="catalog.html">
                <img
                  class="product_img"
                  src="img/feturedItems/product_in_basket_2.png"
                  alt="photo product"
                />
              </a>
              <div class="basket_item_content">
                <h3 class="basket_product_name">Rebox Zane</h3>
                <img class="rating_img" src="img/feturedItems/rating.png" alt="pic" />
                <h4 class="basket_product_price">1 x $250</h4>
              </div>
            </div>
            <div class="basket_total">
              <h3>TOTAL</h3>
              <h3>$500.00</h3>
            </div>
            <div class="basket_buttons">
              <a href="checkout.html" class="btn_checkout">checkout</a>
              <a href="shopping-cart.html" class="btn_goto-cart">go to cart</a>
            </div>
          </div>
        </div>
      </details>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  height: 100px;
  background-color: white;
  border: 1px solid #e6e6e6;
  -webkit-box-shadow: 0px 0px 10px 0px #ececec;
  box-shadow: 0px 0px 10px 0px #ececec;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header__left_logoTextStyleD,
.header__left_logoText {
  font-size: 27px;
  font-weight: 300;
  color: #222222;
  letter-spacing: 0.03em;
  line-height: 32px;
  text-transform: uppercase;
}
.header__left_logoTextStyleD {
  font-weight: 900;
  color: #f16d7f;
  text-transform: uppercase;
}

.header__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.header__right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>