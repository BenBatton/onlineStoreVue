<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed" />
      <strong>{{ index + 1 }}</strong>
    </span>
    {{ todo.title | uppercase }}
    <img src="https://via.placeholder.com/200x250" alt />
    {{todo.price}}
    <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped>
li {
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
input {
  margin-right: 1rem;
}
.rm {
  width: 30px;
  height: 30px;
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}
.done {
  text-decoration: line-through;
}
</style>
