
<template>
  <div>
    <h2>Catalog</h2>
    <hr />
    <ul class="menu-list center">
      <li>
        <router-link to="/todos">Todos</router-link>
      </li>
      <li>
        <router-link to="/checkout">Checkout</router-link>
      </li>
      <li>
        <router-link to="/ShopCart">ShopCart</router-link>
      </li>
      <li>
        <router-link to="/Product">Product</router-link>
      </li>
    </ul>

    <hr />

    <div class="catalog center">
      <div>
        <LeftMenu />
      </div>
      <div>
        <SortMenu></SortMenu>
        <BlockItem />
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu";
import SortMenu from "@/components/SortMenu";
import BlockItem from "@/components/BlockItem";

export default {
  components: {
    LeftMenu,
    BlockItem,
    SortMenu
  }
};
</script>

<style scoped>
.catalog {
  display: flex;
  overflow: auto;
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
