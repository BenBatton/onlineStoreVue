<template>
  <div class="center">
    <ul>
      <Item
        v-for="(todo, i) of todos"
        v-bind:todo="todo"
        v-bind:index="i"
        v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import Item from "@/components/Item";
export default {
  props: ["todos"],
  components: {
    Item,
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
  },
};
</script>

<style lang="sass" scoped>
ul
  display: flex
  flex-wrap: wrap
  list-style: none
  margin: 0
  padding: 0
</style>
