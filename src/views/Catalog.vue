
<template>
  <div>
    <h2>Catalog</h2>
    <hr />
    <router-link to="/todos">Todos</router-link>
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
</style>
