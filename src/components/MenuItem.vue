<template>
  <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <ul v-show="list.open" class="list-item">
      <li class="sub-items" v-for="(item, index) in list.sublist" :key="index">{{item}}</li>
    </ul>
  </transition>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    enter(el) {
      el.style.height = "auto";
      const height = getComputedStyle(el).height;
      el.style.height = 0;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = height;
      });
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.list-item {
  list-style: none;
  .sub-items {
    padding: 10px;
    text-indent: 20px;
    color: #fefefe;
    background-color: #333;
    border-top: 1px solid #222;
    &:hover {
      color: #333;
      background-color: #38b087;
    }
  }
}
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>