
<template>
  <div>
    <h2>Checkout</h2>
    <hr />
    <ul class="menu-list center">
      <li>
        <router-link to="/todos">Todos</router-link>
      </li>
      <li>
        <router-link to="/">Catalog</router-link>
      </li>
      <li>
        <router-link to="/ShopCart">ShopCart</router-link>
      </li>
      <li>
        <router-link to="/Product">Product</router-link>
      </li>
    </ul>

    <hr />

    <div
      class="checkout center"
    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, accusamus, magni quidem sapiente ratione ea labore perspiciatis expedita nam aliquid deserunt fugit at, sed eum. Veritatis voluptatum repellendus quos, corporis a totam aliquam quia debitis eveniet, officiis magni enim ex, blanditiis quisquam velit. Vel aspernatur labore nesciunt recusandae dolorem earum ipsa consequuntur excepturi? Unde mollitia quos dicta, fuga laborum dolore odio rem sequi amet quidem labore illo nemo voluptas accusantium, qui quod quae voluptate, sunt ex harum error. Unde, numquam quod, dolore iusto soluta commodi ullam rem architecto, fuga sequi necessitatibus. Illo optio praesentium consectetur, quaerat provident saepe! Quo, quod!</div>
  </div>
</template>

<script>
</script>

<style scoped>
.checkout {
  height: 800px;
  background-color: green;
}
.menu-list {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
}

.menu-list > li {
}
</style>
