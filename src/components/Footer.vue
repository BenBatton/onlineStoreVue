<template>
  <footer>
    <nav class="lowerMenu center">
      <div class="lowerMenu__brand_block">
        <a href="index.html" class="lowerMenu__brand_logo">
          <img src="img/logo.png" alt class="lowerMenu__brand_img" />
          <div class="lowerMenu__brand_name">
            bran
            <span class="letter_D_style">d</span>
          </div>
        </a>
        <div class="lowerMenu__brand_text">
          Objectively transition extensive data rather than cross functional
          solutions. Monotonectally syndicate multidisciplinary materials
          before go forward benefits. Intrinsicly syndicate an expanded array
          of processes and cross-unit partnerships.
          <br />
          <br />Efficiently plagiarize 24/365 action items and focused
          infomediaries. Distinctively seize superior initiatives for wireless
          technologies. Dynamically optimize.
        </div>
      </div>
      <div class="lowerMenu__menu_block">
        <div class="lowerMenu__name">company</div>
        <div class="lowerMenu__list">
          <a href="index.html">Home</a>
          <a href="catalog.html">Shop</a>
          <a href="index.html">About</a>
          <a href="checkout.html">How It Works</a>
          <a href="checkout.html">Contact</a>
        </div>
      </div>
      <div class="lowerMenu__menu_block">
        <div class="lowerMenu__name">information</div>
        <div class="lowerMenu__list">
          <a href="#">Tearms&Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">How to Buy</a>
          <a href="#">How It Cell</a>
          <a href="#">Promotion</a>
        </div>
      </div>
      <div class="lowerMenu__menu_block">
        <div class="lowerMenu__name">shop category</div>
        <div class="lowerMenu__list">
          <a href="catalog.html">Men</a>
          <a href="catalog.html">Women</a>
          <a href="catalog.html">Child</a>
          <a href="catalog.html">Apparel</a>
          <a href="catalog.html">Brows All</a>
        </div>
      </div>
    </nav>
    <div class="footer center">
      <h3 class="footer__copyright">© 2020 Brand All Rights Reserved.</h3>
      <div class="footer__socialBlock">
        <a href="https://facebook.com" class="footer__socialBlock_imgBox">
          <img src="img/f.png" alt />
        </a>
        <a href="https://twitter.com" class="footer__socialBlock_imgBox">
          <img src="img/t.png" alt />
        </a>
        <a href="https://www.instagram.com/?hl=ru" class="footer__socialBlock_imgBox">
          <img src="img/in.png" alt />
        </a>
        <a href class="footer__socialBlock_imgBox">
          <img src="img/p.png" alt />
        </a>
        <a href="https://google.com" class="footer__socialBlock_imgBox">
          <img src="img/g.png" alt />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.lowerMenu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 109px;
}

.lowerMenu__brand_block {
  width: 430px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.lowerMenu__brand_logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.lowerMenu__brand_name {
  font-family: "Lato";
  font-size: 27px;
  font-weight: 300;
  color: #222222;
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 32px;
  text-transform: uppercase;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 13px;
}

.lowerMenu__brand_text {
  font-size: 14px;
  font-weight: 300;
  color: #a4a4a4;
  text-align: right;
  letter-spacing: 0.03em;
  line-height: 24px;
  text-align: start;
  padding-top: 29px;
}

.lowerMenu__name {
  font-size: 18px;
  padding: 15px 0px 30px 0px;
  font-weight: bold;
  color: #f16d7f;
  letter-spacing: 0.03em;
  line-height: 26px;
  text-transform: uppercase;
}

.lowerMenu__list a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  list-style-type: none;
  line-height: 42px;
  font-size: 16px;
  color: #a4a4a4;
  letter-spacing: 0.03em;
}

.lowerMenu__list a:hover {
  color: #f16d7f;
}

.letter_D_style {
  color: #f16d7f;
  font-weight: 900;
}

.footer {
  height: 79px;
  background-color: gainsboro;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 97px;
}

.footer__copyright {
  font-size: 16px;
  color: #e6e6e6;
  letter-spacing: 0.03em;
  line-height: 42px;
}

.footer__socialBlock {
  width: 191px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.footer__socialBlock_imgBox {
  width: 32px;
  height: 32px;
  background-color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 3px;
  -webkit-box-shadow: 0px 0px 10px 0px gray;
  box-shadow: 0px 0px 10px 0px gray;
}

.footer__socialBlock_imgBox:hover {
  background-color: #f16d7f;
  border-radius: 16px;
  -webkit-box-shadow: 0px 0px 10px 0px #f16d7f;
  box-shadow: 0px 0px 10px 0px #f16d7f;
}
</style>