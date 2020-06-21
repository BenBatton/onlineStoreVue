<template>
  <section class="subscribe">
    <div class="subscribe__content center">
      <div class="subscribe__comment">
        <div class="subscribe_photo"></div>
        <div class="comment_block">
          <h4 class="comment_text_h4">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
            pulvinar purus condimentum a. Aliquam condimentum mattis neque
            sed pretium”
          </h4>
          <h2 class="text_author">
            Bin Burhan
            <br />
            <span class="comment_author_address">Dhaka, Bd</span>
          </h2>
          <div class="comment__btn__block">
            <a href>
              <div class="comment__btn__previous"></div>
            </a>
            <a href>
              <div class="comment__btn__current"></div>
            </a>
            <a href>
              <div class="comment__btn__next"></div>
            </a>
          </div>
        </div>
      </div>
      <div class="subscribe_email_form">
        <h2 class="form_name">Subscribe</h2>
        <h3 class="form_description">FOR OUR NEWLETTER AND PROMOTION</h3>
        <form action class="form__send">
          <div>
            <input
              class="email__form"
              type="email"
              name="login"
              placeholder="Enter Your Email"
              size="30"
              required
            />
          </div>
          <button class="send__email__button">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>