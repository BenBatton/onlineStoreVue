<template>
  <ul class="wrapper">
    <li v-for="(item, index) in list" :key="'item' + index">
      <i class="fas fa-chevron-circle-right" :class="{'open' :item.open}"></i>
      <div class="title" @click="item.open = !item.open">{{item.title}}</div>
      <MenuItem :list="item" />
    </li>
  </ul>
</template>

<script>
import MenuItem from "@/components/MenuItem";
export default {
  data: () => {
    return {
      list: [
        {
          title: "Projects",
          open: true,
          sublist: ["Vue", "SCSS", "JS", "TypeScript"]
        },
        {
          title: "Technologes",
          open: false,
          sublist: ["Vue CLI", "SASS", "Java"]
        },
        {
          title: "Search",
          open: false,
          sublist: ["Babel", "Post", "Get"]
        },
        {
          title: "Settings",
          open: false,
          sublist: ["Account", "Cart", "Exit"]
        }
      ]
    };
  },
  mounted() {
    fetch(
      "https://raw.githubusercontent.com/BenBatton/online-store-api/master/LeftMenuItems.json"
    )
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.list = json;
        });
      });
  },
  components: {
    MenuItem
  }
};
</script>

<style lang="sass" scoped>
.wrapper 
    width: 250px

    list-style: none
    background-color: #fefefe
    box-shadow: 0 2px
    border-radius: 4px
    overflow: hidden

li 
    position: relative
    color: #555
    border-top: 1px solid #dedede
    cursor: pointer
    .title 
        padding: 10px 0
        text-indent: 20px
    i
        position: absolute
        top: 14px
        right: 10px
        transition: transform .5s ease-in-out
        &.open
            transform: rotateZ(90deg)
    
    &:hover
        color: #4f7351
        background-color: #DFEEE0

</style>